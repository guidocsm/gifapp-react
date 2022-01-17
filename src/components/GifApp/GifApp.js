import { useState } from 'react';
import AddCategory from '../AddCategory/AddCategory';
import { GifGrid } from "../GifGrid/GifGrid";

import './GifApp.css'

const GifApp = () => {

    const [categories, setCategories] = useState(['Panda']);

    return (
        <>
            <h1 className="gifApp-title">Gif App</h1>

            <AddCategory category={setCategories}/>

            <ol>
               {categories.map(category => {
                   return <GifGrid key={category} category={category} categories={categories} setCategories={setCategories} />
               })}
            </ol>
        </>
    )
};

export default GifApp;