import React from 'react'
import Slider from "react-slick";

//Components
import banner_1 from './../../assets/images/background.png'
import { ProductBox, Props } from '../../components/ProductBox/ProductBox'


//styles
import './Home.scss'

const settingsFavorite = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export const Home = () => {
    return (
        <div className="Home">
            <div className="banner_section slick-arrow">
                <div className="block_section">
                    <div className="favorite_section">
                        <Slider {...settingsFavorite}>
                            <div className="banner">
                                <img src={banner_1} alt="banner_1" className="banner_1" />
                                <div className="banner_content">
                                    <h2>Sale of the summer collection</h2>
                                </div>
                            </div>
                            <div className="banner">
                                <img src={banner_1} alt="banner_1" className="banner_1" />
                                <div className="banner_content">
                                    <h2>Sale of the summer collection</h2>
                                </div>
                            </div>
                            <div className="banner">
                                <img src={banner_1} alt="banner_1" className="banner_1" />
                                <div className="banner_content">
                                    <h2>Sale of the summer collection</h2>
                                </div>
                            </div>
                            <div className="banner">
                                <img src={banner_1} alt="banner_1" className="banner_1" />
                                <div className="banner_content">
                                    <h2>Sale of the summer collection</h2>
                                </div>
                            </div>
                            <div className="banner">
                                <img src={banner_1} alt="banner_1" className="banner_1" />
                                <div className="banner_content">
                                    <h2>Sale of the summer collection</h2>
                                </div>
                            </div>
                            <div className="banner">
                                <img src={banner_1} alt="banner_1" className="banner_1" />
                                <div className="banner_content">
                                    <h2>Sale of the summer collection</h2>
                                </div>
                            </div>
                        </Slider>

                        <ProductBox
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            description={product.description}
                        />
                    </div>    
                </div>
            </div>
        </div>
    )
}
