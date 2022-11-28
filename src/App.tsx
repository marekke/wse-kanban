import React from 'react';
import './App.css';
import AppLayout from "./layout/AppLayout";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import AppModal from "./layout/AppModal";
import {ListCreate} from "./feature/list";
import {CardCreate, CardView} from "./feature/card";

function App() {
    const location = useLocation();
    const background = location.state && location.state.background;

    return (
        <>

            <Routes location={background || location}>
                <Route path="/" element={<AppLayout/>} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            {background && (
                <Routes>
                    <Route path="/lists/create" element={<AppModal title={"Utwórz nową listę"}><ListCreate/></AppModal>}/>
                    <Route path="/lists/:listID/cards/create"
                           element={<AppModal title={"Utwórz nową listę"}><CardCreate/></AppModal>}/>
                    <Route path="/cards/:cardID" element={<AppModal title={"Utwórz nową listę"}><CardView/></AppModal>}/>
                </Routes>
            )}
        </>
    );
}

export default App;
