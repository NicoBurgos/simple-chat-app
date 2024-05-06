import { useState } from 'react'
import { RoomViewContext } from './RoomViewContext'

export const RoomViewProvider = ({ children }) => {
	const [roomView, setRoomView] = useState(false)

	const updateRoomView = (newValue) => {
		setRoomView(newValue)
	}
	return (
		<RoomViewContext.Provider value={{ roomView, updateRoomView }}>
			{children}
		</RoomViewContext.Provider>
	)
}
