import React from 'react'

import './ProductBox.scss';

export interface ProductBoxProps {
    id: string | number,
    title: string, 
    price: string,
    isBig?: boolean,
    image: string,
}

export const ProductBox = (props: ProductBoxProps) => {
    return (
        <div className="ProductBox">
            <div className={`ProductBox ${props.isBig ? 'ProductBox--big' : 'ProductBox--small'}`}></div>
                <div className="ProductBox__thumb">
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className="ProductBox__content">
                    <h4>{props.title}</h4>
                    <span>{props.price}</span>
                </div>
        </div>
    )
}
