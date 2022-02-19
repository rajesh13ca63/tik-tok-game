import React, {Component} from "react";

class CurrencyInput extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            country: {currency: 'rupee', name: 'India', code:'INR'}
        }
        this.handleSelectCurrencyChange = this.handleSelectCurrencyChange.bind(this);
    }

    handleInputChange(e) {
        console.log(e.target.value);
        this.props.onChangeCurrency(e.target.value);
    }

    handleSelectCurrencyChange(e) {
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index];
        const option =  JSON.parse(el.getAttribute('name'));
        this.setState({
            country: {
                ...this.state.country, currency:option.currency, name: option.name, code: option.code
            }
        });
        this.props.onChangeCurrencyType(option);
    }

    render() {
        const countries= [{currency:'Afghan afghani', name:'Afghanistan', code: 'AFN'},
        {currency:'European euro', name:'Belgium', code: 'EUR'},
        {currency:'Carielmbodia', name:'Cambodia', code: 'KHR'},
        {currency:'rupee', name:'India', code: 'INR'},
        {currency:'dollar', name:'USA', code: 'USD'}];

        const amount = this.props.amount;
        //const currency = this.props.currency;
        console.log('render', this.state.country);
        return(
            <div>
                <div className="row">
                    <div className="col-md-4 form-group">
                        <label>Enter Amount </label>
                        <input type="" value={amount} className="form-control"
                        onChange={this.handleInputChange} />
                    </div>
                    <div className="col-md-4 form-group" style={{marginTop: "23px"}} >
                        <select className="form-control" 
                        value={this.state.country.currency}
                        onChange={this.handleSelectCurrencyChange}>
                            {countries.map(country => (
                                <option key={country.code} 
                                value={country.currency} id={JSON.stringify(country)}
                                name={JSON.stringify(country)}>{country.name}</option>
                            ))}
                        </select>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default CurrencyInput;