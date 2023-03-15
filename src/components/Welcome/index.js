import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {name, age, city} = this.props
    return (
      <h1>
        Hello, {name} age is {age}, living in {city}
      </h1>
    )
  }
}

export default Welcome
