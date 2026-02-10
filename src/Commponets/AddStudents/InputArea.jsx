import React, { useState } from "react";
import { addstudents } from "../../api/Studentsapis";

const InputArea = ({ onStudentAdded }) => {
  const [name, setName] = useState("");
  const [tableNo, setTableNo] = useState("");

  const handleAdd = async () => {
    if (!name || !tableNo) return;

    try {
      await addstudents({
        name,
        tableNo: Number(tableNo),
      });

      onStudentAdded?.();

      setName("");
      setTableNo("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full flex justify-center mt-6">
      <div
        className="
          flex items-center gap-2
          bg-[#060010]
          border border-white/15
          rounded-full
          px-3 py-2
          transition
          hover:border-purple-500/70
          hover:shadow-[0_0_20px_rgba(132,0,255,0.25)]
        "
      >
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="
            bg-transparent
            outline-none
            text-white
            placeholder-gray-400
            px-3
            w-40
          "
        />

        <div className="h-6 w-px bg-white/10" />

        <input
          type="number"
          placeholder="Table"
          value={tableNo}
          onChange={(e) => setTableNo(e.target.value)}
          className="
            bg-transparent
            outline-none
            text-white
            placeholder-gray-400
            px-3
            w-24
          "
        />

        <button
          onClick={handleAdd}
          disabled={!name || !tableNo}
          className="
            ml-1
            px-5 py-1.5
            rounded-full
            bg-purple-600/90
            text-white
            font-medium
            transition
            hover:bg-purple-500
            disabled:opacity-40
            disabled:cursor-not-allowed
          "
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default InputArea;
