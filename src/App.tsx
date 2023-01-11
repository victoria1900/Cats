import React, {FC} from 'react';
import './styles/index.scss';
import {Route, Routes} from "react-router";
import Layout from "./pages/layout/layout";
import NotFound from "./pages/not-found/not-found";
import FavoriteCats from "./pages/favorite-cats/favorite-cats";
import CatList from "./pages/cat-list/cat-list";

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path='/' element={<CatList/>}/>
                <Route path={'favorite-cats'} element={<FavoriteCats/>}/>
                <Route path={'/*'} element={<NotFound/>}/>
            </Route>
        </Routes>
    );
}

export default App;
