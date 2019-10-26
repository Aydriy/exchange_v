import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

class Toolbaritem extends React.Component {
  
    handleClick = () => {
    }


    render() {
        return (
            
            <section>
                
           <div className="toolbarwrapper slideRight" id="toolbarid" >
               
               <div className="wraptool">
                <div className="elementsTool">
                    {/* <li className="toollist">
                        <ul>1</ul>
                        <ul>2</ul>
                        <ul>3</ul>
                        <ul>4</ul>
                    </li> */}
                    
                        
                        <div className="button-effect toollist containertoll">
                            
                            <Link to="/portfolio" className="effect effectfive" href="#" onClick={this.handleClick=()=>(showToolbar('none'))} >Мій кабінет</Link>
                            <a className="effect effectfive" href="#" >Повідомлення</a>
                            <a className="effect effectfive" href="#" >Товари</a>
                            <a className="effect effectfive" href="#" >Learn More</a>
                            <a className="effect effectfive" href="#" >Learn More</a>
                        </div>
                       
                </div>
           </div>
           <div className="button-effect toollist containertoll">
                <a className="effect effectfive" href="#" >Learn More</a>
                <a className="effect effectfive" href="#" >Learn More</a>
            </div>
           </div>
          </section>        
          
          
        );
    }
}

export default Toolbaritem;
