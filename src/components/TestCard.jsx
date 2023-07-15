import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './TestCard.module.css';
import Button from './Button';

function Card(props) {
    const [index,setIndex] = useState(0);
    const [result,setResult] = useState([]);
    const navigate = useNavigate();
    let MBTI =[];
    
    const content_list = [
        {
            question : '이름모를 씨앗에서 싹이 틔었다! 어떤 야채가 될까?',
            answer1: ['커봐야 알지..지금 뭐하러 생각함?! 어차피 알게 되는 걸 굳이?', 'S'],
            answer2: ['씨앗을 알 수 없다고?! 앞으로 나는 어떻게 될까? 무슨 색깔일까? 키가 얼마나 클까? 도중에 썩으면 어떡하지? 두더지가 와서 파헤치면 어떡하지?', 'N'],
        },
        {
            question : '함께 여행 가기로 한 옆 뿌리 감자가 여행일정을 어떻게 짤지 물어본다. 뭐라고하지?',
            answer1: ['내 생각엔 이날엔 여기 갔다가 저기도 가고 이거 먹고 저거 마시고…감자야 어때?~~~~', 'E'],
            answer2: ['음.. 생각해보고 이야기해줄게! (인⭐ 찾아봐야겠다!!)', 'I'],
        },
        {
            question : '어느 날 옆 고랑에 있던 고구마가 내 구역으로 침범했다면? 어떻게 할 꺼야?',
            answer1: ['어이 고구마 친구 여기는 내 구역인데..그럼 나도 넘어가도 괜츈?', 'S'],
            answer2: ['오호! 반가워!! 외로웠는데!!!! 우리 같이 붙어서 진화하면 어떻게 될까?!', 'N'],
        },
        {
            question : '친구한테 우울해서 잔뿌리 정리했다니까, 얼마주고 잘랐냐고 한다. 내 대답은?',
            answer1: ['씨앗 5개 줬어. 요즘 가격 많이 오르긴 했더라.', 'T'],
            answer2: ['.. 너 T야?', 'F'],
        },
        {
            question : '새 뿌리로 이사가려고 하는데 어디로 가지?',
            answer1: ['부동산으로 달려~거기서 맘에 드는 뿌리로 가자!!', 'P'],
            answer2: ['일단 주변 뿌리 시세랑 상권이랑 이것저것 알아봐야겠다.', 'J'],
        },
        {
            question : '성장 촉진제가 생겼다. 사용을 할까? 말까?',
            answer1: ['개이득! 남들보다 빨리 성장하자구!!', 'A'],
            answer2: ['빼에에엑!! 안써!! 내가 성장하는 모습을 보는게 얼마나 재밌는데?! 꽃이피고 열매가 열리는 것 좀 봐!  쏘 큐트>_<', 'T'],
        },
        {
            question : '감자와 여행 당일! 계획짜오기로 한 감자가 사실 계획 못짰다고 한다. 이 감자를 어떡하지..',
            answer1: ['가서 정하자!', 'P'],
            answer2: ['너무 짜증나!!! 내 머리에서 나는 스팀으로 이 감자를 쪄먹을 수 있을 것 같아.', 'J'],
        },
        {
            question : '비 오는 날 노각할아버지가 비를 맞으면서 무거운 줄기를 끌고 가고 계신다. 도와드릴까?',
            answer1: ['할아버지댁 바로 이 앞이니까 굳이 안도와드려도 괜찮을 것 같아.', 'T'],
            answer2: ['도와드리자. 할아버지 감기걸리시면 어떡해', 'F'],
        },
        {
            question : '토마토 오늘 점심은 자기가 좋아하는 A영양제를 먹자고 한다. 효과는 B영양제가 최곤데, 어떡할까',
            answer1: ['야 이게 찐이야! B영양제를 먹어야 맛있어져. B영양제 들이켜!', 'T'],
            answer2: ['내 베프! 토마토가 좋아하는 A영양제 먹어야지! 하고 싶은거  다 해~', 'F'],
        },
        {
            question : '오늘까지 줄기광택제가 세일이다. 조금 이따 가족들이랑 영양제 먹으러 가기로 했는데, 줄기광택제는 언제 살까?',
            answer1: ['영양제 주문하고 나오는데 시간있으니까 그때 해야겠다~', 'P'],
            answer2: ['가족들이랑 영양제 먹으러 가기 전에 미리 주문해놔야지!', 'J'],
        },
        {
            question : '3일 뒤에 열리는 B마트-야채 페스티벌 초대를  나만 받지 못 했다... 왜?',
            answer1: ['누락되었나? 그럼 뭐 내가 좋아하는 거 하고 놀아야지~', 'A'],
            answer2: ['내가 뭐 잘못했나? 나를 미워하나? 이유가 뭐야ㅜㅜ', 'T'],
        },
        {
            question : '설레는 새학기! 반에는 온통 모르는 채소들 천지에 침묵만이 감돈다. 어떡하지?',
            answer1: ['짝꿍 고구마야 안녕! 나는 박씨네 밭에 사는 둥근 감자야!', 'E'],
            answer2: ['어우 탈출하고 싶다..', 'I'],
        },
        {
            question : '오늘은 상추를 수확하고 배송을 보내는 날이다! 그런데 몸 상태가 메롱이고 날씨가 너무 더워 쓰러질 것 같은데 어떡하지?',
            answer1: ['약을 먹고 조금 쉬었다가 친구한테 전화해서 같이 저녁에 수확하러 가야겠다!', 'A'],
            answer2: ['내 몸이 튼튼해야 좋은 상추를 수확할 수 있지! 그리고 날씨가 너무 더우면 상추도 시들 수 있으나까 배송날짜를 다시 조율해보자!', 'T'],
        },
        {
            question : '꺄갹갹~~ 오랜만에 비가 내린다!! 목구멍을 적셔볼까?!',
            answer1: ['좋아!! 매 말랐다고!!! 일단 다마셔!!!!!!!적셔!!!!!!', 'S'],
            answer2: ['오랜만에 비가 오다니?! 언제 또 가뭄이 올지 모르니까 물주머니를 충분히 만들어보자!!', 'N'],
        },
        {
            question : '아 이번주도 일하느라 힘들었다~ 주말엔 뭐하지?', 
            answer1 : ['침대 밖은 위험해. 이번 주말은 이불 속에서 보내자.', 'I'],
            answer2 : ['신나는 주말! 친구들 만나러 나가야지~ 뭐 입고 나가지?', 'E'],
        },
    ];
    
    function viewResult() {console.log(result);} //test
    
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

        return MBTI;
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
            resultSetter();

            navigate(`/result/${MBTI}`,{replace:true});

        }
    }

    function viewPrevQuestionHandler() {                      // 이전 질문으로 가는 함수
        if( index > 0 && index <= 14){
            setIndex(prev => prev-1);
            setResult(prev => [...prev].splice(0,index-1));
        } else {
            alert('첫질문');
        }
    }

    return (
        <div className={classes.testcard_container}>
            <progress value={index+1} max={15} className={classes.progress_bar}></progress>
            <div className={classes.content_box}>
                <div className={classes.card_container}>{content_list[index].question}</div>
            </div>
            <div className={classes.answer_button}>
                <Button onclick={answerClickHandler}>
                    {content_list[index].answer1[0]}
                </Button>
                <Button onclick={answerClickHandler}>
                    {content_list[index].answer2[0]}
                </Button>
            </div>
                {index !== 0 ? // 이전 답변 수정 버튼 조건부 랜더링
                <button onClick={viewPrevQuestionHandler}>이전 답변 변경</button>
                :null}

                <button onClick={viewResult}>결과확인test</button>
        </div>
    );
}

export default Card;