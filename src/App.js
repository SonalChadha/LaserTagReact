import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PlayerList from "./components/PlayerList";
import Navbar from "./components/Navbar";
import UpdateRedPlayer from "./components/UpdateRedPlayer";
import UpdateGreenPlayer from "./components/UpdateGreenPlayer";
//import GameScreen from "./components/GameScreen";
import SpashScreen from "./components/SplashScreen";

function App() {
    return(
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<SpashScreen />} />
          <Route path="/playerEntryScreen" element={<PlayerList />} />
          //<Route path="/gameScreen" element={<GameScreen />} />
          <Route path="/editRedPlayer/:id" element={<UpdateRedPlayer />} />
          <Route path="/editGreenPlayer/:id" element={<UpdateGreenPlayer />} />
        </Routes>
      </BrowserRouter>
    );
  
}

export default App;