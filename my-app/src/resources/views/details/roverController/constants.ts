import * as Yup from 'yup';



export const validationRover = Yup.object().shape({
    photo_id: Yup.number(),
    camera_id: Yup.number(),
    camera_name: Yup.string(),
})


export const initialValues = {
    photo_id: 0,
    camera_id: 0,
    camera_name: ''
}