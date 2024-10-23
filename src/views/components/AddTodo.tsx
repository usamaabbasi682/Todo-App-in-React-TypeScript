import { useState } from "react";

type Props = {
    setTodo: React.Dispatch<React.SetStateAction<null | string[]>>;
};

const AddTodo = ({setTodo}: Props) => {
    const [input, setInput] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    const handleClick = () => {
        setTodo(prev => prev ? [...prev, input] : [input]);
        setInput("");
    };

    return (
        <div className="add-items d-flex">
            <input type="text" value={input} onChange={handleChange} className="form-control todo-list-input" placeholder="What do you need to do today?" />
            <button onClick={handleClick} className="add btn btn-primary font-weight-bold todo-list-add-btn">
                Add
            </button>
        </div>
    );
}

export default AddTodo;