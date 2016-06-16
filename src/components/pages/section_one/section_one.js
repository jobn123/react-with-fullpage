import React from 'react'

require('./section_one.less')

class SectionOne extends React.Component {
	render() {
		return (
			<div className="section active" id="section0">
      			<h1>Section One</h1>
    		</div>
		) 
	}
}

export default SectionOne