import React from 'react'

require('./nav.less')

class Nav extends React.Component {
	render() {
		return (
			<ul id="menu">
    			<li data-menuanchor="firstPage" class="active"><a href="#firstPage">First section</a></li>
    			<li data-menuanchor="secondPage"><a href="#secondPage">Second section</a></li>
    			<li data-menuanchor="3rdPage"><a href="#3rdPage">Third section</a></li>
    			<li data-menuanchor="4thpage"><a href="#4thpage">Fourth section</a></li>
  			</ul>
		)
	}
}

export default Nav