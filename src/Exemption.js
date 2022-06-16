import React from "react";


const Exemption = (props) => {
    return (
        <>
        <h3>Exemption Category</h3>
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  onChange = {(e) => props.setTaxOpction(1)}/>
  <label class="form-check-label" for="flexRadioDefault1">
    category 1
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange = {(e) => props.setTaxOpction(2)}  />
  <label class="form-check-label" for="flexRadioDefault2">
  category 2
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  onChange = {(e) => props.setTaxOpction(3)}/>
  <label class="form-check-label" for="flexRadioDefault2">
  category 3
  </label>
</div><div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  onChange = {(e) => props.setTaxOpction(4)} />
  <label class="form-check-label" for="flexRadioDefault2">
  category 4
  </label>
</div>
        </>
    )
};

export default Exemption;