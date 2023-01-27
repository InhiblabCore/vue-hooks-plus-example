import axios from 'axios'
import codeMessage from './codeMessage'

const CancelToken = axios.CancelToken
const cancel = {}

axios.defaults.headers.post['Content-Type'] =
	'application/x-www-form-urlencoded;charset=UTF-8'

const axiosInstance = axios.create({
	baseURL: '',
	timeout: 1_000 * 20,
})

axiosInstance.interceptors.request.use(
	(value) => {
		const accessToken = sessionStorage.getItem('access_token')
		if (accessToken) {
			return {
				...value,
			}
		}
		return value
	},
	(error) => {
		return Promise.reject(error)
	}
)

axiosInstance.interceptors.response.use(
	(response) => {
		if (response?.status === 200) {
			return Promise.resolve(response)
		} else {
			return Promise.reject(response)
		}
	},
	(error) => {
		if (error?.message?.includes?.('timeout')) {
			alert('请求超时')
		} else {
			alert(codeMessage?.[error?.response?.status] ?? '请求错误')
			if (error?.response?.status === 403) alert('403')
		}
		Promise.reject(error)
	}
)

const request = (url, options) => {
	return new Promise((resolve, reject) => {
		axiosInstance({
			url,
			cancelToken: new CancelToken(function executor(c) {
				cancel.value = c
			}),
			...options,
		})
			.then((res) => {
				resolve(res?.data)
			})
			.catch((err) => {
				reject(err)
			})
	})
}

const cancelAxios = () => {
	cancel?.value?.()
}

export { axiosInstance, request, cancelAxios }
