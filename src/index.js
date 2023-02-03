import React from 'react'
import ReactDOM from 'react-dom'

import {Header} from './components/Header.jsx'

const App = () => {
    return (
        <div>
          <Header />
            <h1>Hello, world!!</h1>
        </div>
    )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)