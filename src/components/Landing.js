import { Button, Checkbox, Container, FormControl, FormControlLabel, Input } from '@mui/material'
import React from 'react'

export default function Landing() {
  return (
    <div className='main-container'>
      <Container>
        <div className='content-container'>
          <div className='text-cont'>
            <h1 className='textc'>Bring your home a beautiful <span style={{color: "#ffc400", marginLeft: "10px"}}>interior</span> </h1>
          </div>
          <div className='form-cont'>
            <div className='formc'>
              <FormControl  className='form-reg'>
              <h1 className='form-heading' style={{textAlign: "center", color: "#4b0a0a", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "20px"}}>Bring your home a beautiful interior Bring your home a beautiful</h1>
              <input placeholder='name' className='inputc' />
              <input placeholder='email' className='inputc' />
              <input placeholder='Phone number' className='inputc' />
             
              <FormControlLabel control={<Checkbox defaultChecked style={{color: "#ffc400"}} />} className='form-reg' label="send me messages through whatsapp" />
              <input placeholder='Address' className='inputc' />
              <Button variant='contained' style={{borderRadius: "20px", backgroundColor: "#ffc400", fontWeight: "bolder", margin: "20px 0"}}>Get free Consultation</Button>
              </FormControl>
              <div>
              <p style={{fontSize: "0.8rem", textAlign: "center"}}  className='form-reg'>on clicking sumbit you are agreeing for our <span style={{color: "#ffc400"}}>terms & conditions</span>, kindly check our <span style={{color: "#ffc400"}}>privacy policy</span></p>
            </div>
            </div>
           
          </div>
        </div>
      </Container>
    </div>
  )
}
