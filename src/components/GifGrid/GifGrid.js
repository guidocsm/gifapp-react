import React, { useEffect, useState } from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import { GifGridItem } from '../GifGridItem/GifGridItem';
import './GifGrid.css'

export const GifGrid = ({category, categories, setCategories}) => {

    const {data: images, loading} = useFetchGifs(category);

    const removeGif = () => {
        const filterGif = categories.filter(elm => elm !== category);
        setCategories(filterGif)
    }

    return (
        <>
        {loading ? <p className='animate__animated animate__flash' >Loading...</p> : null}

        <div className="grid-box">
            <h2 className="grid-title animate__animated animate__fadeIn">{category}</h2>
            <button className="grid-button" onClick={removeGif}>Delete</button>
        </div>

        <div className="card-grid">
            {images.map(image => (
                <GifGridItem key={image.id} {...image} />
            ))}
        </div>
        </>
    );
};