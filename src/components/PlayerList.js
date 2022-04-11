import React, { useEffect, useState } from "react";
import RedPlayerService from "../services/RedPlayerService";
import GreenPlayerService from "../services/GreenPlayerService";
import RedPlayer from "./RedPlayer";
import GreenPlayer from "./GreenPlayer";
import AddRedPlayer from "./AddRedPlayer";
import AddGreenPlayer from "./AddGreenPlayer";
import { useNavigate } from "react-router-dom";
const PlayerList = () => {
  const [redLoading, setRedLoading] = useState(true);
  const [greenLoading, setGreenLoading] = useState(true);
  const [redPlayers, setRedPlayers] = useState(null);
  const [greenPlayers, setGreenPlayers] = useState(null);
  const navigate = useNavigate();
  
  const handleUserKeyPress = event => {
    const { key, keyCode } = event;
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

  const deleteRedPlayer = (e, id) => {
    e.preventDefault();
    RedPlayerService.deletePlayer(id).then((res) => {
      if (redPlayers) {
        setRedPlayers((prevElement) => {
          return prevElement.filter((player) => player.id !== id);
        }); 
      }
    });
  };

  const deleteGreenPlayer = (e, id) => {
    e.preventDefault();
    GreenPlayerService.deletePlayer(id).then((res) => {
      if (greenPlayers) {
        setGreenPlayers((prevElement) => {
          return prevElement.filter((player) => player.id !== id);
        }); 
      }
    });
  };

  return (
    <div className="container mx-auto my-17">
      
      <AddRedPlayer />
      <AddGreenPlayer />
      
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
                Actions
              </th>
            </tr>
          </thead>
          {!redLoading && (
            <tbody className="bg-red-300">
              {redPlayers.map((player) => (
                <RedPlayer
                  player={player}
                  deletePlayer={deleteRedPlayer}
                  key={player.id}></RedPlayer>
              ))}
            </tbody>
          )}
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
                Actions
              </th>
            </tr>
          </thead>
          {!greenLoading && (
            <tbody className="bg-green-200">
              {greenPlayers.map((player) => (
                <GreenPlayer
                  player={player}
                  deletePlayer={deleteGreenPlayer}
                  key={player.id}></GreenPlayer>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default PlayerList;