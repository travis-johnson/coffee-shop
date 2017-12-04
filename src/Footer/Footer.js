import React from 'react';
import './Footer.css';

const footer = (props)=>{

 

    return(
        <div className="footer">
            <div className="container">
            <div className="level ">
                <div className="level-item has-text-centered">
                    <div>
                            <p className="title">LOCATION</p>
                            <p>873 East Main Street<br/>Durham, NC 27700</p>
                            <p>coffee_shop@email.com</p>
                    </div>
                    </div> 
                    
                    <div className="level-item has-text-centered">
                    <div>
                        <h2 className="title">HOURS</h2>    
                        <p>Mon - Fri    7am-5pm</p>
                        <p>Sat &amp; Sun    7am-4pm</p>
                    </div>
                    </div> 

                    <div className="level-item">
                    <div>
                        <img src={require("./img/twitter.svg")} alt="Twitter Logo"/>
                        <img src={require("./img/facebook.svg")} alt="Facebook Logo"/>
                        <img src={require("./img/instagram.svg")} alt="Instagram Logo"/>
                        <img src={require("./img/youtube.svg")} alt="Youtube Logo"/>



                    </div>
                 </div>
            </div>
            </div>
</div>
)
}

export default footer