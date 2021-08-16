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
      // if (lossPercent > 50) {
      //     header.style.backgroundColor = 'red';
      // }
    } else {
      profit = presentValue - buyingValue;
      let profitPercent = (profit / buyingValue) * 100;
      message = `Profit is ${profitPercent}% i.e Rs.${profit}.`;
      setmessage(message);
      // if( profitPercent > 50) {
      //     header.style.backgroundColor = 'green';
      // }
    }
  }

  return (
    <div className="App">
      <div className="header">Profit or Loss</div>
      <h4>
        Enter your stock purchase price, number of units of stock bought and
        current price and the app will tell you how much profit or loss you have
        incurred.
      </h4>

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

      <div className="check">
        <button onClick={checker}>Check</button>
      </div>

      <div className="result">{message}</div>
    </div>
  );
}
