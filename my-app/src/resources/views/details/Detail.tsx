import React, { FC, memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/card/card";
// import Button from "../../components/Button/Button";
// import Card from "../../components/card/card";
// import { CustomCardContainer } from "./styles";
import { Props } from "./type";


const callData = async (param?: string) => {
    const response = await fetch(`http://localhost:8000/NasaApi/rover/${param}`);
    const data = await response.json();
    return data;
}


const Detail: FC<Props> = ({ children }) => {
    const params = useParams();
    const [response, setResponse] = useState<
        {
            id?: number,
            photo_id?: number,
            camera_id?: number,
            camera_name?: string,
            img_url?: string,
            createdAt?: string,
            updateAt?: string
        }>()
    useEffect(() => {
        callData(params.roverId).then((item) => {
            item && setResponse(item);
        });
    }, [params.roverId])
    return (
        <>
            <Card
                id={response?.id}
                photo_id={response?.photo_id}
                camera_id={response?.camera_id}
                camera_name={response?.camera_name}
                img_url={response?.img_url}
                key={response?.id}
            />
        </>
    )
}

export default memo(Detail);