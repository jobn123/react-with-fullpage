import React from 'react'
import ReactDOM from 'react-dom'
// import $ from 'jquery'

import App from './components/app'

require('./base.less')

const ROOT = document.getElementById('app')

ReactDOM.render(<App />, ROOT)