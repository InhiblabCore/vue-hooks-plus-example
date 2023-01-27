import { request } from '@/network'

export function getTodo({ id }: { id: number }) {
	return request<{
		userId: number
		id: number
		title: string
		completed: boolean
	}>(`https://jsonplaceholder.typicode.com/todos/${id}`)
}
