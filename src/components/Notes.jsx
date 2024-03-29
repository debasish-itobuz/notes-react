import React, { useEffect, useState } from "react";
import axios from "axios";

//setNotes - function, notes - variable, setnotes dia notes er value pathacchi
const Notes = () => {
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    try {
      const rawData = await axios.get("http://localhost:8011/notes/get/");
      console.log(rawData);
      setNotes(rawData.data.notes);
      console.log(rawData.data.notes);
    } catch (e) {
      console.log(e.message);
    }
  };
  //getNotes will be called on page load
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold m-5 text-center">Notes</h1>
      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {notes.map((item, index) => {
          return (
            <div key={item._id} className="h-[15rem] w-[15rem] bg-slate-200 p-2 rounded">
            <h1 className="text-2xl">Title:</h1>
              <h2>{item.title}</h2>
              <h2 className="text-xl mt-2">Description</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
