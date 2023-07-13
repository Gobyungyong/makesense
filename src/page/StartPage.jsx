import Layout from "../components/Layout";
import StartCard from "../components/StartCard";
import { useContext } from "react";

function StartPage(props) {
    // const result = useContext(resultContext);

    return (
        <Layout>
            <StartCard/>
        </Layout>
    );
}

export default StartPage;