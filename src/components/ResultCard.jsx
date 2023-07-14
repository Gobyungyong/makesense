// import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import classes from './ResultCard.module.css'
import Button from './Button';


function ResultCard(props) {
           //카톡 공유하기
    const shareKakao = ()=>{
        window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: '몬나니 야채친구들',
            description: '나의 야채는 무엇?',
            imageUrl:
            'https://png.pngtree.com/png-clipart/20210129/ourlarge/pngtree-cute-anthropomorphic-fruits-vegetables-and-vegetables-png-image_2840786.jpg',
            link: {
            mobileWebUrl: 'http://localhost:3001/',
            webUrl: 'http://localhost:3001/',
            },
        },
    
        buttons: [
            {
            title: '야채쇼핑하러가자!',
            link: {
                mobileWebUrl: 'http://localhost:3001/',
                webUrl: 'http://localhost:3001/',
            },
            },
        ],
        });
    
    } ;
    // const url = useParams();
    const resultList = {
        ISFPA: '../img/grape.png',
        // ISFPT: '../img/grape.jpg',
        // ISFJA: '../img/cherry.jpg',
        // ISFJT: ,
        // ISTPA: ,
        // ISTPT:,
        // ISTJA:,
        // ISTJT:,
        // INFPA:,
        // INFPT:,
        // INFJA: ,
        // INFJT:,
        // INTPA:,
        // INTPT:,
        // INTJA:,
        // INTJT:,
        // ESFPA:,
        // ESFPT:,
        // ESFJA:,
        // ESFJT:,
        // ESTPA:,
        // ESTPT:,
        // ESTJA:,
        // ESTJT:,
        // ENFPA:,
        // ENFPT:,
        // ENFJA:,
        // ENFJT:,
        // ENTPA:,
        // ENTPT:,
        // ENTJA:,
        // ENTJT:,     
    };

    return (
        <div className={classes.startPageLayout}> 
            <h2>운명의 데스티니배지터블은 바로바로!</h2>
            <br/>
            <div className={classes.resultImg}><img src={resultList[props.mbti]}/></div>

            <div className={classes.snsBtn} onClick={() => shareKakao()}>
                <a id="kakaotalk-sharing-btn" href="javascript:;">
                <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
                    alt="카카오톡 공유 보내기 버튼" />
                </a>
            </div>
            <div>
                <Link to='/'><Button>한번 더 수확해볼까?</Button></Link></div>
           
        </div>
    );
}

export default ResultCard;