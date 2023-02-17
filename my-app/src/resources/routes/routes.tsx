import { FC } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";



const Router: FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" key={'appHome'}/>
                <Route path="/" key={'apiSync'}/>
                <Route path="/admin"/>
                <Route path="/login"/>
                <Route path="/detail"/>
                <Route path="/403"/>
                <Route path="/404"/>
                <Route path="/500"/>
                <Route path="/502"/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;