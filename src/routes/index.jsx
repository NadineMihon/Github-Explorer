import { MainPage } from "../pages/main";
import { UserPage } from "../pages/userPage";
import { RepoPage } from "../pages/repoPage";
import { createBrowserRouter } from "react-router-dom";


export const routesConfig = [
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/user/:username',
        element: <UserPage />
    },
    {
        path: '/repo/:owner/:repo',
        element: <RepoPage />
    }
];

export const appRouter = createBrowserRouter(routesConfig);