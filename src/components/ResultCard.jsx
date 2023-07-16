// import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import classes from './ResultCard.module.css'
import Button from './Button';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon} from "react-share";
import { CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';

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

    
    const resultList = {
        ISFPA: {
            vegetable : '파파파 파슬리',
            content: '나는 여기저기 다양한 요리에 쓰이지~순딩이',
            nickname: '순딩이',
        },
        ISFPT:{
            vegetable : '콩! 콩! 콩! 콩나물',
            content: '',
            nickname: '평화주의자',
        },
        ISFJA: {
            vegetable : '쌈박한 상추',
            content: '',
            nickname: '살림꾼',
        },
        ISFJT: {
            vegetable : '딸기',
            content: '몸에 붙은 씨 떼다가 홧병올듯^^',
            nickname: '출첵왕',
        },
        ISTPA:{
            vegetable : '나 좋아하니?! 당근~',
            content: '현실적이고 상황에 따른 적응하는 폼 미쳤다!',
            nickname: '혼자서도 척척박사!',
        },
        ISTPT:{
            vegetable : '한라봉아니고 천혜향',
            content: '논리적인 방식으로 나의 기량을 뽐내는 일 No.1',
            nickname: '개인주의',
        },
        ISTJA:{
            vegetable : '멋쟁이 토마토',
            content: '작은 일에도 집착하지 않고 정확한 일처리! 실수 절대 용납 못 해!',
            nickname: '범생이',
        },
        ISTJT:{
            vegetable : '감쟈 감쟈 왕감자',
            content: '일 중독자!! 나를 반으로 쪼개도 싹이 나는 나라구!',
            nickname: '경주마',
        },
        INFPA:{
            vegetable : '나리나리 미나리',
            content: '뿌에엥 울보',
        },
        INFPT:{
            vegetable : '꼬부랑 고사리',
            content: '창의성, 예술적 관심이 많은 나',
            nickname: '두부 멘탈',
        },
        INFJA: {
            vegetable : '아스파라거스',
            content: '목적 없는 행동은 하지 않는다구!',
            nickname: '대통령',
        },
        INFJT:{
            vegetable : '꽃을 피우고 싶은 브로콜리',
            content: '독립심이 뛰어난 나! 동료애를 중요시하지!',
            nickname: '어린왕자',
        },
        INTPA: {
            vegetable : '쪽파 말고 대파',
            content: '분석적이고 비판적이며 다야한 분야에 관심이 많지',
            nickname: '아이디어 샘물',
        },
        INTPT: {
            vegetable : '아삭! 오이',
            content: '관심붐야에 대한 방언터지니 조심해!',
            nickname: '코난 남도일',
        },
        INTJA: {
            vegetable : '쮀리~ 체리',
            content: '왕고집쟁이지만 목적달성하기 위한거라구!',
            nickname: '천재 OR 바보',
        },
        INTJT: {
            vegetable : '대롱대롱 포도',
            content: '감정표현보다 추론과 논리적 판단이 뛰어나지! ',
            nickname: '책벌레',
        },
        ESFPA: {
            vegetable : '깻잎',
            content: '사람을 미워하지 못하는 나!',
            nickname: '마당발',
        },
        ESFPT:{
            vegetable : '파프리카',
            content: '친절, 수용, 현실적이라 어떤 상황에서도 잘 타협하여 손해보는 장사를 하지!',
            nickname: '노세노세~ 젊어서 노세 ',
        },
        ESFJA: {
            vegetable : '둥이 완두콩',
            content: '타인과의 관계에서 에너지가 터친다! 갈등 싫어! 사회적 질서 최고!',
            nickname: '오지라퍼',
        },
        ESFJT: {
            vegetable : '씁하~ 마늘',
            content: '남을 배려하면서도 결단력 발휘! 비위 맞추기가 거의 강호동!',
            nickname: '계모임 총무',
        },
        ESTPA:{
            vegetable : '사이다 필수 고구마',
            content: '폼생폼사로 삶을 충분히 즐기자!, 톰과 제리에서 제리정도?!', 
            nickname: '호인호걸형',
        },
        ESTPT: {
            vegetable : '들숨에 후추!  날숨에 에이취~! 후추',
            content: '유머감각은 베이스, 임기응변으로 문제해결 쌉가능',
            nickname: '겁 없는 해결사',
        },
        ESTJA: {
            vegetable : '강냉이 조심! 옥수수',
            content: '추진력 강하여 목적달성하려는 의지 중요! 게으름뱅이가 뭐야?!',
            nickname: '행동대장',
        },
        ESTJT: {
            vegetable : '눈물 찔끔 양파',
            content: '솔직하며 직설적! 양보 절대 없다!! ',
            nickname: '팩트 폭격기',
        },
        ENFPA: {
            vegetable : '아무생각 없이 먹다가 생강!!!',
            content: '사람과 사람사이의 미묘한 기를 잘 읽으며 자만추! 다방면에서 다재다능~',
            nickname: '취미부자',
        },
        ENFPT: {
            vegetable : '짱구가 싫어하는 피망',
            content: '남들이 모르는 나만의 비전과 독보적인 카리스마 보유',
            nickname: '자유로운 영혼',
        },
        ENFJA: {
            vegetable : '노장의 힘! 노각',
            content: '부드러운 카리스마 보유, 언변이 뛰어나며 타인의 성장에 관심폭팔',
            nickname: '교장선생님',
        },
        ENFJT: {
            vegetable : '온몸에 힘이 불끈💪산삼',
            content: '사랑받기 원하며 너그럽고 온화하여 타인을 편안하게 해주는 침대st. ',
            nickname: '',
        },
        ENTPA: {
            vegetable : '',
            content: '',
            nickname: '',
        },
        ENTPT: {
            vegetable : '',
            content: '',
            nickname: '',
        },
        ENTJA: {
            vegetable : '',
            content: '',
            nickname: '',
        },
        ENTJT:{
            vegetable : '',
            content: '',
            nickname: '',
        },     
    };

    console.log(`'../src/img/${props.mbti}.jpg'`);

    // axios.post('url',{
    //     form_name: 'Facebook', 
    // });

    return (
        <div className={classes.startPageLayout}>
            <div className={classes.result_content}> 
                <h2>운명의 데스티니배지터블은 바로바로!</h2>
                <div className={classes.resultImg}><img src={process.env.PUBLIC_URL + `/img/${props.mbti}.PNG`}/></div>
                <div>{resultList[props.mbti].vegetable}</div>
                <div>{resultList[props.mbti].content}</div>
                <div>{resultList[props.mbti].nickname}</div>
            </div>
            <div className={classes.market_content}>
                <h3>못난이 농작물에 대해 알고계신가요?</h3>
                <div>겉보기엔 못생겼지만 맛은 예쁜 못난이 농작물에 대해 얼마나 알고 계신가요?</div>
                <div>단지 생긴게 이상하다는 이유로 폐기되는 농작물이 연간 13억톤에 달한다고 합니다.</div>
                <div>높은 품질과 착한 가격을 가진 못난이 농작물을 통해</div>
                <div>환경도 지키고 가치있는 소비를 해보세요!</div>
                <button><a href="https://uglyus.co.kr/ustore">못난이농산물 구경가기</a></button>
            </div>
            <div className={classes.snsShareBtn}>
                <div className={classes.snsBtn} onClick={() => shareKakao()}>
                    <a id="kakaotalk-sharing-btn" href="javascript:;">
                    <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
                        alt="카카오톡 공유 보내기 버튼" />
                    </a>
                </div>
                <div>
                    <FacebookShareButton className={classes.snsBtn} url={`http://localhost:3001/result/${props.mbti}`}><FacebookIcon size={32} round={true} /></FacebookShareButton> 
                </div>
                <div>
                    <TwitterShareButton className={classes.snsBtn} url={`http://localhost:3001/result/${props.mbti}`}><TwitterIcon size={32} round={true} /></TwitterShareButton> 
                </div>
                <CopyToClipboard className={classes.snsBtn} text={`http://localhost:3001/result/${props.mbti}`}>
                    <button onClick={()=>{
                        alert('복사완료!')
                    }}>URL</button>
                </CopyToClipboard>
            </div>
            <div>
                <Link to='/'><Button>한번 더 수확해볼까?</Button></Link>
            </div>
           
        </div>
    );
}

export default ResultCard;