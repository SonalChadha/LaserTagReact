import React, { useState } from "react";
import GreenPlayerService from "../services/GreenPlayerService";

const AddGreenPlayer = () => {
  const [player, setPlayer] = useState({
    id:0, 
    codeValue:""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setPlayer({ ...player, [e.target.name]: value });
  };

  const savePlayer = (e) => {
    e.preventDefault();
    if(player.codeValue === "")
      player.codeValue = "JohnDoe0123"
    GreenPlayerService.savePlayer(player)
      .then((response) => {
        console.log(response);
        window.location.reload(false);  
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setPlayer({
      id: 0,
      codeValue: "",
    });
  };

  return (
    <div className="inline-flex px-10 w-1/2 shadow border-b">
      <div>
        <div className="space-x-2"> 
          <label className="text-gray-600 text-sm font-normal">
            ID
          </label>
          <input
            type="number"
            name="id"
            value={player.id}
            onChange={(e) => handleChange(e)}
            className="h-6 w-50 border mt-2 px-2 py-2"></input>
        </div>
        <div className="space-x-2">
          <label className="text-gray-600 text-sm font-normal">
            Code Value
          </label>
          <input
            type="text"
            name="codeValue"
            value={player.codeValue}
            placeholder="JohnDoe0123"
            onChange={(e) => handleChange(e)}
            className="h-6 w-50 border mt-2 px-2 py-2"></input>
        </div>
        {/* <div className="space-x-2">
          <label className="text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={player.emailId}
            onChange={(e) => handleChange(e)}
            className="h-6 w-96 border mt-2 px-2 py-2"></input>
        </div> */}

        <div className="mx-20 h-14 my-4 space-x-14 pt-4">
        <button
          onClick={savePlayer}
          className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
          Save
        </button>

        <button
          onClick={reset}
          className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
          Clear
        </button>

        </div>
      </div>
      
      </div>
    
  );
};

export default AddGreenPlayer;