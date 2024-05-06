import connection from './db.js'

const deleteUser = async (userId) => {
	try {
		const query = await connection.query(
			'UPDATE rooms SET users = array_remove(users, $1)',
			[userId]
		)
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

const getRooms = async () => {
	try {
		const query = await connection.query('SELECT * FROM rooms ORDER BY id')
		return query.rows
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

const updateRoom = async (id, name, users) => {
	console.log(users)
	const query = await connection.query(
		'UPDATE rooms SET name = $2, users = $3 WHERE id = $1',
		[id, name, users]
	)
	try {
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

export const roomsDB = {
	getRooms,
	updateRoom,
	deleteUser,
}
