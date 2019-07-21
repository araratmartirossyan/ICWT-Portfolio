/* eslint-disable */
import axios from 'axios'

const API = 'https://icwt-back.herokuapp.com'
const apiPrefix = 'api/v1'

const clientApi = async (method, url, params) => {
  const responseUrl = `${API}/${apiPrefix}/${url}`
  const { lang = 'en' } = localStorage.getItem('lang')
  try {
    const { data = {} } = await axios({
      url: responseUrl,
      headers: {
        ContentL: lang
      },
      params
    })
    return data
  } catch (err) {
    throw err
  }
}

export {
  clientApi
}
