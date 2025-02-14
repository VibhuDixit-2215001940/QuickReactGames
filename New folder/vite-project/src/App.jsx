import React, { useState } from 'react'

const App = () => {
  let [todos, setTodos] = useState([{title:"cricket",desc:"play cricket"},{title:"chess",desc:"play chess"}])
  return (
    <div>
      {todos.map((todos,idx)=>{
        return <Todo key={idx} title={todos.title} desc={todos.desc}/>
        // return <Todo key={Math.random()*100} title={todos.title} desc={todos.desc}/>
      })}
    </div>
  )
}
function Todo({title,desc}){
  return (
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
export default App
