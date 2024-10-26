import React from 'react';

const PlayerCard = ({ player, selectPlayer }) => {
    return (
        <div className="bg-white border p-4 rounded-xl overflow-hidden">
            <div><img src={player.imageURL} alt={player.name} className="w-full h-[80%] md:h-80 " /></div>
            <div className="p-4">
                <h3 className="text-lg font-bold">{player.name}</h3>
                <p className="text-sm text-gray-700">Country: {player.country}</p>
                <p className="text-sm text-gray-700">Role: {player.role}</p>
                <p className="text-sm text-gray-700">Batting Style: {player.battingStyle}</p>
                <p className="text-sm text-gray-700 font-semibold">Bidding Price: {player.biddingPrice}</p>
                <button
                    onClick={() => selectPlayer(player)}
                    className="mt-4 border text-gray-600 px-4 py-2 rounded-lg hover:bg-[#E7FE29]">Choose Player
                </button>
            </div>
        </div>
    );
};

export default PlayerCard;
