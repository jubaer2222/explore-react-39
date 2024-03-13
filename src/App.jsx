
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Users from './Users'


function App() {

  function handleClick() {
    alert('i am clicked')
  }
  const handleClick2 = () => {
    alert('i am clicked2')
  }
  // প্যারামিটার ইউজ করলে normal arrow function use korte hobe onClick er okane
  const handleClick3 = (num) => {
    alert(num + 5)
  }





  return (
    <>
      <h2>Vite + React</h2>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>






      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={()=> handleClick3(3)}>Click Me3</button>
    </>
  )
}

export default App
