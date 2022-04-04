import { useState, useEffect } from 'react';
import PlayerScoreBoard from './PlayerScoreboard';
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
var stompClient =null;
//var Sock = null;
const GameScreen = () => {
  const [countdown, setCountdown] = useState(3)
  const [switchDisplay, setSwitchDisplay] = useState(false)
  const [display, setDisplay] = useState(true)
  
  const [whoHITwho, setWhoHITwho] = useState()
  
  useEffect(() => {
      // Decrements timer and waits one second
      if(countdown !== 0){
        const timer = setInterval(() => {
          setCountdown(countdown - 1)
        }, 1000)
        return () => {
          clearInterval(timer)
        }
      }
      // Switch to gameplay timer
      if(countdown === 0 && display) {
        setDisplay(false)
        setCountdown(360)
        setSwitchDisplay(true)
      }

      // Gameplay timer ends
      if(countdown === 0 && switchDisplay) {
        setSwitchDisplay(false)
        setCountdown(0)
      }
  }, [countdown, display, switchDisplay])

  useEffect(() => {
      var Sock = new SockJS('http://127.0.0.1:8080/ws');
      //console.log("Sock works");
      stompClient = over(Sock);
      stompClient.connect({},onConnected, onError);

      return () => {
        //setWhoHITwho("null")
        Sock.close();
        //setWhoHITwho("null")
        //setWhoHITwho(JSON.stringify(null))
      }
  })

  const onConnected = () => {
    stompClient.subscribe('/chatroom/public', onMessageReceived);
    var dummyMessage = {};
    stompClient.send("/app/message", {}, JSON.stringify(dummyMessage));
  }

  const onMessageReceived = (payload)=>{
    var payloadData = JSON.parse(payload.body);
    console.log(JSON.stringify(payloadData["message"]))
    //if(Object.values(JSON.stringify(payloadData["message"])).length !== 4)
      setWhoHITwho(JSON.stringify(payloadData["message"]));
    console.log(JSON.stringify(payloadData["message"]));
  }

  const onError = (err) => {
    console.log(err);
  }

  // Show get ready timer
  if (display) {
    return(
      <div className="flex items-center justify-center bg-gradient-to-r from-red-300 to-blue-400 max-w-full min-h-screen mx-auto">
          <div className="">
            <h1 className="min-w-full font-mono text-center uppercase tracking-wider text-2xl font-semibold mx-auto">Game is about to start. 
              <br />
              <p className="text-xl">
              {Math.floor(countdown/60) < 10 ?
              "0" + Math.floor(countdown/60) : Math.floor(countdown/60)}:
              {countdown%60 < 10 ?
              "0" + countdown%60 : countdown%60}
              </p>
              
              <br />
            </h1>
          </div>
        </div>
    )
  // Show game timer
  } else {
    return(
      <>
      <div className="h-30 flex items-center justify-center bg-gradient-to-r from-red-300 to-blue-400 max-w-full container mx-auto">
        
        <div className="">
          <h1 className="min-w-full font-mono text-center uppercase tracking-wider text-2xl font-semibold mx-auto">Game has begun.
              <br />
              <p className="text-xl">
                {Math.floor(countdown/60) < 10 ?
                "0" + Math.floor(countdown/60) : Math.floor(countdown/60)}:
                {countdown%60 < 10 ?
                "0" + countdown%60 : countdown%60}
              </p>
              <h1>{whoHITwho}</h1>
              <br />
          </h1>
        </div>
      </div>
      <PlayerScoreBoard hitDATA = {whoHITwho}/>
      
      </>)
  }
}

export default GameScreen;