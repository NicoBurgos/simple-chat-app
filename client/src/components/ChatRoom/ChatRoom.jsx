import './ChatRoom.css'
import { useContext } from 'react'
import { CurrentRoomContext } from '../../context/CurrentRoomContext'
import { UsernameContext } from '../../context/UsernameContext'
import { useSocket } from '../../hooks/useSocket'
import { useMessages } from '../../hooks/useMessages'
import { useRoomClick } from '../../hooks/useRoomClick'
import {
	CCard,
	CCardBody,
	CCardHeader,
	CCardText,
	CCardTitle,
} from '@coreui/react'

export const ChatRoom = ({ socket }) => {
	const { username } = useContext(UsernameContext)
	const { currentRoom } = useContext(CurrentRoomContext)
	const { handleReturnButton } = useRoomClick({ socket })

	const {
		message,
		messagesList,
		updateMessagesList,
		handleChangeMessage,
		handleSendMessage,
		handleKeyPress,
	} = useMessages({ socket })

	useSocket({ socket, updateMessagesList })

	return (
		<section className="chat-container border border-dark">
			<div className="title-container">
				<h1>Chat Room {currentRoom.name}</h1>
				<h3>User: {username}</h3>
			</div>
			<button
				className="return-btn"
				onClick={() => handleReturnButton(currentRoom)}
			>
				Go back
			</button>
			<div className="chat-messages" id="chat-messages">
				{messagesList.map((m, i) => (
					<div
						key={i}
						className="message-box"
						style={{ textAlign: username === m.author ? 'right' : 'left' }}
					>
						<CCard
							className="chat-card"
							color={username !== m.author ? 'success' : 'secondary'}
						>
							<CCardHeader>
								<strong>{m.author}</strong>
							</CCardHeader>
							<CCardBody>
								<CCardTitle>{m.message}</CCardTitle>
								<CCardText>{m.time}</CCardText>
							</CCardBody>
						</CCard>
					</div>
				))}
			</div>
			<div className="chat-input-container">
				<input
					type="text"
					className="chat-input"
					name="chat-input"
					id="chat-input"
					placeholder="Send a message..."
					onChange={(e) => handleChangeMessage(e)}
					onKeyDown={handleKeyPress}
					value={message}
				/>
				<button className="chat-btn" onClick={() => handleSendMessage()}>
					Send
				</button>
			</div>
		</section>
	)
}
