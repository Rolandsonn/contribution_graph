import { AxiosResponse } from "axios";
import axios from "axios";

export async function fetchData(): Promise<void> {
  try {
    const response: AxiosResponse = await axios.get(
      "https://dpg.gg/test/calendar.json"
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
