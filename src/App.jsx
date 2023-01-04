import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './App.css'
import { countAction } from './redux/action/countAction'
import { fetchAction } from './redux/action/fetchAction'

function App() {
  let dispatch = useDispatch()
  let counter = useSelector(state=>state.counter)
  let list = useSelector(state=>state.call.list)
  const plus = ()=>{
    dispatch(countAction.countUp())
  }
  const minus = ()=>{
    if(counter.count > 0){
      dispatch(countAction.countDown(1))
    }else {
      alert('0보다 작을 수 없음')
    }
  }
  const call = ()=>{
    dispatch(fetchAction.call())
  }
  return (
    <div className="App">
      <div>count</div>
      <div>{counter.count}</div>
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>
      <button onClick={call}>call</button>
        {list.map((item)=>
          <div>
            {item.name}
          </div>
        )}
    </div>
  )
}

export default App
