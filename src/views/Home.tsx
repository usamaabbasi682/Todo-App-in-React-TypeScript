import { useState } from "react";
import "../public/css/style.css";
import Card from "./components/Card";
import Li from "./components/Li";
import AddTodo from "./components/AddTodo";
import Ul from "./components/Ul";

const Home = () => {
  const [todos, setTodo] = useState<null | string[]>(null);

  const removeTodo = (id: number) => {
    setTodo(prev => prev ? prev.filter((_, index) => index !== id) : null);
  }

  const setComplete = (index: number) => {
    if (todos && todos[index].includes("✅")) {
      setTodo(prev => prev ? prev.map((todo, i) => i === index ? todo.slice(0, -2) : todo) : null);
    } else if (todos) {
      setTodo(prev => prev ? prev.map((todo, i) => i === index ? todo + " ✅" : todo) : null);
    }
  }

  console.log(todos);
  
  return (
    <>
      <div className="container">
        <Card title="Task Organizer">
          <AddTodo setTodo={setTodo} />
          <Ul>
            {
              todos != null ? todos?.map((todo, index) => (
                <Li removeTodo={removeTodo} setComplete={setComplete} title={todo} id={index} isCompleted={false} />
              )) : <>No Item Found</>
            }
          </Ul>
        </Card>
      </div>
    </>
  );
};

export default Home;