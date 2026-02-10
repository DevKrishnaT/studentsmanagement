import { useState } from "react";

const StudentCard = ({ id, name, tableNo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editTableNo, setEditTableNo] = useState(tableNo);

  const handleSave = () => {
    onUpdate(id, {
      name: editName,
      tableNo: Number(editTableNo),
    });
    setIsEditing(false);
  };

  return (
    <div
      className="
        group relative
        rounded-2xl
        p-5
        bg-[#060010]
        border border-white/15
        transition-all duration-300
        hover:-translate-y-1
        hover:border-purple-500/80
        hover:shadow-[0_0_25px_rgba(132,0,255,0.35)]
      "
    >
     
      <div
        className="
          absolute inset-0 rounded-2xl
          pointer-events-none
          opacity-0
          group-hover:opacity-100
          transition
          bg-[radial-gradient(circle_at_top,rgba(132,0,255,0.15),transparent_60%)]
        "
      />

      <div className="relative flex justify-between text-lg text-gray-400">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="hover:text-purple-400"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="hover:text-green-400"
          >
            Save
          </button>
        )}

        <button
          onClick={() => onDelete(id)}
          className="hover:text-red-400"
        >
          Delete
        </button>
      </div>

      
      <div className="relative mt-4">
        {!isEditing ? (
          <>
            <h3
              onClick={() => setIsEditing(true)}
              className="text-lg font-semibold text-white cursor-text"
            >
              {name}
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Table No. {tableNo}
            </p>
          </>
        ) : (
          <div className="flex flex-col gap-2">
            <input
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              autoFocus
              className="
                bg-transparent
                border border-white/20
                rounded-lg
                px-3 py-1.5
                text-white
                outline-none
                focus:border-purple-500
              "
            />

            <input
              type="number"
              value={editTableNo}
              onChange={(e) => setEditTableNo(e.target.value)}
              className="
                bg-transparent
                border border-white/20
                rounded-lg
                px-3 py-1.5
                text-white
                outline-none
                focus:border-purple-500
              "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentCard;
