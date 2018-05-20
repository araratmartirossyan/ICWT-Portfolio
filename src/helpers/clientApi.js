/* eslint-disable */
import axios from 'axios'

const API = 'http://atleasrx.beget.tech/api/v1/posts'

const returnUrl = url => url ? `${API}/${url}` : API

const clientApi = (method, url, params) =>
	new Promise((resolve, reject) =>
		axios[method](returnUrl(url), { ...params })
			.then(({ data }) => resolve(data))
	)

export {
  clientApi,
  clientApiPush,
  clientApiPut,
  clientApiDelete
}
