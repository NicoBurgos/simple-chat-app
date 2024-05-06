import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server as socketServer } from 'socket.io'
import { FRONTEND } from './config.js'
import { roomsController } from './controllers/rooms.controller.js'

const app = express()
app.use(cors())

const server = createServer(app)
const io = new socketServer(server, {
	cors: {
		origin: FRONTEND,
		methods: ['GET', 'POST'],
	},
})

//Refactorizar codigo para tener las rooms en el servidor y solicitarlos en el cliente

//Sockets
io.on('connection', (socket) => {
	console.log(`User ${socket.id} connected`)
	const getRooms = async () => {
		socket.emit('get_rooms', await roomsController.getRooms())
	}

	getRooms()

	socket.on('update_room', (room) => {
		console.log('updating')
		const update = async () => {
			await roomsController.updateRoom(room)
			const upd_rooms = await roomsController.getRooms()
			socket.broadcast.emit('get_updated_rooms', upd_rooms)
		}
		update()
	})

	socket.on('join_room', (room) => {
		socket.join(room.name)
		console.log(`User ${socket.id} joining room ${room.name}`)
	})

	socket.on('leave_room', (room) => {
		socket.leave(room.name)
		console.log(`User ${socket.id} leaving room ${room.name}`)
	})

	socket.on('send_message', (payload) => {
		console.log(payload)
		socket.to(payload.room).emit('receive_message', payload)
	})

	socket.on('disconnect', () => {
		console.log(`User ${socket.id} disconnected`)
		const update = async () => {
			const rooms = await roomsController.disconnectUser(socket.id)
			socket.broadcast.emit('get_rooms_user_disconnected', rooms)
			console.log(rooms)
		}
		update()
	})
})

export default server
