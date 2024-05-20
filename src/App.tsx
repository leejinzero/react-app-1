import { useEffect, useState } from 'react';
import './App.css'
import { Button, ButtonGroup, Container } from '@mui/material';
import style from './app.module.css'

type CounterProps = {
  title : string,
  initValue : number
}

// function Counter(props:CounterProps) {
//   const title = props.title;
//   const initValue = props.initValue;
//   return <div>
//           <h1>{title}</h1>
//           <button>+</button> {initValue}
//         </div>
// }

function Counter({title, initValue}:CounterProps) { // 구조 분해 할당
  // const countState = useState(initValue);
  // const value = countState[0];
  // const setValue = countState[1];
  const [value, setValue] = useState(initValue); // 구조 분해 할당
  const [step, setStep] = useState(10);

  useEffect(() => {
    fetch('http://localhost:9999/counter')
      .then(type=>type.json())
      .then(result=>
          setValue(result.value)
        );
  }, []);
  
  async function putValue(newValue:number) {
    const option = {
      method :'PUT',
      body : JSON.stringify({value:newValue}),
      headers : {
        'Content-Type' : 'application/json'
      }
    };
    // fetch('http://localhost:9999/counter', option)
    //   .then(type=>type.json())
    //   .then(result=>
    //       setValue(result.value)
    //   );

    const type = await fetch('http://localhost:9999/counter', option);
    const result = await type.json();
    setValue(result.value);
  }

  function incrementValue() {
    setValue(prev => prev + step); // setValue(value+1);
    putValue(value + step);
  }

  function decrementValue() {
    setValue(prev => prev - step); // setValue(value+1);
    putValue(value - step);
  }

  // @ts-ignore
  function changeHandler(evt) {
    setStep(Number(evt.target.value));
  }

  const s = {
    border : "5px solid black",
    padding : "20px"
  }

  return <div style={s}>
          <h1 className={style.heading1}>{title}</h1>
          <ButtonGroup variant="contained">
            <Button onClick={incrementValue}>+</Button>
            <Button onClick={decrementValue}>-</Button>
          </ButtonGroup>
          <input type='text' value={step} onChange={changeHandler}></input>
          {value}
        </div>
}

function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Counter title="카운터" initValue={10}></Counter>
        <Counter title="카운터2" initValue={20}></Counter>
        <Counter title="카운터3" initValue={20}></Counter>
        <Counter title="카운터4" initValue={20}></Counter>
        <Counter title="카운터5" initValue={20}></Counter>
        <Counter title="카운터6" initValue={20}></Counter>
      </Container>
    </>
  )
}

export default App
