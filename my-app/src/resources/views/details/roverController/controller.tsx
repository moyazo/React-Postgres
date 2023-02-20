import { Field, Formik } from "formik";
import { FC, memo, useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Button from "../../../components/Button/Button";
import { Container, Form, Input, InputContainer, Label } from './styles';
import { validationRover, initialValues } from './constants';
const token = localStorage.getItem('token');
const Controller: FC = () => {
    const navigator = useNavigate();
    const params = useParams();
    // eslint-disable-next-line no-restricted-globals
    const [path, setPath] = useState(true);

    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        !location.pathname.includes('/update') ? setPath(false) : setPath(true);
    }, [path])
    const changeRover = async (values: any) => {
        console.log(values);
        await fetch(`http://localhost:8000/NasaApi/changeRover/${params.roverId}`, {
            'method': `PUT`,
            'headers': { 'Content-Type': 'application/json','authorization': `Bearer ${JSON.parse(token!)}` },
            'body': JSON.stringify(
                {
                    "photo_id": values.photo_id,
                    "camera_id": values.camera_id,
                    "camera_name": values.camera_name,
                }),
        })
        navigator('/home');
    }
    const createRover = async (values: any) => {
        // console.log(values);
        await fetch(`http://localhost:8000/NasaApi/createRover`, {
            'method': `POST`,
            'headers': { 'Content-Type': 'application/json','authorization': `Bearer ${JSON.parse(token!)}` },
            'body': JSON.stringify(
                {
                    "photo_id": values.photo_id,
                    "camera_id": values.camera_id,
                    "camera_name": values.camera_name,
                }),
        })
        navigator('/home');
    }
    return (
        <Container>
            <Formik
                validationSchema={validationRover}
                onSubmit={path ? changeRover : createRover}
                initialValues={initialValues}
            >
                <Form>
                    <Field name='photo_id' >
                        {({ field, meta }: { field: any, meta: any }) => (
                            <InputContainer>
                                <Label>PHOTO ID:</Label>
                                <Input type='text' {...field} />
                                {meta.error && <p>{meta.error}</p>}
                            </InputContainer>
                        )}
                    </Field>
                    <Field name='camera_id' >
                        {({ field, meta }: { field: any, meta: any }) => (
                            <InputContainer>
                                <Label>CAMERA ID:</Label>
                                <Input type='text' {...field} />
                                {meta.error && <p>{meta.error}</p>}
                            </InputContainer>
                        )}
                    </Field>
                    <Field name='camera_name' >
                        {({ field, meta }: { field: any, meta: any }) => (
                            <InputContainer>
                                <Label>CAMERA NAME:</Label>
                                <Input type='text' {...field} />
                                {meta.error && <p>{meta.error}</p>}
                            </InputContainer>
                        )}
                    </Field>
                    <Button type='submit'>{'HOLA'}</Button>
                </Form>
            </Formik>
        </Container>
    )
}


export default memo(Controller);