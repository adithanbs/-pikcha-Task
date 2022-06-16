import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Form_one from './Form_one';
import axios from 'axios';
import Tax_num from './Tax_num';
import Exemption from './Exemption';

function App() {
  const [countryvalue, setCountryValue] = useState("");
  const [Address, setAddress] = useState("");
  const [Line, setLine] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [taxnum, setTaxNum] = useState("");
  const [taxopction, setTaxOpction] = useState(null);
  const [check,setCheck] = useState(false)
const AllData = [countryvalue,Address,Line,city,postalcode,state,taxnum,taxopction]
const val = {"countryvalue" :countryvalue,"Address":Address,"Line" : Line,"city":city,"postalcode":postalcode,"state":state,"taxnumber" : taxnum,"TaxOpction":taxopction}
console.log(val)

const handleCheckBox = () => {
  check === false ? setCheck(true) : setCheck(false)
}
  return (
    <div className="App">
      <div className="container my-5">
        <form>
          <Form_one
            setCountryValue={setCountryValue}
            setAddress={setAddress}
            setLine={setLine}
            setCity={setCity}
            setPostalCode={setPostalCode}
            setState={setState}
            AllData={AllData}
          />

          {countryvalue === "Australia" ? (
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked={check}
                onChange = {handleCheckBox}
              />
              <label class="form-check-label" for="flexCheckDefault">
                Default checkbox
              </label>
            </div>
          ) : null}

          {
           countryvalue === "Australia" ? check === true ? <Tax_num  setTaxNum = {setTaxNum} taxnum = {taxnum} /> : <Exemption setTaxOpction = {setTaxOpction} />:null
          }
          
        </form>
      </div>
    </div>
  );
}

export default App;
