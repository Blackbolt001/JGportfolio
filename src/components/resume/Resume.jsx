import React, { Component } from 'react';
import photo1 from "../../assets/images/Tmnt.png";
import photo4 from "../../assets/images/ComicShopBannerPage.png";
import photo5 from "../../assets/images/lenaBooks.png";
import photo6 from "../../assets/images/gooseDashboard.png";
import photo7 from "../../assets/images/gooseShop.png";

import "./resume.scss";
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Training</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns" justifyContent="center" align-items="center">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Experience</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Websites</span></h1>
               </div>
               <div className='Projects'>
                
               <div className='Dash'>
               <a href='https://dashboard.josephgossett.com' target ='blank'>
                <img src = {photo6} alt ="Lena Diaz Novels" width="200" height="200"/>
                <p> Goose Dashboard</p>
               </a>
               </div>
               <div className='Shop'>
               <a href='https://gooseshop.josephgossett.com' target ='blank'>
                <img src = {photo7} alt ="ecommerceShop" width="200" height="200"/>
                <p> Goose Shop</p>
               </a>
               </div>
               
               <div className='Daves'>
               <a href='https://davescomics.josephgossett.com' target ='blank'>
                <img src = {photo4} alt ="Comic Book Storefront" width="200" height="200"/>
               </a>
               <p>Dave's Comics</p>
               </div>
               <div className='Lena'>
               <a href='https://lenabooks.josephgossett.com' target ='blank'>
                <img src = {photo5} alt ="Lena Diaz Novels" width="200" height="200"/>
                <p> Lena Diaz Books</p>
               </a>
               </div>
               <div className='Turtle'>
               <a href = 'https://buy.stripe.com/7sIg26eiw0cPcoMaEE' target='blank'>
               <img src= {photo1} alt ="Ecommerce Site" width="200" height="200"/>
               </a>
               <p>Stripe Payment</p>
               </div>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}