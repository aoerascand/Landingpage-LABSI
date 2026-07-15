import axios from "axios";
import { GOOGLE_SCRIPT_URL } from "../components/Config/api";

export const submitRegistration = async (payload) => {
  const response = await axios.post(
    GOOGLE_SCRIPT_URL,
    JSON.stringify(payload),
    {
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }
  );

  if (!response.data?.success) {
    throw new Error(
      response.data?.message ||
        "Data gagal disimpan ke Google Sheets."
    );
  }

  return response.data;
};