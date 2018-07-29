import { SubmissionError } from 'redux-form'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
//const userNameAPI = (ms: number) => new Promise(resolve => setTimeout(resolve(['john', 'paul', 'george', 'ringo']), ms))

export function signInValidate(values: any) {
	return sleep(Math.random() * 1000) // simulate server latency
		.then(() => {
			if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
				throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' })
			} else if (values.password !== 'redux-form') {
				throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' })
			} else {
				window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
			}
		})
}

export function signUpValidateAync(values: any) {
	return sleep(Math.random() * 1000) // simulate server latency
		.then(() => {

			if (!values.firstName) {
				throw new SubmissionError({ firstName: 'Required', _error: 'Login failed!' })
			}
			if (!values.lastName) {
				throw new SubmissionError({ lastName: 'Required', _error: 'Login failed!' })
			}
			if (!values.username) {
				throw new SubmissionError({ username: 'Required', _error: 'Login failed!' })
			}
			if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
				throw new SubmissionError({ username: 'Username is taken', _error: 'Login failed!' })
			} else if (values.username.length > 15) {
				throw new SubmissionError({ username: 'Must be 15 characters or less', _error: 'Login failed!' })
			}
			if (!values.email) {
				throw new SubmissionError({ email: 'Required', _error: 'Login failed!' })
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				throw new SubmissionError({ email: 'Invalid email address', _error: 'Login failed!' })
			}
		})
}

export function sigunUpValidate(values: any) {
	const errors = {} as any;
	if (!values.firstName) {
		errors.firstName = "Required"
	}
	if (!values.lastName) {
		errors.lastName = "Required"
	}
	if (!values.username) {
		errors.username = 'Required'
	} else if (values.username.length > 15) {
		errors.username = 'Must be 15 characters or less'
	}
	if (!values.email) {
		errors.email = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
	}
	return errors
}
