import React from 'react';
import Img from "../../assets/rectangle-39.png";
import img1 from "../../assets/svg.webp";

const Cart = () => {
    return (
        <div className="cart">
            <img src={Img} className={'img-fluid'}/>
                <h1>
                    8500 com
                </h1>
                <span>
                    Lorem ipsum dolor sit amet.
                </span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam doloremque eligendi id impedit in.
                    Perspiciatis.
                </p>
                <div className="icons">
                    <img src={img1} className={'purchase-button'}/>
                    <img src={img1} className={'purchase'}/>
                    <img src={img1} className={'purchase'}/>
                    <img src={img1} className={'purchase'}/>
                </div>
        </div>
    );
};

export default Cart;