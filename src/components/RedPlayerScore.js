import React, { useState, useEffect } from "react";
const RedPlayerScore = ({ player, hits }) => {
  const [currRedScore, setCurrRedScore] = useState(0)

  useEffect(() => {
    if(String(Object.values(hits)).includes(":")) {
      var numberPattern = /\d+/g;

      var transmitNumber = String(Object.values(hits)).match(numberPattern)[0];

      var hitNumber = String(Object.values(hits)).match(numberPattern)[1];
      if(player.id === parseInt(transmitNumber)) {
        setCurrRedScore(currRedScore + 10)
      }
      else if(player.id === parseInt(hitNumber) && currRedScore >= 10) {
        setCurrRedScore(currRedScore - 10)
      }
    }
  }, [hits])

  return (
    <tr key={player.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{player.id}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{player.codeValue}</div>
      </td>
      
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <div className="text-sm text-gray-900">{currRedScore}</div>
      </td>
    </tr>
  );
};

export default RedPlayerScore;