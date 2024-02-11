import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function Emi() {
  const [amount,setAmount]=useState(0)
  const [tenure,setTenure]=useState(0)
  const [rate,setRate]=useState(0)
  const [result,setResult]=useState(0)
  const calculate=(e)=>{
    const ans = ((amount*rate/12)*((1+(rate/12))**tenure)/((1+(rate/12))**(tenure-1))).toFixed(2)
    const ans1 = ((amount*rate*(1+rate)**tenure)/((1+rate)**tenure-1)).toFixed(2)
    setResult(ans)
  }
  const reset=(e)=>{
    setAmount(0)
    setRate(0)
    setTenure(0)
    setResult(0)
  }
  return (
    <div>
        <div className="row my-4" style={{display:'flex', width:'100%'}}>
            <div className="col">
                <img width={'430px'} src="https://blog.stashfin.com/wp-content/uploads/2023/05/6982903_3324677.jpg" alt="" />
            </div>
            <div className="col mx-5 p-5">
            <TextField onChange={(e)=>setAmount(e.target.value)} value={amount||""} id="filled-basic" label="Loan Amount" variant="filled" /><br /><br />
            <TextField onChange={(e)=>setTenure(e.target.value)} value={tenure||""} id="filled-basic" label="Tenure (in months)" variant="filled" /><br /><br />
            <TextField onChange={(e)=>setRate(e.target.value)} value={rate||""} id="filled-basic" label="Interest Rate (%)" variant="filled" /><br /><br />
            <Button onClick={e=>calculate(e)} style={{backgroundColor:'rgb(241, 60, 60)'}} variant="contained">Calculate</Button>
            <Button onClick={e=>reset(e)} style={{backgroundColor:'rgb(241, 60, 60)', marginInline:'25px'}} variant="contained">Reset</Button>
            </div>
            <div className="col mt-5">
              <h3 className='mt-5 ms-4'>EMI Amount</h3>
              <div className='mt-4' style={{backgroundColor:'rgb(241, 60, 60)', width:'200px', height:'150px', borderRadius:'30px'}}>
                <h2 className='text-center py-5 text-light'>&#8377; {result}</h2>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Emi