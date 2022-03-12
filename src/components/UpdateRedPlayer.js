import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RedPlayerService from "../services/RedPlayerService";

const UpdateRedPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [player, setPlayer] = useState({
    id: id,
    codeValue: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setPlayer({ ...player, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RedPlayerService.getPlayerById(player.id);
        setPlayer(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updatePlayer = (e) => {
    e.preventDefault();
    if(player.codeValue === "")
      player.codeValue = "JohnDoe0123"
    RedPlayerService.updatePlayer(player, id)
      .then((response) => {
        navigate("/playerEntryScreen");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Player</h1>
        </div>
        {/* <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            ID
          </label>
          <input
            type="number"
            name="id"
            value={player.id}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2" required></input>
        </div> */}
        {/* <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={player.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2" required></input>
        </div> */}
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Code Value
          </label>
          <input
            type="text"
            name="codeValue"
            value={player.codeValue}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2" placeholder="JohnDoe0123"></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updatePlayer}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Update
          </button>
          <button
            onClick={() => navigate("/playerEntryScreen")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateRedPlayer;