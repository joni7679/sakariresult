import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Result from "../components/Result/Result";
import AdmitCard from "../components/AdmitCard/AdmitCard";
import LatestJobs from "../components/LatestJobs/LatestJobs";
import Syllabus from "../components/Syllabus/Syllabus";
import AnsKey from "../components/Anskey/AnsKey";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: "/result",
        element: <Result />
    },
    {
        path: "/admitcard",
        element: <AdmitCard />
    },
    {
        path: "/latesjobs",
        element: <LatestJobs />
    },

    {
        path: "/syllabus",
        element: <Syllabus />
    },
    {
        path: "/anskey",
        element: <AnsKey />
    },



])