import { Route, Routes } from "react-router-dom";
import Master from "../views/layouts/Master";
import Home from "../views/Home";

const Web = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Master />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    );
}

export default Web;