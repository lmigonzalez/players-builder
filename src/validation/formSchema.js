import * as yup from 'yup';

const formSchema = yup.object().shape({
	name: yup
	.string()
	.trim()
	.required('You need to enter you name')
	.min(3, 'Your name should be at least 3 characters long!'),
	email: yup
	.string()
	.email('Must enter a valid email')
	.required('email is required'),
	password: yup
	.string()
	.required('You need to enter a password')
	.min(6, 'Enter a strong password, 6 characters min'),
	tos: yup.boolean()


	
})


export default formSchema;