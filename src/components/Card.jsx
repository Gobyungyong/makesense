import { useState } from 'react';

import classes from './Card.module.css';
import Button from './Button';




function Card(props) {
    const [index,setIndex] = useState(0);
    const [result,setResult] = useState([]);
    
    const content_list = [
        {
            question : 1, 
            answer1 : ['가1', 'E'],
            answer2 : ['나1', 'I'],
        },
        {
            question : 2,
            answer1: ['가2', 'E'],
            answer2: ['나2', 'I'],
        },
        {
            question : 3,
            answer1: ['가3', 'E'],
            answer2: ['나3', 'I'],
        },
        {
            question : 4,
            answer1: ['가4', 'S'],
            answer2: ['나5', 'N'],
        },
        {
            question : 5,
            answer1: ['가5', 'S'],
            answer2: ['나5', 'N'],
        },
        {
            question : 6,
            answer1: ['가6', 'S'],
            answer2: ['나6', 'N'],
        },
        {
            question : 7,
            answer1: ['가7', 'T'],
            answer2: ['나7', 'F'],
        },
        {
            question : 8,
            answer1: ['가8', 'T'],
            answer2: ['나8', 'F'],
        },
        {
            question : 9,
            answer1: ['가9', 'T'],
            answer2: ['나9', 'F'],
        },
        {
            question : 10,
            answer1: ['가10', 'P'],
            answer2: ['나10', 'J'],
        },
        {
            question : 11,
            answer1: ['가11', 'P'],
            answer2: ['나11', 'J'],
        },
        {
            question : 12,
            answer1: ['가12', 'P'],
            answer2: ['나12', 'J'],
        },
        {
            question : 13,
            answer1: ['가13', 'A'],
            answer2: ['나13', 'T'],
        },
        {
            question : 14,
            answer1: ['가14', 'A'],
            answer2: ['나14', 'T'],
        },
        {
            question : 15,
            answer1: ['가15', 'A'],
            answer2: ['나15', 'T'],
        },
    ];

    function viewResult() {console.log(result);} //test
    
    function resultSetter(){
        let iScore = 0;
        let nScore = 0;
        let fScore = 0;
        let jScore = 0;
        let aScore = 0;
        const MBTI = []

        for (let i in result) {
            if (result[i] === 'I') {
                iScore ++;
            }
            if (result[i] === 'N') {
                nScore ++;
            }
            if (result[i] === 'F') {
                fScore ++;
            }
            if (result[i] === 'J') {
                jScore ++;
            }
            if (result[i] === 'A') {
                aScore ++;
            }
        }

        if (iScore >= 2) {
            MBTI.push('I')
        } else {
            MBTI.push('E')
        }

        if (nScore >= 2) {
            MBTI.push('N')
        } else {
            MBTI.push('S')
        }

        if (fScore >= 2) {
            MBTI.push('F')
        } else {
            MBTI.push('T')
        }

        if (jScore >= 2) {
            MBTI.push('J')
        } else {
            MBTI.push('P')
        }

        if (aScore >= 2) {
            MBTI.push('A')
        } else {
            MBTI.push('T')
        }

        console.log('당신의 MBTI',MBTI)

        return MBTI;
    }

    function answerClickHandler(e) {                        // 답변 클릭 시
        if (index < 14) {                                  // 다음 질문 있으면 다음질문 렌더링
            setIndex(prev => prev + 1);                      
            setResult(prev => [...prev,e.target.children[0].textContent]);
        } else {                                           // 마지막 질문이면 결과 페이지로 이동
            setResult(prev => [...prev,e.target.children[0].textContent]);
            resultSetter()
            alert('');
        }
        console.log(result)
    }

    function viewPrevQuestionHandler() {                      // 이전 질문으로 가는 함수
        if( index > 0 && index <= 14){
            setIndex(prev => prev-1);
            setResult(prev => [...prev].splice(0,index-1))
        } else {
            alert('첫질문')
        }
    }
    
    function viewNextQuestionHandler() {                      // 다음 질문으로 가는 함수
        if( index < 14){
            setIndex(prev => prev + 1);
        } else {
            alert('마지막질문');
        }
    }

    return (
        <div>
            <progress value={index+1} max={15} className={classes.progress_bar}></progress>
            <div className={classes.content_box}>
                <button className={classes.left_arrow} onClick={viewPrevQuestionHandler}>⇦</button>
                <div className={classes.card_container}>{content_list[index].question}</div>
                <button className={classes.right_arrow} onClick={viewResult}>⇨</button>
            </div>
            <div className={classes.answer_button}>
                <Button onclick={answerClickHandler}>
                    {content_list[index].answer1[0]}
                    <div hidden>{content_list[index].answer1[1]}</div>
                </Button>
                <Button onclick={answerClickHandler}>
                    {content_list[index].answer2[0]}
                    <div hidden>{content_list[index].answer2[1]}</div>
                </Button>
            </div>
        </div>
    );
}

export default Card;