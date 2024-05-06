import './RoomList.css'
import { useContext } from 'react'
import { RoomsContext } from '../../context/RoomsContext'
import { useSocket } from '../../hooks/useSocket'
import { useRoomClick } from '../../hooks/useRoomClick'
import { CBadge, CListGroupItem } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'

export const RoomList = ({ socket }) => {
	const { rooms } = useContext(RoomsContext)
	const { handleRoomClick } = useRoomClick({ socket })

	useSocket({ socket })

	return (
		<div className="rooms-container">
			<ul>
				{rooms.map((room) => (
					<CListGroupItem
						as={'a'}
						color={'primary'}
						key={room.id}
						className="d-flex justify-content-between align-items-center p-2 border border-dark"
						onClick={() => handleRoomClick(room)}
					>
						<div className="room-name">{room.name}</div>
						<CBadge color={'primary'} shape="rounded-pill">
							{room.users.length}
						</CBadge>
					</CListGroupItem>
				))}
			</ul>
		</div>
	)
}
