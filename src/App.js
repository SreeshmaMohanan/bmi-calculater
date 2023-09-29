import React, {useState} from 'react'

import './index.css'

function App() {

  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')



  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height))
      setBmi(bmi.toFixed(1))

      // Logic for message

      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }

  


  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app d-flex flex-column justify-content-center align-items-center w-100 flex-warp bg-dark" >
      <div className='container shadow rounded ' style={{backgroundImage:'url("https://www.womansworld.com/wp-content/uploads/2022/09/Measuring-tape-and-BMI-word-in-wooden-block.jpg?w=953")',backgroundAttachment:'fixed',backgroundSize:'cover',backgroundRepeat:'no-repeat',borderRadius:'10px',width:'500px'}}>
        <h2 className='text-center bg-light shadow rounded text-center mt-4 mb-6 py-3 px-8' >BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label><b>Weight (Kg)</b></label>
            <input className='' onChange={(e) => setWeight(e.target.value)} placeholder='0'/>
          </div>
          <div>
            <label><b>Height (m)</b></label>
            <input  onChange={(event) => setHeight(event.target.value)}  placeholder='0'/>
          </div>
          <div className='jd-flex ustify-content-center align-items-center'>
            <button className='btn btn-dark w-25 m-5' type='submit'>Submit</button>
            <button className='btn btn-light w-25 m-5' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>

        <div className='center bg-light shadow rounded text-center mt-4 mb-6 py-3 px-8'>
          <h3>Your BMI is:<span className='text-danger'> {bmi}</span></h3>
          <h4 className='text-warning bg-dark m-3 rounded mt-3 mb-3 p-2' style={{height:'100px'}}>{message}</h4>
        </div>

      </div>
    </div>
  );
}

export default App;