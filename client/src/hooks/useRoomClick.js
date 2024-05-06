import { useContext } from 'react'
import { UsernameContext } from '../context/UsernameContext'
import { CurrentRoomContext } from '../context/CurrentRoomContext'
import { RoomViewContext } from '../context/RoomViewContext'
import { RoomsContext } from '../context/RoomsContext'

export const useRoomClick = ({ socket }) => {
	const { username } = useContext(UsernameContext)
	const { updateCurrentRoom } = useContext(CurrentRoomContext)
	const { updateRoomView } = useContext(RoomViewContext)
	const { rooms, updateRooms } = useContext(RoomsContext)

	const handleRoomClick = (room) => {
		if (username == '') return
		const { name, users, id } = room
		const newCurrentRoom = { id, name, users: [...users, socket.id] }
		socket.emit('join_room', newCurrentRoom)
		socket.emit('update_room', newCurrentRoom)
		updateCurrentRoom(newCurrentRoom)
		updateRoomView(true)
	}

	const handleReturnButton = (room) => {
		const { name, users, id } = room
		const newUsers = users.filter((e) => e != socket.id)
		const updatedRoom = { id, name, users: newUsers }
		const updatedRooms = [...rooms]
		const newRooms = updatedRooms.map((el) =>
			el.id === updatedRoom.id ? updatedRoom : el
		)
		socket.emit('leave_room', updatedRoom)
		socket.emit('update_room', updatedRoom)
		//reset current room
		updateCurrentRoom({})
		//update the users in the room
		updateRooms(newRooms)
		updateRoomView(false)
	}

	return {
		handleRoomClick,
		handleReturnButton,
	}
}
