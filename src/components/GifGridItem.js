import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {


    return (
        <div className="card animate__animated animate__bounceInLeft ">

            <img src={url} alt={title} />
            <p className="tit"> {title} </p>

            {/* {img.title} */}
        </div>
    )
}

