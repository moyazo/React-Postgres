import * as Yup from 'yup';



export const validationForm = Yup.object().shape({
    email: Yup.string().email('WRONG FORMAT...').required('EMAIL REQUIRED'),
    password: Yup.string().min(4,'MIN 4 CHARACTERS').max(10,'MAX 10 CHARACTERS')
})


export const initialValues = {
    email: '',
    password: ''
}