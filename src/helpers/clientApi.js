/* eslint-disable */
import firebase from 'firebase'

const clientApi = url => {
	const ref = firebase.database()
	return ref.ref(url).once('value')
}

const clientApiPush = (url, data) => {
	const ref = firebase.database()
	return ref.ref(url).push(data)
}

const clientApiPut = (url, data) => {
	const ref = firebase.database()
	return ref.ref(url).update(data)
}

const clientApiDelete = url => {
	const ref = firebase.database()
	return ref.ref(url).remove()
}

export {
  clientApi,
  clientApiPush,
  clientApiPut,
  clientApiDelete
}
