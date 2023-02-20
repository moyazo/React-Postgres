import React, { FC, memo } from 'react';
import Button from '../Button/Button';
import { CustomCard } from './styles';
import { Props } from './type';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';


const Card: FC<Props> = ({ id, photo_id, camera_id, camera_name, img_url, variant }) => {
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        navigate(`/detail/${id}`);
    }, [id, navigate])
    const deleteRover = async () => {
        await fetch(`http://localhost:8000/NasaApi/remove/${id}`, {
            'method': `DELETE`
        })
        navigate('/');
    }
    const updateRover = async () => {
        navigate(`/update/${id}`);
    }
    const createRover = async () => {
        navigate('/create');
    }

    return (
        <CustomCard className='roverCard'>
            <img src={img_url} alt='...'></img>
            <div>
                <p>{id}</p>
                <p>{photo_id}</p>
                <p>{camera_id}</p>
                <p>{camera_name}</p>
            </div>
            {variant && <Button variant='normal' onClick={handleClick} />}
            {
                !variant &&
                <>
                    <Button variant='delete' onClick={deleteRover} />
                    <Button variant='create' onClick={createRover} />
                    <Button variant='update' onClick={updateRover} />
                </>
            }
        </CustomCard>
    )
}

export default memo(Card);