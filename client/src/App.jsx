import './App.css'
import io from 'socket.io-client'
import { SERVER } from './config.js'
import { useContext } from 'react'
import { ChatRoom } from './components/ChatRoom/ChatRoom.jsx'
import { RoomList } from './components/RoomList/RoomList.jsx'
import { UserInput } from './components/UserInput/UserInput.jsx'
import { RoomViewContext } from './context/RoomViewContext.jsx'
import { useSocket } from './hooks/useSocket.js'

const socket = io.connect(SERVER)

function App() {
	const { roomView } = useContext(RoomViewContext)

	useSocket({ socket })

	return (
		<main className="container">
			{roomView ? (
				<ChatRoom socket={socket}></ChatRoom>
			) : (
				<>
					<div className="title-container">
						<h1>Chat Room</h1>
					</div>
					<UserInput></UserInput>
					<RoomList socket={socket}></RoomList>
				</>
			)}
		</main>
	)
}

export default App
