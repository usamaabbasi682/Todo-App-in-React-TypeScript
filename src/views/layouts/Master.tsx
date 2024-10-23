import { Outlet } from "react-router-dom";

const Master = () => {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Master;