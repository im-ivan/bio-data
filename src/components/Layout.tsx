import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const Layout = () => {
    return (
        <>
            <Header />
            <main className="mt-4">
                <Outlet />
            </main>
        </>
    )
}
