import React from 'react'

require('./section_two.less')

class SectionTwo extends React.Component {
	render() {
		return (
			<div className="section" id="section1">
      			<div className="slide active">
      			        <div className="intro">
      			          <h1>SectionTwo Page One</h1>
      			          <p>Not only vertical scrolling but also horizontal scrolling. With fullPage.js you will be able to add horizontal sliders in the most simple way ever.
      			          </p>
      			        </div>
      			 </div>
      			 <div className="slide">
      			         <div className="intro">
      			           <h1>SectionTwo Page Two</h1>
      			           <p>Not only vertical scrolling but also horizontal scrolling. With fullPage.js you will be able to add horizontal sliders in the most simple way ever.
      			           </p>
      			         </div>
      			  </div>
      			  <div className="slide">
      			         <div className="intro">
      			           <h1>SectionTwo Page Three</h1>
      			           <p>Not only vertical scrolling but also horizontal scrolling. With fullPage.js you will be able to add horizontal sliders in the most simple way ever.
      			           </p>
      			         </div>
      			  </div>
      			  <div className="slide">
      			          <div className="intro">
      			            <h1>SectionTwo Page Four</h1>
      			            <p>Not only vertical scrolling but also horizontal scrolling. With fullPage.js you will be able to add horizontal sliders in the most simple way ever.
      			            </p>
      			          </div>
      			   </div>
    		</div>
		) 
	}
}

export default SectionTwo