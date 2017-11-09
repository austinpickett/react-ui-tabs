import React, { Component } from 'react'
import { render } from 'react-dom'

import '../../css/style.css'

export default class App extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>
    )
  }
}

let app
if (app = document.getElementById('app'))
  render(<App />, app)
