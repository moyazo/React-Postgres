import { Field, Formik } from "formik";
import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Container, Form, Input, InputContainer, Label } from './styles';
import { validationForm, initialValues } from './constants';
// import { FormikValues } from 'formik/dist/types';

const Login: FC = () => {
    const navigator = useNavigate();
    // const handleSubmit = (values: FormikValues) => {
    //     console.log('hola')
    //     navigator('/login');
    // }
    return (
        <Container>
            <Formik
                validationSchema={validationForm}
                onSubmit={(values) => {
                    console.log('hola')
                }}
                initialValues={initialValues}
            >
                <Form>
                    <Field name='email' >
                        {({ field, meta }: {field:any,meta:any}) => (
                            <InputContainer>
                                <Label>EMAIL:</Label>
                                <Input type='text' {...field} />
                                {meta.error && <p>{meta.error}</p>}
                            </InputContainer>
                        )}
                    </Field>
                    <Field name='password' >
                        {({ field, meta }: {field:any,meta:any}) => (
                            <InputContainer>
                                <Label>EMAIL:</Label>
                                <Input type='password' {...field} />
                                {meta.error && <p>{meta.error}</p>}
                            </InputContainer>
                        )}
                    </Field>
                    <Button type='submit'>SIGN UP</Button>
                </Form>
            </Formik>
        </Container>
    )
}


export default memo(Login);