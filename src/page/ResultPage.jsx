import { useParams } from "react-router-dom";

import ResultCard from "../components/ResultCard";
import Layout from "../components/Layout";

function ResultPage(props) {
    const url = useParams();
    // console.log(url);
    return (
        <Layout>
            <ResultCard mbti={url.mbti} />
        </Layout>
    );
}

export default ResultPage;