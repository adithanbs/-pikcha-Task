import React from "react"

const Tax_num = (props) => {
    const {setTaxNum}=props
    return (
        <>
        <div className="mb-3">
            <h3 for="exampleInputEmail1" className="form-label">
            My Tax Number:
            </h3>
            <input
              type="text"
              className="form-control"
              id="num"
              aria-describedby="emailHelp"
              value = {props.taxnum}
              onChange = {(e)=>setTaxNum(e.target.value)}

            />
            </div>
        </>
    )
}

export default Tax_num