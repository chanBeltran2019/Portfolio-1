import React from "react"

// ATTRIBUTE HERE, EXTREMELY LOST ON HOW TO DO IT, INCOPORATED PROPERTY FROM ARRAY, REST WAS FROM THIS SOURCE: https://www.youtube.com/watch?v=V5lbEPwdiCg 

class DurationExercise extends React.Component {
   constructor(props){
      super(props)
       this.state = { value: this.props.timeStart }
       this.start = this.start.bind(this)
       this.stop = this.stop.bind(this)
       this.reset = this.reset.bind(this)
    }
    
    start() {
        this.timer = setInterval(() => 
            this.setState({
            value : this.state.value + 1
        }), 1000)
    }
    stop() {
        clearInterval(this.timer)
    }
    reset() {
        this.setState({value:0})
    }
   render() {
       
      return (
         <div class="container">
         <div class = "center">
            <h1>{this.props.name}</h1>
              <p> Time: {this.state.value} </p>
              <button onClick ={this.start}>Start</button>
              <button onClick ={this.stop}>Stop</button>
               <button onClick={this.reset}>Reset</button>
               
            </div>
         </div>
      )
   }
}
export default DurationExercise