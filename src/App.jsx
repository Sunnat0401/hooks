import { useState, useCallback  } from 'react'
import './App.css'
import { useEffect, useMemo } from 'react'
const randomNumber =() =>{
  console.log("Creating randoom number");
 return  Math.floor(Math.random() *100)
}
const Counter = () =>{
   const [counter, setCounter] = useState(0)
   const [auto, setAuto] = useState(false)
   const getImagess = useCallback(()=>{
    console.log("get images")
    return [
     "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600",
     "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
   }, [])
   function onIncrament () {
    setCounter(state => state +1)
   }
   function onDecrament() {
    setCounter(state => state-1)
   }
   function onToggleAuto () {
    setAuto(state => !state)
   }
 const number = useMemo(()=>{
  return  randomNumber()
 }, [auto])
 const dynamicStyle  = useMemo(() =>({
  color: counter < 0 ? "red" : "white" 

 }) , [counter])
   return(
    <div  className='w-full wh-100 bg-dark text-white d-flex justify-center align-items-center '>
      <div className='border w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column' >
        <div className='d-flex h-50 gap-2'>
       <Slider getImagess={getImagess}/>
        </div>
        <h1 style={dynamicStyle}>Counter : {number}</h1>
        <div className='d-flex align-items-center gap-2'>
          <button className='btn btn-success' onClick={onIncrament}>INC+</button>
          <h1>{counter}</h1>
          <button className='btn btn-danger' onClick={onDecrament}>DEC-</button>
        </div>
        {auto && "Auot Play" }
        <button className='btn btn-primary w-25' onClick={onToggleAuto}>Auto</button>
      </div>
    </div>
   )
}
const Slider = ({getImagess}) =>{
  const [data, setData ] =useState([])
useEffect(()=>{
  setData(getImagess())
}, [])
  return data.map( img => (
    <img src={img} alt={img} className='w-50' key={img } />
  ))
}

const App = () => {
  return (
   <Counter/>
  )
}

export default App


//  useCallback bizga qandaydur funksiyani saqlasa useMemo qandaydurr qiymatni salqaydi  va uni variable o'zgaruvchi sifatida ishlatamiz funksiya sifatidamas