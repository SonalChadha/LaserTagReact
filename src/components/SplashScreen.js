import logo from "../logo.jpg";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SpashScreen() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
      
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, [])
  
    
    return ( 
        loading ?
        <img className="m-auto" src = {logo} width={window.outerWidth/1.45} height={window.outerHeight} 
        loading={loading} alt="Splash Screen" />
        : <>{navigate("/playerEntryScreen")}</>
        
    );
}

export default SpashScreen;