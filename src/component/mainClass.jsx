import './manClass.css'


function MainClass ({count, setCount}) {

    return (
        <div className='mainClass'>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
        <p>{count}</p>
      </div>
    )
}

export default MainClass