import './UserInput.css'
import { useContext } from 'react'
import { UsernameContext } from '../../context/UsernameContext'

export const UserInput = () => {
	const { username, handleChangeUsername } = useContext(UsernameContext)
	return (
		<div className="user-container">
			<input
				type="text"
				name="user-input"
				id="user-input"
				placeholder="Enter your username..."
				value={username}
				onChange={(e) => handleChangeUsername(e)}
			/>
		</div>
	)
}
