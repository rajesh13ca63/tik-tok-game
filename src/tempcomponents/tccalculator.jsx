import CurrencyCalculator from "../currencycomponents/currencycalculator";
import Calculator from "./calculator";

function TcCalculator() {
    return(
        <>
            <div className="row">
                <div className="col-md-6">
                    <Calculator />
                </div>
                <div className="col-md-6">
                    <h3>Currency Converter </h3>
                    <CurrencyCalculator />
                </div>
            </div>
        </>
    )
}

export default TcCalculator;