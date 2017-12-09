import React from 'react';
import './Content.css';

const content = (props)=>{
    return(
        


        <div className="content">
        <div className="header">
            <div className="navbar">
                <div className="container">
                <div className="navbar-start has-text-centered">
                    <div className="navbar-item"><a href="#coffee">Coffee</a></div>
                    <div className="navbar-item"><a href="#menu">Menu</a></div>
                </div>
                    <div className="logo has-text-centered">
                        <h1 className="is-size-4-desktop is-size-5-touch">COFFEE SHOP</h1>
                    </div>
                <div className="navbar-end has-text-centered">
                <div className="navbar-item"><a href="#about">About</a></div>
                <div className="navbar-item"><a href="#contact">Contact</a></div>

                </div>
                </div>
            </div> 
        </div>
                <div className="coffee columns bg">
                    <div className="column">
                        <figure>
                            <img className="image" src={require("./img/coffee-cup.jpeg")} alt="Coffee Cup"/>
                        </figure>
                    </div>
                    <div className="column">
                        <p>Barista bar foam latte mug trifecta crema so organic cappuccino et carajillo. Breve in id shop cultivar rich, mug to go half and half single origin french press. Americano, french press rich est crema, lungo milk macchiato single origin crema. Percolator, spoon, cup white milk, aftertaste, espresso aged barista qui seasonal.</p>
                        <p>Americano, french press rich est crema, lungo milk macchiato single origin crema. Percolator, spoon, cup white milk, aftertaste, espresso aged barista qui seasonal.Americano, french press rich est crema, lungo milk macchiato single origin crema. Percolator, spoon, cup white milk, aftertaste, espresso aged barista qui seasonal.</p>
                    </div>
                   
                </div>
        </div>
    );
}

export default content