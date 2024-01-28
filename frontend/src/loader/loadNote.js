const getNote = () => {
  return { title: "Note title", content: "Note Content" };
};

export default async function loadNote({ params }) {
  const note = getNote(params.id);
  return note;
}
