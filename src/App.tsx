import React from 'react';
import './styles/index.scss';
import {Route, Routes} from "react-router";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import FavoriteCats from "./pages/FavoriteCats";
import CatsList from "./pages/CatsList";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path='/' element={<CatsList/>}/>
                <Route path={'favorite-cats'} element={<FavoriteCats/>}/>
                <Route path={'/*'} element={<NotFound/>}/>
            </Route>
        </Routes>
    );
}

export default App;
