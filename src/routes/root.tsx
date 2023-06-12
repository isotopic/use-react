import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div className="grid">
            <Header />
            <Menu />
            <div className="page">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}