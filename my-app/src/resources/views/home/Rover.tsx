/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-mixed-operators */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, memo, useEffect, useState } from "react";
import Card from "../../components/card/card";
import { CustomCardContainer } from "./styles";
import { Props } from "./type";
import { useNavigate } from 'react-router-dom';

const callData = async () => {
    const token = localStorage.getItem('token')
    await fetch('http://localhost:8000/NasaApi/sync-api', {
        'method': 'GET',
        'headers': { 'Content-Type': 'application/json', 'authorization': `Bearer ${ JSON.parse(token!)}` },
    });
    const response = await fetch('http://localhost:8000/NasaApi/all-rovers', {
        'method': 'GET',
        'headers': { 'Content-Type': 'application/json', 'authorization': `Bearer ${ JSON.parse(token!)}` },
    });
    const data = await response.json();
    return data;
}

const Rover: FC<Props> = ({ children }) => {
    const [response, setResponse] = useState<
        {
            map(arg0: (element: any) => JSX.Element): unknown;
            id: number,
            photo_id: number,
            camera_id: number,
            camera_name: string,
            img_url: string,
            createdAt: string,
            updateAt: string
        }>()
    useEffect(() => {
        callData().then((item) => {
            item && setResponse(item);
        });
    }, []);
    return (
        <CustomCardContainer>
            <>
                {response && response.map((element) => {
                    return (
                        <Card
                            id={element.id}
                            photo_id={element.photo_id}
                            camera_id={element.camera_id}
                            camera_name={element.camera_name}
                            img_url={element.img_url}
                            key={element.id}
                            variant='normal'
                        />
                    )
                })
                }
            </>
        </CustomCardContainer>
    )
}

export default memo(Rover);