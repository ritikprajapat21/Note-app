import axios from "axios";

export default async function loadNote({ params }) {
  try {
    const response = await axios.get(`http://localhost:3001/${params.id}`);
    const note = { status: response.status, note: response.data[0] };
    return note;
  } catch (err) {
    throw new Error("Retry again");
  }
}
