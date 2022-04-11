import React, { useState, useEffect } from "react";

const GreenPlayerScore = ({ player, hits, changeTotalScore, changePlayerH, changePlayerT}) => {
  const [currGreenScore, setCurrGreenScore] = useState(0)

  useEffect(() => {
    if(String(Object.values(hits)).includes(":")) {
      var numberPattern = /\d+/g;

      var transmitNumber = String(Object.values(hits)).match(numberPattern)[0];

      var hitNumber = String(Object.values(hits)).match(numberPattern)[1];
      if(player.id === parseInt(transmitNumber)) {
        setCurrGreenScore(currGreenScore + 10)
        changeTotalScore(10)
        changePlayerT(player.codeValue)
      }
      else if(player.id === parseInt(hitNumber) && currGreenScore >= 10) {
        setCurrGreenScore(currGreenScore - 10)
        changeTotalScore(-10)
        changePlayerH(player.codeValue)
      }
      else if(player.id === parseInt(hitNumber)) {
        changePlayerH(player.codeValue)
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
        <div className="text-sm text-gray-900">{currGreenScore}</div>
      </td>
    </tr>
  );
};

export default GreenPlayerScore;