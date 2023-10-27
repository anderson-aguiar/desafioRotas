import { Outlet } from "react-router-dom";
import CardProducts from "../../../components/CardProducts";

export default function Products() {
    return (
        <>
            <CardProducts />
            <Outlet />
        </>

    );
}