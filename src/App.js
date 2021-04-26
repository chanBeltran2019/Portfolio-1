import React from "react"
import MenuScreen from "./components/MenuScreen"



export default class App extends React.Component {
   constructor(props) {
      super(props)
      this.state = { active: false }
   }
  render() {
     
      return <MenuScreen></MenuScreen>
   }
}



