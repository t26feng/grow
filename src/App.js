import React from 'react'
import './App.css'
import MainMenu from './components/MainMenu'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: <MainMenu />
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(newPage) {
    this.setState({ page: newPage })
  }
  render() {
    return (
      <div className='App'>
        {this.state.page}
      </div>
    )
  }
}

export default App
