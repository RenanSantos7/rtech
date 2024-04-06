import { Outlet } from "react-router-dom";
import PageHeader from "../components/PageHeader/PageHeader.tsx";

export default function Base() {
    return (
        <>
            <PageHeader />
            <Outlet />
        </>
    )
}

