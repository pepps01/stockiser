import React from 'react'

function OptimalParameter() {
  return (
    <div>
        <div class="card">
        <div class="card-title">Optimal Parameter</div>
        <form>
            <div className="form-group">
              <label>Stockastic</label>
              <select>
                <option>Roll Low (Upper & Lower)</option>
                <option>Roll High (Upper & Lower)</option>
                <option>Fasts (Upper & Lower)</option>
                <option>Low (Upper & Lower)</option>
              </select>
            </div>
            <div className="form-group">
              <label>Moving Average Covergent & Divergent</label>
              <select>
                <option></option>
                <option>Fast (Upper & Lower)</option>
                <option>Slow (Upper & Lower)</option>
                <option>Smooth (Upper & Lower)</option>
              </select>
            </div>

            <div className="form-group">
              <input type="submit" value={"Adopt  Parameter"} onClick={handleSubmit} />
            </div>
        </form>
      </div>
    </div>  
  )
}

export default OptimalParameter