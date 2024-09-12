import React, { Component } from 'react';
import {Fade} from "react-reveal";
import "./header.scss";

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
             <li><a className="smoothscroll" href="#resume">Resume/CV</a></li>
            </ul>
         </nav>
         <Fade clear duration={2000}>
         <div className="row banner">
            <div className="banner-text">
              <Fade bottom duration={1800}>
               <h1 className="responsive-headline"> {resumeData.name}.</h1>
               </Fade>
               <Fade clear duration={4000}>
               <Fade bottom duration={4000}>
               <h3 style={{ fontFamily:'sans-serif '}}>This is {resumeData.role}.{resumeData.roleDescription}
               </h3>
               </Fade>
               </Fade>
               <hr/>
               <Fade bottom duration={1000}>

               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
               </Fade>
            </div>
         </div>
         </Fade>
         <p className="scrolldown">
          <a className="smoothscroll" href="#resume"><i className="icon-down-circle"></i></a>
         </p>
      </header>
     
    );
  }
}