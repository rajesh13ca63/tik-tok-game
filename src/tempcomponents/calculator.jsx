import React, {Component} from "react";
import TemperatureInput from "./temperatureinput";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature:'',
            scale: 'c'
        }
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    }

    handleFahrenheitChange(temperature) {
        console.log('Temperature', temperature);
        this.setState({
            temperature: temperature,
            scale: 'f'
        })
    }
    
    handleCelciusChange(temperature) {
        console.log('Temperature', temperature);
        this.setState({
            temperature: temperature,
            scale: 'c'
        })
    }

    render() {
        const temperature = this.state.temperature;
        const celcius = 0;
        const fahrenheit = 9;
        return (
            <> 
                <div>
                    <TemperatureInput temperature={celcius} scale="c" 
                    onTemperatureChange = {this.handleCelciusChange} />
                </div>
                <div>
                    <TemperatureInput temperature={fahrenheit} scale="f" 
                    onTemperatureChange = {this.handleFahrenheitChange} />
                </div> 
                
            </>
        )
    }
}

export default Calculator;