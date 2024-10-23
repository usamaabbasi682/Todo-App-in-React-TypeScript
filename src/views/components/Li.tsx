type LiTypes = {
    title: string;
    id: number;
    isCompleted: boolean;
    removeTodo: (id: number) => void;
    setComplete: (id: number) => void;
}

const Li = ({ title, id, isCompleted,removeTodo,setComplete }: LiTypes) => {
  
    return (
        <li className={isCompleted == true ? 'completed' : ''} key={id}>
            <div className="form-check">
                <label className="form-check-label">
                    <input className="checkbox" onChange={()=>{setComplete(id)}} type="checkbox"/>
                    {title}
                    <i className="input-helper" />
                </label>
            </div>
            <button
                className="btn btn-light text-danger"
                onClick={() => { removeTodo(id) }}
                style={{ marginLeft: 'auto' }}
            >
                Delete
            </button>
        </li>
    );
}


export default Li;