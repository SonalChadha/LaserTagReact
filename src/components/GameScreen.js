import { useState, useEffect } from 'react';
import PlayerScoreBoard from './PlayerScoreboard';

const GameScreen = () => {
  const [countdownMins, setCountdownMins] = useState(0)
  const [countdownSecs, setCountdownSecs] = useState(30)
  const [switchDisplay, setSwitchDisplay] = useState(false)
  const [display, setDisplay] = useState(true)
  
  useEffect(() => {
      if((countdownSecs === 0 && countdownMins !== 0 && switchDisplay) || countdownSecs !== 0){
        const timer = setInterval(() => {
          (countdownSecs) === 0 ? func() : setCountdownSecs(countdownSecs - 1)
        }, 1000)
        return () => clearInterval(timer)
      }

      if(countdownSecs === 0 && display) {
        setDisplay(false)
        setCountdownMins(6)        
        setSwitchDisplay(true)
      }
      
      if(countdownSecs === 0 && countdownMins === 0 && switchDisplay)
        setSwitchDisplay(false)
      else if(countdownSecs === 0 && switchDisplay)
        setCountdownSecs(0) 
      
  }, [countdownSecs, display])

  const func = () => {
    setCountdownSecs(59)
    setCountdownMins(countdownMins - 1)
  }

  return (
     display ?
      <div className="flex items-center justify-center bg-gradient-to-r from-red-300 to-blue-400 max-w-full min-h-screen mx-auto">
        <div className="">
          <h1 className="min-w-full font-mono text-center uppercase tracking-wider text-2xl font-semibold mx-auto">Game is about to start. 
            <br />
            <p className="text-xl">
            {countdownMins < 10 ? "0" + countdownMins
            :countdownMins}:{countdownSecs < 10 ? "0" + countdownSecs
            :countdownSecs}
            </p>
            <br />
          </h1>
        </div>
      </div>
       :
       <>
       
      <div className="h-30 flex items-center justify-center bg-gradient-to-r from-red-300 to-blue-400 max-w-full container mx-auto">
        
        <div className="">
          <h1 className="min-w-full font-mono text-center uppercase tracking-wider text-2xl font-semibold mx-auto">Game has begun.
              <br />
              <p className="text-xl">
                {countdownMins < 10 ? "0" + countdownMins
                :countdownMins}:{countdownSecs < 10 ? "0" + countdownSecs
                :countdownSecs}
              </p>
              <br />
          </h1>
        </div>
      </div>
      <PlayerScoreBoard/>
      </>
  );
}

export default GameScreen;