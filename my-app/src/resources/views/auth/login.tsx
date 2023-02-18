import { Field, Formik } from "formik";
import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Container, Form, Input, InputContainer, Label } from './styles';
import { validationForm, initialValues } from './constants';


const Login: FC = () => {
    // const navigator = useNavigate();
    const handleSubmit = (values:any) => {
        console.log(values)
        // navigator('/login');
    }
    return (
        <Container>
            <Formik
                validationSchema={validationForm}
                onSubmit={handleSubmit}
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
                                <Label>PASSWORD:</Label>
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