import './App.css'

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

// 구조 분해 할당
function Counter({title, initValue}:CounterProps) {
  return <div>
          <h1>{title}</h1>
          <button>+</button> {initValue}
        </div>
}

function App() {
  return (
    <>
      <Counter title="카운터" initValue={10}></Counter>
      <Counter title="카운터2" initValue={20}></Counter>
      <Counter title="카운터3" initValue={30}></Counter>
    </>
  )
}

export default App
