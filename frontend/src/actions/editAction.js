import { redirect } from "react-router-dom";

const editNote = async (id) => setTimeout(() => console.log(id), 1000);

export default async function editAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  await editNote(params.id);
  return redirect(`${params.id}`);
}
