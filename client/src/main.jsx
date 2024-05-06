import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CurrentRoomProvider } from './context/CurrentRoomProvider.jsx'
import { UsernameProvider } from './context/UsernameProvider.jsx'
import { RoomViewProvider } from './context/RoomViewProvider.jsx'
import { RoomsProvider } from './context/RoomsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RoomsProvider>
			<UsernameProvider>
				<CurrentRoomProvider>
					<RoomViewProvider>
						<App />
					</RoomViewProvider>
				</CurrentRoomProvider>
			</UsernameProvider>
		</RoomsProvider>
	</React.StrictMode>
)
