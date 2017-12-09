import React from 'react';
import './Content.css';

const content = (props)=>{
    return(   
        <div className="content">
                <div className="coffee bg">
                <div className="has-text-centered"><h1 className="is-size-2-desktop is-size-3-touch has-text-weight-bold"><u>COFFEE</u></h1></div>

                    <div className="columns">
                        <div className="column"> 
                            <figure>
                                <img className="image shadow" src={require("./img/coffee-cup.jpeg")} alt="Coffee Cup"/>
                            </figure>
                        </div>
                        <div className="column">
                            <p>Barista bar foam latte mug trifecta crema so organic cappuccino et carajillo. Breve in id shop cultivar rich, mug to go half and half single origin french press. Americano, french press rich est crema, lungo milk macchiato single origin crema. Percolator, spoon, cup white milk, aftertaste, espresso aged barista qui seasonal.</p>
                            <p>Americano, french press rich est crema, lungo milk macchiato single origin crema. Percolator, spoon, cup white milk, aftertaste, espresso aged barista qui seasonal.Americano, french press rich est crema, lungo milk macchiato single origin crema. Percolator, spoon, cup white milk, aftertaste, espresso aged barista qui seasonal.</p>
                        </div>
                    </div>
                   
                </div>
        </div>
    );
}

export default content