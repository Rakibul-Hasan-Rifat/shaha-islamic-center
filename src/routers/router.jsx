import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register/Register";
import EventsPage from "../pages/EventsPage/EventsPage";
import MainLayout from "../layouts/MainLayout/MainLayout";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import TeamMembers from "../pages/TeamMembers/TeamMembers";

const router = new createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<MainLayout />}
            errorElement={<ErrorElement />}
        >
            <Route
                path="/"
                element={<Home />}
                loader={() => fetch('./data/events.json')}
            />
            <Route
                path="/events"
                element={<PrivateRoute><EventsPage /></PrivateRoute>}
                loader={() => fetch('/data/events.json')}
            />
            <Route
                path="/events/:id"
                element={<PrivateRoute><DetailsPage /></PrivateRoute>}
                loader={() => fetch('/data/events.json')}
            />
            <Route
                path="/team"                
                element={<PrivateRoute><TeamMembers /></PrivateRoute>}
                loader={() => fetch('/data/teamMembers.json')}
            />
            <Route
                path="/login"
                element={<Login />}
            />
            <Route
                path="/register"
                element={<Register />}
            />
        </Route>
    )
)

export default router