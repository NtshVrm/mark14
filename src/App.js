import { useState } from "react";
import "./styles.css";

export default function App() {
  var [purchasePrice, setpurchasePrice] = useState(0);
  var [units, setunits] = useState(0);
  var [currentPrice, setcurrentPrice] = useState(0);

  var [message, setmessage] = useState("");

  function purchaseHandler(event) {
    var purchasePrice = event.target.value;
    setpurchasePrice(purchasePrice);
  }

  function unitHandler(event) {
    var units = event.target.value;
    setunits(units);
  }

  function currentHandler(event) {
    var currentPrice = event.target.value;
    setcurrentPrice(currentPrice);
  }

  function checker() {
    let buyingValue = Number(purchasePrice) * Number(units);
    let presentValue = Number(currentPrice) * Number(units);
    let profit, loss;
    if (buyingValue > presentValue) {
      loss = buyingValue - presentValue;
      let lossPercent = (loss / buyingValue) * 100;
      var message = `Loss is ${lossPercent}% i.e Rs.${loss}.`;
      setmessage(message);
    } else {
      profit = presentValue - buyingValue;
      let profitPercent = (profit / buyingValue) * 100;
      message = `Profit is ${profitPercent}% i.e Rs.${profit}.`;
      setmessage(message);
    }
  }

  return (
    <div className="App">
      <div className="header navigation container">PROFIT or LOSS</div>

      <section className="section edu">
        <div className="container container-center">
          <div>
            <img src="https://i.postimg.cc/3w7pdRGz/undraw-financial-data-es63.png"></img>
          </div>
          <h4 className="color-inverted">
            Enter the stock <span className="alt-color">Purchase Price</span>,{" "}
            <span className="alt-color">Number of Units</span> bought and it's{" "}
            <span className="alt-color">Current Price</span> and the app will
            calculate the amount of Profit/Loss you have incurred.
          </h4>
          <section className="ow">
            <div className="purchase-price">
              Enter Purchase Price:
              <input onChange={purchaseHandler}></input>
            </div>

            <div className="units">
              Enter Number of Units:
              <input onChange={unitHandler}></input>
            </div>

            <div className="current-price">
              Enter Current Price:
              <input onChange={currentHandler}></input>
            </div>
          </section>

          <div className="check">
            <button onClick={checker}>Check</button>
          </div>

          <div className="result">{message}</div>
        </div>
      </section>
    </div>
  );
}
