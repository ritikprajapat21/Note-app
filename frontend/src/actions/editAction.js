import { redirect } from "react-router-dom";
import axios from "axios";

export default async function editAction({ request, params }) {
  const { id } = params;
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const result = await axios.put(`http://localhost:3001/${id}`, {
    title: data.title,
    content: data.content,
  });
  console.log(result);
  return redirect(`/${params.id}`);
}
