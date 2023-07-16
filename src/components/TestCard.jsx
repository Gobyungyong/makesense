import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import classes from './TestCard.module.css';

function Card(props) {
    const [index,setIndex] = useState(0);
    const [result,setResult] = useState([]);
    const [isPost,setIsPost] = useState(false);
    const navigate = useNavigate();
    let MBTI =[];
    
    const content_list = [
        {
            question : '이름 모를 씨앗에서 싹이 틔었다! 어떤 야채가 될까?',
            answer1: ['커봐야 알지 지금 뭐하러 생각함?!', 'S'],
            answer2: ['키가 얼마나 클까? 잡초는 아니겠지?', 'N'],
        },
        {
            question : '관광 명소인 개미 왕국을 방문한 감자 형제들. 검색한 것과는 달리 성문이 굳게 닫혀 있다. 어떻게 하지?',
            answer1: ['물어보는 게 제일 빠르지! 일개미 병정을 불러 본다.', 'E'],
            answer2: ['인터넷으로 먼저 검색해보고 안 나오면 물어봐야지!', 'I'],
        },
        {
            question : '어느 날 옆 고랑 고구마가 내 구역까지 넘어왔다면?',
            answer1: ['어이 고구마 친구 여기는 내 구역인데...지킬 건 지키고 살자!', 'I'],
            answer2: ['고구마 친구 기왕 온 거 차 한 잔 하고 가!!', 'E'],
        },
        {
            question : '호박 친구가 농부 아저씨에게 잎을 밟혔다고 하소연을 한다. 내 반응은?',
            answer1: ['아 진짜? 나도 그랬어..', 'T'],
            answer2: ['아니 그러니까!! 농부 아저씨 미친 거 아니냐고!', 'F'],
        },
        {
            question : '새 뿌리로 이사가려고 하는데 어디로 가지?',
            answer1: ['일단 부동산 가면 뭐든 되겠지!', 'P'],
            answer2: ['우선 팜튜브로 주변 뿌리 시세부터 알아보고 이웃들 이사 경험담도 들어봐야겠다.', 'J'],
        },
        {
            question : '성장 촉진제가 생겼다. 사용을 할까? 말까?',
            answer1: ['개이득! 남들보다 빨리 성장할테야!!', 'A'],
            answer2: ['굳이? ...부작용 없는 거 확실해?', 'T'],
        },
        {
            question : '고구마 친구랑 4박 5일 여행을 가기로 했다. 조식을 포함할까 말까?',
            answer1: ['내가 언제 일어날지 모르는 걸? 나가서 사먹지 뭐 미포함!', 'P'],
            answer2: ['주변에 먹을 데도 없고 아침은 조식이 효율적이지. 포함!', 'J'],
        },
        {
            question : '비 오는 날 노각할아버지가 비를 맞으면서 무거운 줄기를 끌고 가고 계신다. 도와드릴까?',
            answer1: ['할아버지댁 바로 이 앞이니까 굳이 안도와드려도 괜찮을 것 같아.', 'T'],
            answer2: ['도와드리자. 할아버지 감기 걸리시면 어떡해', 'F'],
        },
        {
            question : '토마토 오늘 점심은 A영양제를 먹자고 한다. 효과는 B영양제가 최곤데, 어떡할까',
            answer1: ['야 이게 찐이야! B영양제를 먹어야 맛있어져. B영양제 들이켜!', 'T'],
            answer2: ['내 베프! 토마토가 좋아한다니까 A영양제 먹어야지!', 'F'],
        },
        {
            question : '오늘까지 줄기광택제가 세일이다. 조금 이따 가족들이랑 영양제 먹으러 가기로 했는데, 줄기광택제는 언제 살까?',
            answer1: ['영양제 주문하고 나오는데 시간있으니까 그때 해야겠다!', 'P'],
            answer2: ['언제 돌아올지 모르니까 나가기 전에 미리 주문해놔야지!', 'J'],
        },
        {
            question : '3일 뒤에 열리는 B마트-야채 페스티벌 초대를 나만 받지 못 했다.',
            answer1: ['누락되었나? 그럴 수도 있지', 'A'],
            answer2: ['나만? 대체 왜?? 이유가 뭐야ㅜㅜ', 'T'],
        },
        {
            question : '설레는 새학기! 반에는 온통 모르는 채소들 천지에 침묵만이 감돈다. 어떡하지?',
            answer1: ['짝꿍 고구마야 안녕! 나는 박씨네 밭에 사는 둥근 감자야!', 'E'],
            answer2: ['어우 탈출하고 싶다..', 'I'],
        },
        {
            question : '오늘은 상추를 수확하는 날! 그런데 날씨가 너무 더워 쓰러질 것 같은데 어떡하지?',
            answer1: ['조금 쉬었다가 친구한테 전화해서 같이 저녁에 수확하러 가야겠다!', 'A'],
            answer2: ['날씨가 너무 더우면 상추도 시들 수 있으니 날짜를 다시 조율해보자!', 'T'],
        },
        {
            question : '꺄악~!! 오랜만에 비가 내린다!! 목구멍을 적셔볼까?!',
            answer1: ['좋아!! 메말랐다고!!! 일단 마시고 보자!!!!', 'S'],
            answer2: ['만약 내가 빗물을 모아서 나중에 팔면? 그럼 난 돈방석에 앉겠지?', 'N'],
        },
        {
            question : '새에게 쪼아 먹힌 적 있는 배추 가족. 올해는 어떻게 살아남을까?', 
            answer1 : ['주섬주섬 생존 키트를 배낭에 쓸어 담는다.', 'N'],
            answer2 : ['그걸 어떻게 피해? 그냥 죽는 거지.', 'S'],
        },
    ];
        
    function resultSetter(){
        let iScore = 0;
        let nScore = 0;
        let fScore = 0;
        let jScore = 0;
        let aScore = 0;
        
        for (let i in result) {
            if (result[i].mbti === 'I') {
                iScore ++;
            }
            if (result[i].mbti === 'N') {
                nScore ++;
            }
            if (result[i].mbti === 'F') {
                fScore ++;
            }
            if (result[i].mbti === 'J') {
                jScore ++;
            }
            if (result[i].mbti === 'A') {
                aScore ++;
            }
        }
        
        iScore >= 2 ? MBTI.push('I') : MBTI.push('E');
        nScore >= 2 ? MBTI.push('N') : MBTI.push('S');
        fScore >= 2 ? MBTI.push('F') : MBTI.push('T');
        jScore >= 2 ? MBTI.push('J') : MBTI.push('P');
        aScore >= 2 ? MBTI.push('A') : MBTI.push('T');
        
        MBTI = MBTI.join('');
        
        setResult(prev => [...prev,{'result' : MBTI}]);
        setIsPost(prev => !prev)
    }
    
    function answerClickHandler(e) {                        // 답변 클릭 시
        if (index < 14) {                                  // 다음 질문 있으면 다음질문 렌더링
            
            if(e.target.textContent === content_list[index].answer1[0]) {                       
                setResult(
                    prev => [...prev,{mbti : content_list[index].answer1[1], answer : e.target.textContent}]
                    );
                } else {
                    setResult(
                    prev => [...prev,{mbti : content_list[index].answer2[1], answer : e.target.textContent}]
                );
            }
            setIndex(prev => prev + 1);
            
        } else {                                           // 마지막 질문이면 결과 페이지로 이동
            if(e.target.textContent === content_list[index].answer1[0]) {                       
            setResult(
                prev => [...prev,{mbti : content_list[index].answer1[1], answer : e.target.textContent}]
                );
            } else {
                setResult(
                    prev => [...prev,{mbti : content_list[index].answer2[1], answer : e.target.textContent}]
                    );
            }
                
            resultSetter()            
        }
    }
    
    function viewPrevQuestionHandler() {                      // 이전 질문으로 가는 함수
        if( index > 0 && index <= 14){
            setIndex(prev => prev-1);
            setResult(prev => [...prev].splice(0,index-1));
        }
    }

    useEffect(()=>{  // setResult 비동기적으로 작동해서 결과페이지 이동 useEffect로 사용
        if(isPost){
            const garim = []
            const ryoona = []
            
            for(let i in result){
                garim.push(result[i]['mbti'])
            }
            
            for(let i in result){
                ryoona.push(result[i]['answer'])
            }
            
            const post_result = {
                result : result[15]['result'],
                mbti : garim.join(),
                answer : ryoona.join()
            };
            
            console.log(post_result);
            
            axios.post(
                'http://localhost:8000/api/v1/result/',
                post_result,
                {
                    headers: {
                        "Content-Type": `application/json`,
                    },
                }   
                )
                .then((res)=>{console.log(res);});
                navigate(`/result/${result[15]['result']}`,{replace:true});            
            }
        },[isPost])
        
    return (
        <div className={classes.testcard_container}>
            <progress value={index+1} max={15} className={classes.progress_bar}></progress>
            <div className={classes.content_box}>
                <div className={classes.card_container}>{content_list[index].question}</div>
            </div>
            <div className={classes.answer_button_container}>
                <button className={classes.answer_btn} onClick={answerClickHandler}>
                    {content_list[index].answer1[0]}
                </button>
                <button className={classes.answer_btn} onClick={answerClickHandler}>
                    {content_list[index].answer2[0]}
                </button>
            </div>
                {index !== 0 ? // 이전 답변 수정 버튼 조건부 랜더링
                <button className={classes.prev_btn} onClick={viewPrevQuestionHandler}>이전 답변 변경</button>
                :null}
        </div>
    );
}

export default Card;