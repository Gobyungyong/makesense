import { Link } from 'react-router-dom';
import classes from './StartCard.module.css'
import Button from './Button';

function StartCard(props) {
    return (
        <div className={classes.startPageLayout}>
            <div className={classes.test_tilte}><Link to='/monnani/dashboard/' style={{textDecoration: "none"}}>울룩불룩</Link></div>
            <div className={classes.test_tilte1}> 울퉁불퉁</div> 
            <div className={classes.test_tilte2}>뾰쪽길쭉</div> 
            <div className={classes.test_tilte3}>야채 친구들!</div>
            <div className={classes.test_tilte4}>나는 무슨 야채일까?</div>
            {/* <div>나는 무슨 야채일까?</div> */}
            <div className={classes.mainImg}>
                <img className={classes.backImg} src ={process.env.PUBLIC_URL + '/img/vegetable_blue.png'}></img>
            </div>
            <div className={classes.startBtn}>
                <Link to='/test'><Button>시작하기</Button></Link>
            </div>
      </div>
    );
}

export default StartCard;                                        