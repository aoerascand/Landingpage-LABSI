const SPREADSHEET_ID = "https://docs.google.com/spreadsheets/d/1tSb0lnc5VK7Mzdl3SV-7xThuZJTx-bLsuhXduPu4jMw/edit?gid=0#gid=0";
const SHEET_NAME = "Registrations";
const DRIVE_FOLDER_ID = "MASUKKAN_FOLDER_ID";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
];

function doGet() {
  return createJsonResponse({
    success: true,
    message: "LABSI registration endpoint is active.",
  });
}

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000);

    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("Request tidak berisi data.");
    }

    const requestData = JSON.parse(e.postData.contents);
    const registration = requestData.registration || {};
    const familyCard = requestData.familyCard || null;

    validateRequest(registration, familyCard);

    let familyCardUrl = "";
    let familyCardFileId = "";
    let familyCardName = "";

    if (familyCard && familyCard.base64) {
      const uploadedFile = saveFamilyCard(familyCard, registration);

      familyCardUrl = uploadedFile.getUrl();
      familyCardFileId = uploadedFile.getId();
      familyCardName = uploadedFile.getName();
    }

    const submittedAt =
      requestData.submittedAt || new Date().toISOString();

    const rowData = {
      submittedAt,
      ...sanitizeObject(registration),
      familyCardName,
      familyCardUrl,
      familyCardFileId,
    };

    appendRegistration(rowData);

    return createJsonResponse({
      success: true,
      message: "Pendaftaran berhasil disimpan.",
      data: {
        submittedAt,
        familyCardName,
      },
    });
  } catch (error) {
    console.error(error);

    return createJsonResponse({
      success: false,
      message: error.message || "Terjadi kesalahan pada server.",
    });
  } finally {
    lock.releaseLock();
  }
}

function validateRequest(registration, familyCard) {
  if (!registration || typeof registration !== "object") {
    throw new Error("Data pendaftaran tidak valid.");
  }

  if (!familyCard || !familyCard.base64) {
    throw new Error("Fotokopi Kartu Keluarga wajib diunggah.");
  }

  if (!familyCard.name) {
    throw new Error("Nama file Kartu Keluarga tidak ditemukan.");
  }

  if (!ALLOWED_MIME_TYPES.includes(familyCard.type)) {
    throw new Error("File harus berformat PDF, JPG, atau PNG.");
  }

  if (Number(familyCard.size) > MAX_FILE_SIZE) {
    throw new Error("Ukuran file maksimal 5 MB.");
  }
}

function saveFamilyCard(familyCard, registration) {
  const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);

  const base64Data = familyCard.base64.includes(",")
    ? familyCard.base64.split(",")[1]
    : familyCard.base64;

  const decodedData = Utilities.base64Decode(base64Data);

  const studentIdentifier =
    registration.studentName ||
    registration.childName ||
    registration.name ||
    "student";

  const safeStudentName = sanitizeFileName(studentIdentifier);
  const originalFileName = sanitizeFileName(familyCard.name);
  const timestamp = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    "yyyyMMdd-HHmmss"
  );

  const finalFileName =
    timestamp + "-" + safeStudentName + "-" + originalFileName;

  const blob = Utilities.newBlob(
    decodedData,
    familyCard.type,
    finalFileName
  );

  return folder.createFile(blob);
}

function appendRegistration(rowData) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);

  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  const lastColumn = sheet.getLastColumn();
  let headers = [];

  if (lastColumn > 0) {
    headers = sheet
      .getRange(1, 1, 1, lastColumn)
      .getValues()[0]
      .filter(String);
  }

  const incomingHeaders = Object.keys(rowData);

  incomingHeaders.forEach((header) => {
    if (!headers.includes(header)) {
      headers.push(header);
    }
  });

  if (headers.length === 0) {
    throw new Error("Tidak ada data yang dapat disimpan.");
  }

  sheet
    .getRange(1, 1, 1, headers.length)
    .setValues([headers]);

  const row = headers.map((header) => {
    return sanitizeCellValue(rowData[header] ?? "");
  });

  sheet.appendRow(row);
}

function sanitizeObject(data) {
  return Object.keys(data).reduce((result, key) => {
    result[key] = sanitizeCellValue(data[key]);
    return result;
  }, {});
}

function sanitizeCellValue(value) {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "object") {
    value = JSON.stringify(value);
  }

  const stringValue = String(value).trim();

  // Mencegah spreadsheet formula injection.
  if (/^[=+\-@]/.test(stringValue)) {
    return "'" + stringValue;
  }

  return stringValue;
}

function sanitizeFileName(fileName) {
  return String(fileName || "file")
    .trim()
    .replace(/[^\w.\- ]+/g, "")
    .replace(/\s+/g, "-")
    .substring(0, 100);
}

function createJsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}