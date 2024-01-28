import { Form } from "react-router-dom";
import "./styles.css";

export default function Input() {
  return (
    <Form>
      <label>Enter the name of the note</label>
      <input type="text" />
      <label>Note</label>
      <input type="text" />
      <button type="submit">Create Note</button>
    </Form>
  );
}
