import * as React from 'react'

export const FirebaseContext = React.createContext()
export class FirebaseProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  updateState = (prevState, newState = {}) => {
    this.setState({ ...prevState, ...newState })
  }

  initialize = () => {

  }

  componentDidMount() {
    this.initialize()
  }

  render () {
    const {
      user,
    } = this.state
    return (
      <FirebaseContext.Provider value={{
        user,
        updateState: this.updateState,
      }}>
        {this.props.children}
      </FirebaseContext.Provider>
    )
  }
}

export default FirebaseProvider