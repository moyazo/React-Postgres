import { FC } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "../views/auth/login";
import Detail from "../views/details/Detail";
import Controller from "../views/details/roverController/controller";
import Rover from "../views/home/Rover";
import Welcome from "../views/welcome";



const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/logIn" element={<Login />} />
                <Route path="/signUp" key='signup' element={<Login />} />
                <Route path="/home" key={'appHome'} element={<Rover />} />
                <Route path="/" element={<Welcome />} />
                <Route path="/detail/:roverId" element={<Detail />} />
                <Route path="/update/:roverId" element={<Controller />}/>
                <Route path="/create" element={<Controller />}/>
                <Route path="/403" />
                <Route path="/404" />
                <Route path="/500" />
                <Route path="/502" />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;