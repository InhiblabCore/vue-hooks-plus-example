import { request } from './network/index.js'

export function getTodo({ id }) {
	return request(`https://jsonplaceholder.typicode.com/todos/${id}`)
}
