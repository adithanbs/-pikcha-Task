import React, { useState } from "react";
import Select from 'react-select'

const options = [

  "Portugal",
"New Zealand",
"Australia",
"Japan",
"Morocco",
"Sri Lanka ",
"Italy",
"Iceland", 
"Greece",
"Croatia",
"Turkey",


]

const Form_one = (props) => {
   


const {AllData,setCountryValue,setAddress,setLine,setCity,setPostalCode,setState} = props
const [countruvalue,Address,Line,city,postalcode,state] = AllData
 
  return (
    <>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Residential Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          aria-describedby="emailHelp"
          value = {Address}
          onChange = {(e)=>setAddress(e.target.value)}

        />
        {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Line 2 (Optional)
        </label>
        <input
          type="type"
          className="form-control"
          id="line2"
          aria-describedby="emailHelp"
          onChange = {(e)=>setLine(e.target.value)}
          value = {Line}

        />
        {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          City or Town
        </label>
        <input
          type="text"
          className="form-control"
          id="city"
          aria-describedby="emailHelp"
          onChange = {(e)=>setCity(e.target.value)}
          value = {city}

        />
        {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          ZIP or Post code
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange = {(e)=>setPostalCode(e.target.value)}
          value = {postalcode}

        />
        {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          State or province
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange = {(e)=>setState(e.target.value)}
          value = {state}
        />
        {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Country
        </label>
        <select
          class="form-select"
          aria-label="Default select example"
          value={countruvalue}
          onChange={(e) => setCountryValue(e.target.value)}
        >
          {options.map((e,i) => (
            <>
            <option key = {i} value={e}>{e}</option>
            </>
          ))}
          {/* <option value="Australia">Australia</option>
          <option value="2">Two</option>
          <option value="3">Three</option> */}
        </select>
         {/* <Select options={options}  onInputChange={(e) =>  setCountryValue(e.target.value)} /> */}
      </div>
    </>
  );
}

export default Form_one;