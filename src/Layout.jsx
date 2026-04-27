import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="min-h-screen m-4">
                <Outlet />
            </main>
        </div>
    );
}