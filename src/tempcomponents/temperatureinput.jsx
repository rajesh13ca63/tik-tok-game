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
                <div className="form-group" style={{margin: "1rem"}}>
                    <label style={{color:"green"}}>Enter Temperature in {scaleName[scale]}:</label>
                    <div className="">
                        <input type="number" value={temperature}
                        onChange={this.handleChange} />
                    </div>
                </div>
            </>
        )
    }
}

export default TemperatureInput;