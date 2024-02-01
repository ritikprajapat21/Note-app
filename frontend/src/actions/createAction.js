import axios from "axios";
import { redirect } from "react-router-dom";

export default async function createAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  await axios.post("http://localhost:3001/create", { ...data });
  return redirect("/");
}
