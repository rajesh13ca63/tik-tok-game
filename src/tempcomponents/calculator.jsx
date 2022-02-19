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
        console.log('Temperature in fahrenheit', temperature);
        this.setState({
            temperature: temperature,
            scale: 'f'
        });
    }
    
    handleCelciusChange(temperature) {
        console.log('Temperature in celcius', temperature);
        this.setState({
            temperature: temperature,
            scale: 'c'
        });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const fahrenheit = (scale === 'c') ? tryConvert(temperature, toFahrenheit) : temperature;
        const celcius = (scale === 'f') ? tryConvert(temperature, toCelcius) : temperature;
        return (
            <> 
                <div className="row">
                    <div>
                        <TemperatureInput temperature={celcius} scale="c" 
                        onTemperatureChange = {this.handleCelciusChange} />
                    </div>
                    <div>
                        <TemperatureInput temperature={fahrenheit} scale="f" 
                        onTemperatureChange = {this.handleFahrenheitChange} />
                    </div> 
                </div>
            </>
        )
    }
}

export default Calculator;

function toFahrenheit(celcius) {
    console.log('Inside tofahrentheit method', celcius);
    return (celcius * 9/5) + 32;
}

function toCelcius(fahrenheit) {
    console.log('Inside toCelcius method', fahrenheit);
    return (fahrenheit - 32)* 5/9;
}

function tryConvert(temperature, convert) {
    console.log('Inside tryConvert method', temperature);
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

