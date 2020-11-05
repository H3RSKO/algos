const React = require('react')

or

import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const component = () => {
  [name, setName] = useState('default')
}

ReactDOM.render(
  <div>
    <app />
  </div>,
  document.getElementById('app')
)


console.log(factorial(5))
