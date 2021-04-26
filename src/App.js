import React from "react"
import MenuScreen from "./components/MenuScreen"
import WelcomeScreen from "./components/WelcomeScreen"




export default class App extends React.Component {
   constructor(props) {
      super(props)
      this.state = { active: false }
   }
   changeScreen = () => this.setState({active: true})
  render() {
     
       return this.state.active ? <MenuScreen></MenuScreen> : <WelcomeScreen screen = {this.changeScreen} ></WelcomeScreen>

   }
}



