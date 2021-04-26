import React from "react";
export default class WelcomeScreen extends React.Component {
    
   render() {
       return <div><h1>Welcome!</h1> <button onClick = { () => this.props.screen() }> Menu Screen</button> </div>
       
   }
  
}

