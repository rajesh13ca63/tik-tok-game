import React, { Component } from "react";
import CurrencyInput from "./currencyinput";

class CurrencyCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            currency: 'i'
        }
    this.handleRupeesChange = this.handleRupeesChange.bind(this);
    this.handleDollarChange = this.handleDollarChange.bind(this);
    this.handleCurrencyType = this.handleCurrencyType.bind(this);
    }

    handleRupeesChange (amount) {
        this.setState({
            amount: amount,
            currency: 'i'
        });
    }

    handleDollarChange(amount) {
        this.setState({
            amount: amount,
            currency: 'd'
        });
    }

    handleCurrencyType(option) {
        console.log('Inside handle currency method', option);
    }
    

    render() {
        const amount = this.state.amount;
        const currency = this.state.currency;
        const dollar = (currency === 'i') ? convetCurrency(amount, toDollar) : amount;
        const rupees = (currency === 'd') ? convetCurrency(amount, toRupees) : amount;
        return (
            <div>
                <div>
                    <CurrencyInput currency='i' amount={rupees}
                    onChangeCurrency={this.handleRupeesChange}
                    onChangeCurrencyType={this.handleCurrencyType}/>
                </div>
                <div>
                    <CurrencyInput currency='d' amount={dollar}
                    onChangeCurrency={this.handleDollarChange} 
                    onChangeCurrencyType={this.handleCurrencyType}/>
                </div>
            </div>
        )
    }
}

export default CurrencyCalculator;

function toDollar(inputAmout) {
    return inputAmout/75;
}

function toRupees(inputAmout) {
    return inputAmout*75;
}

function convetCurrency(amount, convert) {
    console.log('Inside ConvertCurrency mettod', amount);
    const inputAmout = parseFloat(amount);
    if(Number.isNaN(inputAmout)) {
        return '';
    }

    const outputAmout = convert(inputAmout);
    return outputAmout;
}