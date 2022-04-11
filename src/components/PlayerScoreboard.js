import React, { useEffect, useState } from "react";
import RedPlayerService from "../services/RedPlayerService";
import GreenPlayerService from "../services/GreenPlayerService";
import RedPlayerScore from "./RedPlayerScore";
import GreenPlayerScore from "./GreenPlayerScore";
import { useNavigate } from "react-router-dom";

const PlayerScoreBoard = (hitDATA) => {
  const [redLoading, setRedLoading] = useState(true);
  const [greenLoading, setGreenLoading] = useState(true);
  const [redPlayers, setRedPlayers] = useState(null);
  const [greenPlayers, setGreenPlayers] = useState(null);
  const [totalRedScore, setTotalRedScore] = useState(0);
  const [totalGreenScore, setTotalGreenScore] = useState(0);
  const [playerTransmitting, setPlayerTransmitting] = useState();
  const [playerHit, setPlayerHit] = useState();
  const navigate = useNavigate();
  
  const handleUserKeyPress = event => {
    const { keyCode } = event;
    if (keyCode === 116) {
        navigate("/gameScreen");
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      setRedLoading(true);
      try {
        const response = await RedPlayerService.getPlayers();
        setRedPlayers(response.data);
       console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setRedLoading(false);
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      setGreenLoading(true);
      try {
        const response = await GreenPlayerService.getPlayers();
        setGreenPlayers(response.data);
      } catch (error) {
        console.log(error);
      }
      setGreenLoading(false);
    };
    fetchData();
  }, []);

  const changePlayerTransmitting = (nameOfPlayerTrans) => {
    setPlayerTransmitting(nameOfPlayerTrans)
  };

  const changePlayerHit = (nameOfPlayerHit) => {
    setPlayerHit(nameOfPlayerHit)
  };

  const changeTotalGreenScore = (changeByHowMuch) => {
    setTotalGreenScore(totalGreenScore + changeByHowMuch)
  };

  const changeTotalRedScore = (changeByHowMuch) => {
    setTotalRedScore(totalRedScore + changeByHowMuch)
  };

  return (
    <div className="container mx-auto my-5">
      <h1 className="font-extrabold text-2xl text-center text-fuchsia-900">
        {playerTransmitting} hit {playerHit}
      </h1>
      <div className="flex shadow border-b">
        <table className="min-w-[50%]">
          <thead className="bg-red-500" >
            <tr>
              <th className="text-left font-medium text-gray-100 uppercase tracking-wider py-3 px-6">
                ID
              </th>
              <th className="text-left font-medium text-gray-100 uppercase tracking-wider py-3 px-6">
                Code Value
              </th>
              <th className="text-right font-medium text-gray-100 uppercase tracking-wider py-3 px-6">
                Score
              </th>
            </tr>
          </thead>
          {!redLoading && (
            <tbody className="bg-red-300">
              {redPlayers.map((player) => (
                <RedPlayerScore
                  player={player}
                  key={player.id}
                  hits={hitDATA} 
                  changeTotalScore={changeTotalRedScore}
                  changePlayerH={changePlayerHit}
                  changePlayerT={changePlayerTransmitting}>
                  </RedPlayerScore>
              ))}
            </tbody>
            
          )}
           <tr className="bg-red-500">
            <td>
            </td>
            <td>
            </td>
            <td className="text-right font-medium text-gray-100 uppercase tracking-wider py-3 px-6">TOTAL SCORE: {totalRedScore}</td>
          </tr>
        </table>
     
        <table className="min-w-[50%]">
          <thead className="bg-green-600">
            <tr>
              <th className="text-left font-medium text-gray-100 uppercase tracking-wider py-3 px-6">
                ID
              </th>
              <th className="text-left font-medium text-gray-100 uppercase tracking-wider py-3 px-6">
                Code Value
              </th>
              <th className="text-right font-medium text-gray-100 uppercase tracking-wider py-3 px-6">
                Score
              </th>
            </tr>
          </thead>
          {!greenLoading && (
            <tbody className="bg-green-200">
              {greenPlayers.map((player) => (
                
                <GreenPlayerScore
                  player={player}
                  key={player.id} 
                  hits={hitDATA} 
                  changeTotalScore={changeTotalGreenScore}
                  changePlayerH={changePlayerHit}
                  changePlayerT={changePlayerTransmitting}></GreenPlayerScore>
              ))}
            </tbody>
          )}
          <tr className="bg-green-600">
            <td>
            </td>
            <td>
            </td>
            <td className="text-right font-medium text-gray-100 uppercase tracking-wider py-3 px-6">TOTAL SCORE: {totalGreenScore}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default PlayerScoreBoard;