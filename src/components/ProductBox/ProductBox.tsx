import React from 'react'

export interface Props {
    id: string | number,
    title: string, 
    price: string,
    thumb: string,
    isBig?: boolean,
    image: string,
}

export const ProductBox = (props: ProductBoxProps) => {
    return (
        <div className="ProductBox">
            
        </div>
    )
}
