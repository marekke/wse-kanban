import React from 'react';
import './App.css';
import AppLayout from "./layout/AppLayout";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import AppModal from "./layout/AppModal";
import {ListCreate, ListUpdate} from "./feature/list";
import {CardCreate, CardView} from "./feature/card";
import CardUpdate from "./feature/card/components/CardUpdate";
import AppLogin from "./layout/AppLogin";
import {useSelector} from "react-redux";
import {userSelectors} from "./feature/user";

function App() {
    const location = useLocation();
    const background = location.state && location.state.background;
    const isLoggedUser = useSelector(userSelectors.getLoggedUser);

    if (isLoggedUser === null && location.pathname !== "/login") {
        return <Navigate to={"/login"} />
    }

    return (
        <>
            <Routes location={background || location}>
                <Route path="/" element={<AppLayout/>} />
                <Route path="/login" element={<AppLogin/>} />
                <Route path="*" element={<AppLayout/>} />
            </Routes>
            {background && (
                <Routes>
                    <Route path="/lists/create" element={<AppModal title={"Utwórz nową listę"}><ListCreate/></AppModal>}/>
                    <Route path="/lists/:listID/update" element={<AppModal title={"Edytuj listę"}><ListUpdate/></AppModal>}/>
                    <Route path="/lists/:listID/cards/create"
                           element={<AppModal title={"Utwórz nową listę"}><CardCreate/></AppModal>}/>
                    <Route path="/cards/:cardID" element={<AppModal title={"Szczegóły karty"}><CardView/></AppModal>}/>
                    <Route path="/cards/:cardID/update" element={<AppModal title={"Szczegóły karty"}><CardUpdate/></AppModal>}/>
                </Routes>
            )}
        </>
    );
}

export default App;
