import { useState } from 'react'
import { RoomsContext } from './RoomsContext'

export const RoomsProvider = ({ children }) => {
	const [rooms, setRooms] = useState([])

	const updateRooms = (newValue) => {
		setRooms(newValue)
	}
	return (
		<RoomsContext.Provider value={{ rooms, updateRooms }}>
			{children}
		</RoomsContext.Provider>
	)
}
