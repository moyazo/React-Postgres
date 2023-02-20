/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-mixed-operators */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, memo, useEffect, useState } from "react";
import Card from "../../components/card/card";
import { CustomCardContainer } from "./styles";
import { Props } from "./type";
import { Link, useNavigate } from 'react-router-dom';

const callData = async () => {

    const response = await fetch('http://localhost:8000/NasaApi/all-rovers', {
        'method': 'GET',
        'headers': { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    return data;
}

const Welcome: FC<Props> = ({ children }) => {

    return (
        <CustomCardContainer>
            <h1><Link to='/signUp'>WELCOME</Link></h1>
        </CustomCardContainer>
    )
}

export default memo(Welcome);