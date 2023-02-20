/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import { Field, Formik } from "formik";
import { FC, memo, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from "../../components/Button/Button";
import { Container, Form, Input, InputContainer, Label } from './styles';
import { validationForm, initialValues } from './constants';


const Login: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const login = useCallback(async ({email,password}: any)=>{
        const token = await fetch(`http://localhost:8000/auth${location.pathname}`, {
            'method': `POST`,
            'headers': { 'Content-Type': 'application/json' },
            'body': JSON.stringify(
                {
                    'email':email,
                    'password': password
                }),
        })
        localStorage.setItem('token',JSON.stringify(await token.json()));
        navigate('/home');
    },[location])
    return (
        <Container>
            <Formik
                validationSchema={validationForm}
                onSubmit={login}
                initialValues={initialValues}
            >
                <Form>
                    <Field name='email' >
                        {({ field, meta }: { field: any, meta: any }) => (
                            <InputContainer>
                                <Label>EMAIL:</Label>
                                <Input type='text' {...field} />
                                {meta.error && <p>{meta.error}</p>}
                            </InputContainer>
                        )}
                    </Field>
                    <Field name='password' >
                        {({ field, meta }: { field: any, meta: any }) => (
                            <InputContainer>
                                <Label>PASSWORD:</Label>
                                <Input type='password' {...field} />
                                {meta.error && <p>{meta.error}</p>}
                            </InputContainer>
                        )}
                    </Field>
                    <Button type='submit' variant={ location.pathname === '/signUp' ? 'up' : 'in'}/>
                    <Link to={location.pathname === '/signUp'? '/logIn' : '/signUp'}>{ location.pathname === '/signUp' ? 'ALREADY HAVE AN ACCOUNT' : 'NOT HAVE AN ACCOUNT'}</Link>
                </Form>
            </Formik>
        </Container>
    )
}


export default memo(Login);