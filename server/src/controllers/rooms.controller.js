import { roomsService } from '../services/rooms.service.js'

const getRooms = async () => {
	try {
		return await roomsService.getRooms()
	} catch (error) {
		throw error
	}
}

const updateRoom = async (room) => {
	try {
		await roomsService.updateRoom(room)
	} catch (error) {
		throw error
	}
}

const disconnectUser = async (id) => {
	try {
		await roomsService.disconnectUser(id)
		return await roomsService.getRooms()
	} catch (error) {
		throw error
	}
}

export const roomsController = {
	getRooms,
	updateRoom,
	disconnectUser,
}
