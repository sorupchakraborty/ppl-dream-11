import AvailablePlayers from './AvailablePlayers'
import SelectedPlayers from './SelectedPlayers'
import { useState } from 'react';


const Players = ({ players, selectPlayer, selectedPlayers, removePlayer }) => {
    console.log()
    const [isAvailablePlayer, setIsAvailablePlayer] = useState(true);
    return (
        <div className=' container mx-auto'>
            <div className='flex flex-col md:flex-row justify-between gap-4 items-center my-4'>
                <h2 className='text-2xl font-bold'>{isAvailablePlayer ? "Available Players" : "Selected Players"}</h2>

                <div className='my-4 text-center'>
                    <button className={`border px-2 py-1 md:px-4 md:py-2 rounded-lg  ${isAvailablePlayer ? "bg-[#E7FE29]" : "bg-gray-300"}`} onClick={() => setIsAvailablePlayer(true)}>Available Players</button>
                    <button className={`border px-2 py-1 md:px-4 md:py-2 rounded-lg  ${!isAvailablePlayer ? "bg-[#E7FE29]" : "bg-gray-300"}`} onClick={() => setIsAvailablePlayer(false)}>Selected Players({selectedPlayers.length})</button>
                </div>
            </div>

            {
                isAvailablePlayer ? <AvailablePlayers players={players} selectPlayer={selectPlayer} /> : <SelectedPlayers selectedPlayers={selectedPlayers} removePlayer={removePlayer} />
            }

        </div>


    )
}

export default Players