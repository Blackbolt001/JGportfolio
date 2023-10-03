import React, { Component } from 'react';
import photo1 from "../../assets/images/Tmnt.png";
import photo3 from "../../assets/images/projectonemainpage.png";
import photo4 from "../../assets/images/ComicShopBannerPage.png";
import photo5 from "../../assets/images/lenaBooks.png";
import photo2 from "../../assets/images/GeorgiaGooseDesignsPage.png";
import "./resume.scss";
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Certifications</span></h1>
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
               <h1><span>Projects</span></h1>
               </div>
               <div className='Projects'>
                
               <div className='Ecommerce'>
               <a href='https://blackbolt001.github.io/react-mini/' target='blank'>
                <img src ={photo3} alt = "Ecommerce Main Page" width="200" height="200"/>
               </a>
               <h1> Ecommerce</h1>
               </div>
               <div className='Turtle'>
               <a href = 'https://buy.stripe.com/7sIg26eiw0cPcoMaEE' target='blank'>
               <img src= {photo1} alt ="Ecommerce Site" width="200" height="200"/>
               </a>
               <h1>Stripe Payment</h1>
               </div>
               <div className='Goose'>
               <a href='https://blackbolt001.github.io/GeorgiaGooseWebDesigns/' target='blank'>
                <img src= {photo2} alt ="Georgia Goose Designs" width="200" height="200"/>
               </a>
               <h1>Georgia Goose</h1>
               </div>
               <div className='Daves'>
               <a href='https://davescomics.josephgossett.com' target ='blank'>
                <img src = {photo4} alt ="Comic Book Storefront" width="200" height="200"/>
               </a>
               <h1>Dave's Comics</h1>
               </div>
               <div className='Lena'>
               <a href='https://lenabooks.josephgossett.com' target ='blank'>
                <img src = {photo5} alt ="Lena Diaz Novels" width="200" height="200"/>
                <h1> Lena Diaz Books</h1>
               </a>
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