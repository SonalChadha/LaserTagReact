import React, { useState } from "react";
import RedPlayerService from "../services/RedPlayerService";

const AddRedPlayer = () => {
  const [player, setPlayer] = useState({
    id:1, 
    codeValue:""
  });  

  const handleChange = (e) => {
    const value = e.target.value;
    setPlayer({ ...player, [e.target.name]: value });
  };

  const savePlayer = (e) => {
    e.preventDefault();
    if(player.id < 1 || player.id > 15)
      return
    if(player.codeValue === "")
      player.codeValue = "JohnDoe0123"
    RedPlayerService.savePlayer(player)
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
          <label className="text-black text-sm font-semibold">
            ID (1-15)
          </label>
          <input
            type="number"
            name="id"
            value={player.id}
            onChange={(e) => handleChange(e)}
            className="h-6 w-50 border mt-2 px-2 py-2"
            min="1"
            max="15"></input>
        </div>
        <div className="space-x-2">
          <label className="text-black text-sm font-semibold">
            Code Value
          </label>
          <input
            type="text"
            name="codeValue"
            value={player.codeValue}
            onChange={(e) => handleChange(e)}
            className="h-6 w-50 border mt-2 px-2 py-2" placeholder="JohnDoe0123"></input>
        </div>
        <div className="mx-20 h-14 my-4 space-x-14 pt-4">
        <button
          type="submit"
          onClick={savePlayer}
          className="rounded text-black font-semibold bg-lime-500 hover:bg-lime-700 py-2 px-6">
          Save
        </button>
        <button
          onClick={reset}
          className="rounded text-black font-semibold bg-red-600 hover:bg-red-800 py-2 px-6">
          Clear
        </button>

        </div>
      </div>
      
      </div>
    
  );
};

export default AddRedPlayer;