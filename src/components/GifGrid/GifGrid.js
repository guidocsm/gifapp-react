import React, { useEffect, useState } from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import { GifGridItem } from '../GifGridItem/GifGridItem';
import './GifGrid.css'

export const GifGrid = ({category, categories, setCategories}) => {

    const {data: images, loading} = useFetchGifs(category);

    // useEffect((category) => {
    //     setCategories('Gato')
    // }, [category])

    // const removeGif = () => {
    //     console.log(setCategories)
    // };
    // removeGif()

    return (
        <>
        {loading ? <p className='animate__animated animate__flash' >Loading...</p> : null}

        <div className="grid-box">
            <h2 className="grid-title animate__animated animate__fadeIn">{category}</h2>
            <button className="grid-button">Delete</button>
        </div>

        <div className="card-grid">
            {images.map(image => (
                <GifGridItem key={image.id} {...image} />
            ))}
        </div>
        </>
    );
};