import { useContext } from 'react'
import { useEffect } from 'react'
import { RoomsContext } from '../context/RoomsContext'

export const useSocket = ({ socket, updateMessagesList }) => {
	const { updateRooms } = useContext(RoomsContext)

	useEffect(() => {
		socket.on('get_rooms', (socketRooms) => {
			updateRooms(socketRooms)
		})
		socket.on('get_updated_rooms', (rooms) => {
			updateRooms(rooms)
		})
		socket.on('get_rooms_user_disconnected', (rooms) => {
			updateRooms(rooms)
		})

		socket.on('receive_message', (payload) => {
			updateMessagesList((list) => [...list, payload])
		})
		return () => socket.off()
	}, [socket])
}
