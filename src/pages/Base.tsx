import { Outlet } from "react-router-dom";
import PageHeader from "../components/PageHeader/PageHeader.tsx";
import PageFooter from "../components/Footer/Footer.tsx";

export default function Base() {
    return (
        <>
            <PageHeader />
            <Outlet />
            <PageFooter />
        </>
    )
}

