// import { useParams } from "react-router-dom";

function ResultCard(props) {
    // const url = useParams();
    
   
    const resultList = {
        INFJT : "고병용",
        ISFPA : "고병용",
        
    }

    return (
        <div>
            <img src={resultList[props.mbti]}/>
        </div>
    );
}

export default ResultCard;