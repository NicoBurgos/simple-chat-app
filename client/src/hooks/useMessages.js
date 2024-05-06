import { useContext } from 'react'
import { useState } from 'react'
import { CurrentRoomContext } from '../context/CurrentRoomContext'
import { UsernameContext } from '../context/UsernameContext'
import { scrollDown } from '../helpers/scroll'

export const useMessages = ({ socket }) => {
	const [message, setMessage] = useState('')
	const [messagesList, setMessagesList] = useState([])

	const { currentRoom } = useContext(CurrentRoomContext)
	const { username } = useContext(UsernameContext)

	const updateMessagesList = (newValue) => {
		setMessagesList(newValue)
		scrollDown()
	}
	const updateMessage = (newValue) => {
		setMessage(newValue)
	}
	const handleChangeMessage = (e) => {
		updateMessage(e.target.value)
	}
	const handleSendMessage = async () => {
		if (username === '' || message === '') return
		const payload = {
			message,
			room: currentRoom.name,
			author: username,
			time:
				new Date().getHours().toString().padStart(2, '0') +
				':' +
				new Date().getMinutes().toString().padStart(2, '0'),
		}
		await socket.emit('send_message', payload)

		updateMessagesList((list) => [...list, payload])
		updateMessage('')
	}
	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			handleSendMessage()
		}
	}

	return {
		message,
		messagesList,
		updateMessagesList,
		handleChangeMessage,
		handleSendMessage,
		handleKeyPress,
	}
}
