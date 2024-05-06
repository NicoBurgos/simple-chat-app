import pg from 'pg'
import { DB_STRING } from '../config.js'

export const pool = new pg.Pool({
	connectionString: DB_STRING,
	//ssl: true,
})

pool.connect((err, client, release) => {
	if (err) {
		return console.error('Error acquiring client', err.stack)
	} else {
		console.log('DB Connected')
	}
})

export default pool
