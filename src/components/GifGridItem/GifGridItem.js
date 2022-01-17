import React from 'react';
import './GifGridItem.css';

export const GifGridItem = ({title, urlImage}) => {

    return (
        <div className="box animate__animated animate__fadeIn">
            <img className="image" src={urlImage} alt={title} />
        </div>
    )
}
