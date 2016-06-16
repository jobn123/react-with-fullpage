import React from 'react'

import Nav from './nav/nav'
import SectionOne from './pages/section_one/section_one'
import SectionTwo from './pages/section_two/section_two'
import SectionThree from './pages/section_three/section_three'
import SectionFour from './pages/section_four/section_four'

class App extends React.Component {
	constructor() {
		super()
	}

	componentDidMount() {
		$('#fullpage').fullpage({
            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
            menu: '#menu',
            css3: true,
            scrollingSpeed: 1000
        });
	}
 	render() {
 		return (
 			<div>
 				<Nav></Nav>
 				<div id='fullpage'>
 					<SectionOne></SectionOne>
 					<SectionTwo></SectionTwo>
 					<SectionThree></SectionThree>
 					<SectionFour></SectionFour>
 				</div>
 			</div>
 		)
 	}
}

export default App