import { roomsDB } from '../database/rooms.js'

const getRooms = async () => {
	try {
		return await roomsDB.getRooms()
	} catch (error) {
		throw error
	}
}

const updateRoom = async (room) => {
	try {
		const { id, name, users } = room
		await roomsDB.updateRoom(id, name, users)
	} catch (error) {
		throw error
	}
}

const disconnectUser = async (id) => {
	try {
		roomsDB.deleteUser(id)
	} catch (error) {
		throw error
	}
}

export const roomsService = {
	getRooms,
	updateRoom,
	disconnectUser,
}
