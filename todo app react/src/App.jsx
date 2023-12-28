import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import TodoItem2 from "./components/TodoITem2"
import TodoItem1 from "./components/TodoItem1"

import "./App.css";


function App() {
  

  return <center className="todo-container">
   <AppName/>
  <AddToDo/>
  <div className="items-container">
  <TodoItem1/>
 <TodoItem2/>
  </div>
  


  
  
  
  </center>

}

export default App
