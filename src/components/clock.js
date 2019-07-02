import React, { Component } from 'react'
import {setInterval} from 'timers'

export default class Clock extends Component {
    constructor(props){
        super(props)
    
        this.state = {
             
        }
    }
    componentWillMount(){
        const date = {date:new Date()}
        this.setState(date)
        // this.state.date = new Date()
    }

    render() {
        return (
            <div>
         <h2> {this.state.date.toTimeString().split(' ')[0]}</h2>       
            </div>
        )
    }
    componentDidMount(){
 setInterval(() => {
    this.setState({date:new Date()})
 }, 1000);

    }

}




// class Clock{
//     constructor(props){
//         super(props)
//         this.state = date:new Date
//     }
//     render(){
//         return ()
//     }
// }
// import React from 'react'

// export default function clock() {
//     return (
//         <div>
            
//         </div>
//     )
// }
