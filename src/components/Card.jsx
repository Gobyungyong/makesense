import { useState } from 'react';

import classes from './Card.module.css';
import Button from './Button';




function Card(props) {
    const [index,setIndex] = useState(0);
    const [result,setResult] = useState();

    const question_list = [
        'question1',
        'question2',
        'question3',
        'question4',
        'question5',
        'question6',
        'question7',
        'question8',
        'question9',
        'question10',
        'question11',
        'question12',
        'question13',
        'question14',
        'question15',
    ];

    const answer_list = [
        {
            answer1: '가1',
            answer2: '나1'
        },
        {
            answer1: '가2',
            answer2: '나2'
        },
        {
            answer1: '가3',
            answer2: '나3'
        },
        {
            answer1: '가4',
            answer2: '나4'
        },
        {
            answer1: '가5',
            answer2: '나5'
        },
        {
            answer1: '가6',
            answer2: '나6'
        },
        {
            answer1: '가7',
            answer2: '나7'
        },
        {
            answer1: '가8',
            answer2: '나8'
        },
        {
            answer1: '가9',
            answer2: '나9'
        },
        {
            answer1: '가10',
            answer2: '나10'
        },
        {
            answer1: '가11',
            answer2: '나11'
        },
        {
            answer1: '가12',
            answer2: '나12'
        },
        {
            answer1: '가13',
            answer2: '나13'
        },
        {
            answer1: '가14',
            answer2: '나14'
        },
        {
            answer1: '가15',
            answer2: '나15'
        },
    ];


    const [question,setQuestion] = useState(question_list[index]);
    
    function clickHandler() {
        if (index <= 14) {
            setIndex(prev => prev + 1)
            setQuestion(question_list[index]);
        } else {
            alert('결과페이지 출력');
        }
    }

    return (
        <div>
            <progress value={index+1} max={15}></progress>
            <div className={classes.card_container}>
                <p className={classes.question_content}>
                    {question}
                </p>
            </div>
            <div className={classes.answer_button}>
            <Button onclick={clickHandler}>{answer_list[index].answer1}</Button>
            <Button onclick={clickHandler}>{answer_list[index].answer2}</Button>
            </div>
        </div>
    );
}

export default Card;