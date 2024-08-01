import React from 'react';
import Button from "./Components/Button"
import Img from "./assets/rectangle-39.png"
import Cart from "./Components/Cart/Cart";

const App = () => {
        return(
            <React.Fragment>

                <div className="img">
                    <img src={Img} className={'img'}/>

                    <div className="info">
                        <h1>Always in style!</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur at, consequuntur
                            natus porro voluptatem! Commodi  sequi.
                        </p>
                        <span>
                            $249.99/
                            <s>
                                249.99
                            </s>
                        </span>
                        <Button/>

                    </div>
                </div>
                <Cart/>


            </React.Fragment>

        );


};

export default App;