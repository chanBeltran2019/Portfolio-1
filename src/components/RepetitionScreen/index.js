import React from "react"
import "../style/parStyle.css"
import"../style/button.css"


class RepetitionExercise extends React.Component {
   constructor(props){
      super(props)
      this.state = { value: this.props.value }
   }
   addOne() {
      this.setState((initState) => ({
         value: initState.value + 1,
      }))
   }
   reset() {
      this.setState((initState) => ({
         value: 0,
      }))
   }
   render() {
      return (
         <div class="container">
         <div class = "center">
            <h1>{this.props.name}</h1>
            <p> Reps:{this.state.value}</p>
            <button onClick={() => this.addOne()}>Complete Rep</button>
            <button onClick={() => this.reset()}>Reset</button>
            </div>
         </div>
      )
   }
}
export default RepetitionExercise