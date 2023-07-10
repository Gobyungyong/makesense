import classes from './Card.module.css';
import Button from './Button';

function Question(props) {
    return (
        <div>
            <div className={classes.card_container}>
                <p className={classes.question_content}>
                    1. 당신은 어쩌구 저쩌구 저쩌구 어쩌구저쩌구 어쩌구저쩌구 어쩌구저쩌구 어쩌구
                </p>
            </div>
            <div className={classes.answer_button}>
            <Button>1번 선택지</Button>
            <Button>2번 선택지</Button>
            </div>
        </div>
    );
}

export default Question;