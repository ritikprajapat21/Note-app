import { Form } from "react-router-dom";
import "../styles/create.css";

export default function Create() {
  return (
    <Form method="post" className="create-form">
      <label htmlFor="note">
        <span>Note Title</span>
        <input
          type="text"
          name="title"
          id="note"
          placeholder="Enter the title of the note"
          required
        />
      </label>
      <label htmlFor="content">
        <span>Note Content</span>
        <textarea
          type="text"
          name="content"
          id="content"
          placeholder="Enter the content of the note"
        />
      </label>
      <button type="submit">Create</button>
    </Form>
  );
}
