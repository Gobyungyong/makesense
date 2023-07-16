import { useEffect, useState } from "react";

import axios from "axios";
import classes from './DashBoard.module.css';

function DashBoard(props) {
    const [total,setTotal] = useState();
    const [facebookShared,setFacebookShared] = useState();
    const [kakaoShared,setKakaoShared] = useState();
    const [linkcopy,setLinkcopy] = useState();
    const [ranking,setRanking] = useState();
    const [answers,setAnswers] = useState();
    let ranking_list = []
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/share/')
        .then((res)=>{
            setTotal(res.data.total_share)
            setFacebookShared(res.data.shared_form.instagram)
            setKakaoShared(res.data.shared_form.kakaotalk)
            setLinkcopy(res.data.shared_form.linkCopy)
        });
        
        axios.get('http://localhost:8000/api/v1/result/top_MBTI/')
        .then((res) => {
            setRanking(res.data)
        });
        
        axios.get('http://localhost:8000/api/v1/result/selected_answers/')
        .then((res) => {
            setAnswers(res.data);
        });
    }
    ,[]);
    
    for(let i in ranking) {
        ranking_list.push([i,ranking[i]])
        console.log('answers : ',answers)
    }

    return (
        <div>
            <div className={classes.dash_header}>
                <h1>monnani</h1>
            </div>
            <div className={classes.dash_container}>
                <div className={classes.dash_left}>
                    <div className={classes.total_tester}>
                        <p>전체 테스터 수 : </p>
                    </div>
                    <div className={classes.shared_form}>
                        <div>전체 공유 수 : {total}</div>
                        <div>카카오톡으로 공유된 횟수: {kakaoShared}</div>
                        <div>페이스북으로 공유된 횟수 : {facebookShared}</div>
                        <div>링크 복사로 공유된 횟수 : {linkcopy}</div>
                    </div>
                    <div className={classes.answer_count}>
                        선택 답변 수
                        {/* <ul>
                            {answers.map((answer, index) => 
                                <li key={index}>{answer[0]} : {answer[1]}</li>
                            )}
                        </ul>    */}
                    </div>
                </div>
                <div className={classes.dash_right}>
                    <div className={classes.ranking_title}>MBTI Ranking</div>
                    <ul>
                    {ranking_list.map((ranking, index) => 
                        <li key={index}>{ranking[0]} : {ranking[1]}</li>
                    )}
                    </ul>                   
                </div>
            </div>
        </div>
    );
}

export default DashBoard;