import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";


export default function CustomLink() {
  return (
    <div className="navbar-wrap">
              <OldSchoolMenuLink
              activeOnlyWhenExact={true}
              to="/homePage"
              label="Home"
              />
              <OldSchoolMenuLink to="/about" label="About" />
              <OldSchoolMenuLink to="/topics" label="Topics" />
              <OldSchoolMenuLink to="/card" label="Категорії" />
       </div>       
  );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    
  <div className="navbar__menuNavbar">
       
      <ul className="navbar__selektor" id="myLi">
              <li id="navFocus" className="navbar__menuItemsPosition"><Link  to={to}  className={match ? "navbar__menuItems active" : "navbar__menuItems"}>{label}</Link></li>
      </ul>
    </div>
                
   
  );
}



