import React, {Component} from "react";
class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState( {
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount() {
        console.log('Unmount timer called');
        clearInterval(this.timerID);
    }
  
    render() {
        return (
            <div>
                <h3>Time: {this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}

export default Clock;