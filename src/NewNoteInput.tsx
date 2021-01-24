import React, { ChangeEvent, useState } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    if (note === "") return;
    addNote(note);
    setNote("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="My notes"
      />
      <button type="submit" onClick={onAddNoteClick}>
        Add
      </button>
    </form>
  );
};

export default NewNoteInput;
