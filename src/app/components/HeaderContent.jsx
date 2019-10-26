import React from "react";
import exchangelogo from '../../../image/exchange-logo.png'




class HeaderContent extends React.Component {
  
    handleClick = () => {
    }


    render() {
        return (
            
  
        <div className="description">
        <div className="container">
            <div className="descriptionStaff">
            <h1 className="descriptionTitle">
                Оренда <br/>
                наймання, тимчасове користування будівлями, земельною ділянкою, обладнанням, виробничими площами, машинами і т. ін. на договірних засадах.
            </h1>
            <div className="exchangelogo"><img src={exchangelogo} id="mainLogo"/></div>
            
            </div>
            </div>
        </div>

        );
    }
}

export default HeaderContent;