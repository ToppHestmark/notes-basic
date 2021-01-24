import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NewNoteInput from "./NewNoteInput";
import { addNote } from "./store/actions";
import { NotesState } from "./store/notesReducer";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <div>
        <NewNoteInput addNote={onAddNote} />
      </div>
      <hr />
      <ul>
        {notes.map((note) => (
          <li key={note}> {note} </li>
        ))}
      </ul>
    </>
  );
}

export default App;
