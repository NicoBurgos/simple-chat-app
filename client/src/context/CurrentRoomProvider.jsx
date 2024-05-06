import { useState } from 'react'
import { CurrentRoomContext } from './CurrentRoomContext'

export const CurrentRoomProvider = ({ children }) => {
	const [currentRoom, setCurrentRoom] = useState()

	const updateCurrentRoom = (newValue) => {
		setCurrentRoom(newValue)
	}
	return (
		<CurrentRoomContext.Provider value={{ currentRoom, updateCurrentRoom }}>
			{children}
		</CurrentRoomContext.Provider>
	)
}
