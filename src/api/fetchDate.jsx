import axios from "axios";

export async function fetchData() {
  try {
    const response = await axios.get("https://dpg.gg/test/calendar.json");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
