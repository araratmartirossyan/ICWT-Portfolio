/* eslint-disable */
import axios from 'axios'

const API = 'https://icwt-back.herokuapp.com'
const apiPrefix = 'api/v1'

const clientApi = async (method, url, params) => {
  try {
    const { data = {} } = await axios[method](`${API}/${apiPrefix}/${url}`, { ...params })
    return data
  } catch (err) {
    throw err
  }
}

export {
  clientApi
}
