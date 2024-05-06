import { useState } from 'react'
import { UsernameContext } from './UsernameContext'

export const UsernameProvider = ({ children }) => {
	const [username, setUsername] = useState('')

	const handleChangeUsername = (e) => {
		setUsername(e.target.value)
	}

	return (
		<UsernameContext.Provider value={{ username, handleChangeUsername }}>
			{children}
		</UsernameContext.Provider>
	)
}
