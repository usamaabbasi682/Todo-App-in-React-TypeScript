type UlTypes = {
    children: React.ReactNode
}

const Ul = ({ children }: UlTypes) => {
    return (
        <div className="list-wrapper">
            <ul className="d-flex flex-column-reverse todo-list">
                {children}
            </ul>
        </div>
    );
}


export default Ul;