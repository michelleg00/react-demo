import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="min-h-screen m-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}