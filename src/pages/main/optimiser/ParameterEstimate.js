import React from "react";

const ParameterEstimate = () => {


  const handleSubmit =()=>{}
  return (
    <div>
      <h1>Parameter Estimate</h1>
      {/* <table>
        <thead>
          <th></th>
          <th>Return Value</th>
          <th>Number of buys</th>
          <th>Number of Sells</th>
        </thead>
        <tbody>
          <tr>
            <td>Maximum Return</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Highest Number of Buy Signals with a positive Return </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Highest Number of Sell Signals with a positive Return </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table> */}


      <div class="card">
        <form>
            <div className="form-group">
              <label>Stockastic</label>
              <select>
                <option>Roll Low</option>
                <option>Roll High </option>
                <option>Fasts </option>
                <option>Low </option>
              </select>
            </div>
            <div className="form-group">
              <label>Moving Average Covergent & Divergent</label>
              <select>
                <option></option>
                <option>Fast</option>
                <option>Slow </option>
                <option>Smooth </option>
              </select>
            </div>
            <div className="form-group">
              <label>Relative Strength Indicators</label>
              <select>
                <option>Overbought</option>
                <option>Oversold</option>
              </select>
            </div>

            <div className="form-group">
              <input type="submit" value={"Estimate Parameter"} onClick={handleSubmit} />
            </div>
        </form>
      </div>
    </div>
  );
};

export default ParameterEstimate;
