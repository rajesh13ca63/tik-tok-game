import React, {Component} from "react";
const scaleName = {
    c: 'Celcius',
    f: 'Fahrenheit'
};

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
                
        return (
            <>  
                <label>Enter Temperature in {scaleName[scale]}:</label>
                <input type="text" value={temperature}
                onChange={this.handleChange} />
               
            </>
        )
    }
}

export default TemperatureInput;