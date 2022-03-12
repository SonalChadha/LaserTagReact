import React from "react";
//import { useNavigate } from "react-router-dom";

const GreenPlayerScore = ({ player, deletePlayer }) => {
//   const navigate = useNavigate();
//   const editPlayer = (e, id) => {
//     e.preventDefault();
//     navigate(`/editGreenPlayer/${id}`);
//   };

  return (
    <tr key={player.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{player.id}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{player.codeValue}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        {/* <a
          onClick={(e, id) => editPlayer(e, player.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
          Edit
        </a>
        <a
          onClick={(e, id) => deletePlayer(e, player.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
          Delete
        </a> */}
      </td>
    </tr>
  );
};

export default GreenPlayerScore;