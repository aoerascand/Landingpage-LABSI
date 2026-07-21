import axios from "axios";
import { GOOGLE_SCRIPT_URL } from "../components/Config/api";

// Map human-readable branch labels to sheet/tab names inside the same spreadsheet.
const BRANCH_SHEET_MAP = {
  "LABSI x The Padel Side": "Condet",
  "LABSI x Backyard": "Kemang",
};

const BRANCH_SHORT_MAP = {
  "LABSI x The Padel Side": "Condet",
  "LABSI x Backyard": "Kemang",
};

const PLACEHOLDER_FAMILY_CARD = {
  name: "school-origin-placeholder.pdf",
  type: "application/pdf",
  size: 1,
  base64: "dGVzdA==",
};

export const submitRegistration = async (payload) => {
  const branchLabel = payload?.registration?.branch || "";
  const sheet = BRANCH_SHEET_MAP[branchLabel] || "Registrations";
  const academy = BRANCH_SHORT_MAP[branchLabel] || "General";

  // Include the target sheet name and both lowercase and capitalized academy
  // keys. Some existing Apps Script implementations look for `Academy` (cap),
  // others for `academy`. Sending both ensures compatibility and creates a
  // header named `Academy` in the spreadsheet.
  // Always include a placeholder familyCard to satisfy backend validation
  const body = {
    ...payload,
    familyCard: payload.familyCard || PLACEHOLDER_FAMILY_CARD,
    sheet,
    academy,
    Academy: academy,
  };

  const response = await axios.post(
    GOOGLE_SCRIPT_URL,
    JSON.stringify(body),
    {
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }
  );

  if (!response.data?.success) {
    throw new Error(
      response.data?.message || "Data gagal disimpan ke Google Sheets."
    );
  }

  return response.data;
};