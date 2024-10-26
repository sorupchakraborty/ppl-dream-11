import { useState, useEffect } from 'react';
import Navbar from './components/Navbar-section';
import Banner from './components/Banner-section';
import AvailablePlayers from './components/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers-section';
import Newsletter from './components/Newsletter-section';
import Footer from './components/Footer-section';
import playerData from './player-data/players.json';
import { ToastContainer, toast } from 'react-toastify'; ``
import 'react-toastify/dist/ReactToastify.css';
import Players from './components/Players';

function App() {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(playerData);
  }, []);

  const addCoins = () => {
    setCoins(coins + 99999999999);
    toast.success("99999999999 coins added to your balance!");
  };

  const selectPlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.error("You cannot select more than 6 players!");
      return;
    }

    if (selectedPlayers.find((p) => p.playerId === player.playerId)) {
      toast.error("Player already selected!");
      return;
    }

    if (coins < player.biddingPrice) {
      toast.error("Not enough coins!");
      return;
    }

    setCoins(coins - player.biddingPrice);
    setSelectedPlayers([...selectedPlayers, player]);
    toast.success(`${player.name} added to your team!`);
  };

  const removePlayer = (playerId) => {
    const updatedPlayers = selectedPlayers.filter(
      (player) => player.playerId !== playerId
    );
    setSelectedPlayers(updatedPlayers);
    toast.success("Player removed from your team!");
  };

  return (
    <div className="App">
      <Navbar coins={coins} />
      <Banner addCoins={addCoins} />
      <div className="main-section">
        <Players players={players} selectPlayer={selectPlayer} selectedPlayers={selectedPlayers}
          removePlayer={removePlayer} />
      </div>
      <Newsletter />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
