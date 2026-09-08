import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import StationsPage from "../pages/StationsPage";
import StationDetailPage from "../pages/StationDetailPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <StationsPage />
    },
    {
        path: "/stations",
        element: <StationsPage />
    },
    {
        path: "/stations/:stationId",
        element: <StationDetailPage />
    },
    {
        path: "*",
        element: <NotFoundPage />
    },
]);