import React from 'react';

const SelectedPlayers = ({ selectedPlayers, removePlayer,setIsAvailablePlayer }) => {
  return (
    <div className="py-8 bg-gray-100">
      <h2 className="text-center text-2xl font-bold mb-6">Selected Players ({selectedPlayers.length}/6)</h2>
      <div className="space-y-4 px-8">
        {selectedPlayers.map((player) => (
          <div key={player.playerId} className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center">
            <img src={player.imageURL} alt={player.name} className="h-16 w-16 object-cover rounded-full" />
            <div>
              <h3 className="text-lg font-bold">{player.name}</h3>
              <p className="text-sm text-gray-700">Role: {player.role}</p>
              <p className="text-sm text-gray-700">Price: {player.biddingPrice}</p>
            </div>
            <button
              onClick={() => removePlayer(player.playerId)}
              className="border px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white">Remove
            </button>
          </div>
        ))}
      </div>
      <button className={`border px-2 py-1 md:px-4 md:py-2 rounded-lg hover:bg-[#E7FE29] text-gray-600  my-8 mx-8 `} onClick={() => setIsAvailablePlayer(true)}>Add player</button>
    </div >

  );
};

export default SelectedPlayers;
