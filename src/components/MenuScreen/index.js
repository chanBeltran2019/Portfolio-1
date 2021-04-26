import React from "react"
import RepetitionExercise from "../RepetitionScreen"
import DurationExercise from "../DurationScreen"
import TextComponent from "../TextComponent"
import "../style/background.css"
import "../style/header.css"

const menu = "menu"
const repetition_screen = "repetition_screen"
const duration_screen = "duration_screen"
class MenuScreen extends React.Component {ite
   constructor(props) {
      super(props)
      this.state = { currentScreen: menu, chosenItem: undefined}
   }
   updateValue(newValue) {
      let propName = this.state.chosenItem.style == "repetition" ? "value": "timeStart"
      this.state.chosenItem[propName] = newValue
   }

   render() {
      let typeExer = [
         { name: "Squats", style: "repetition",value:0},
         { name: "Running",style: "duration",timeStart:0},
         { name: "Bicep Curls",style: "repetition",value:0 },
         { name: "Swimming",style: "duration",timeStart:0 },
         { name: "Pull Ups",style: "repetition",value:0 },
         { name: "Plank", style: "duration", timeStart: 0 },
         { name: "Lateral Raises", style: "repetition", value: 0 },
         { name: "Deadhang", style: "duration", timeStart: 0 },
         { name: "Lunges", style: "repetition",value:0},
         
              
      ]
      
      let screen
      switch (this.state.currentScreen) {
         case menu:
            screen = (
               <div class="container">
               <div class = "center">
                  <h1>Let's Workout!</h1>
                  <ul style={{ "list-style-type":"none"}}>
                     {typeExer.map((type) =>
                        type.style === "repetition" ?
                           (
                              <li><button onClick={() => this.setState({ currentScreen: repetition_screen,chosenItem: type })}>{type.name}</button></li>)
                           : (<li><button onClick={() => this.setState({ currentScreen: duration_screen,chosenItem: type })}>{type.name}</button></li>)
                     )}
                  </ul>
                  <TextComponent></TextComponent>
                  </div>
               </div>
            )
            break;
         case repetition_screen:
            screen =
              <>
               <RepetitionExercise {...this.state.chosenItem} updateValue ={(value)=>this.updateValue(value)}></RepetitionExercise>
               <button class = "return" onClick= { () => this.setState({currentScreen: menu})}> Return</button>
               </>
            break;
         case duration_screen:
            screen =
            <>
            <DurationExercise {...this.state.chosenItem} updateValue ={(value)=>this.updateValue(value)}></DurationExercise>
            <button class = "return" onClick={() => this.setState({ currentScreen: menu })}>Return</button>
            </>
            break;
      }
      return screen
      
   }
}
export default MenuScreen