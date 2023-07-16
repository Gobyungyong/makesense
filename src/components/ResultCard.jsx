// import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import classes from './ResultCard.module.css'
import Button from './Button';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon} from "react-share";
import { CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ResultCard(props) {
           //카톡 공유하기
    const shareKakao = ()=>{
        window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: '몬나니 야채친구들',
            description: '나의 야채는 무엇?',
            imageUrl:
            'https://media.discordapp.net/attachments/1114074269534670898/1130022633619062854/IMG_1698.PNG?width=506&height=675',
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

        
        axios.post('http://localhost:8000/api/v1/share/',{
            form_name: 'kakaotalk', 
        });
        
    
    } ;

    
    const resultList = {
        ISFPA: {
            vegetable : '파파파 파슬리',
            content: '조용한 관종, 나무늘보에 양보왕',
            nickname: '나는야 순딩이',
        },
        ISFPT:{
            vegetable : '콩! 콩! 콩나물',
            content: '불평불만 쌓아두기 잘함, 주변 분위기에 휩쓸림',
            nickname: '나는야 평화주의자',
        },
        ISFJA: {
            vegetable : '쌈박한 상추',
            content: '남 눈치보면서 챙겨주기 좋아해',
            nickname: '나는야 살림꾼',
        },
        ISFJT: {
            vegetable : '딸기',
            content: '본인 성격도 오락가락해서 모름, 게으르지만 완벽',
            nickname: '나는야 출첵왕',
        },
        ISTPA:{
            vegetable : '나 좋아하니?! 당근~',
            content: '현실적이고 상황에 따른 적응하는 폼 미쳤다!',
            nickname: '나는야 혼자서도 척척박사',
        },
        ISTPT:{
            vegetable : '한라봉아니고 천혜향',
            content: '논리적인 방식으로 나의 기량을 뽐내는 일 No.1',
            nickname: '나는야 개인주의',
        },
        ISTJA:{
            vegetable : '멋쟁이 토마토',
            content: '작은 일에도 집착하지 않고 정확한 일처리! 실수 절대 용납 못 해!',
            nickname: '나는야 범생이',
        },
        ISTJT:{
            vegetable : '감쟈 감쟈 왕감자',
            content: '방해받는거 싫어하며 일 중독자!! 나를 반으로 쪼개도 싹이 나는 나라구!',
            nickname: '나는야 경주마',
        },
        INFPA:{
            vegetable : '나리나리 미나리',
            content: '잡생각에 갇혀 사는중, 낯가림 쩌러',
            nickname: '나는야 뿌에엥 울보',
        },
        INFPT:{
            vegetable : '꼬부랑 고사리',
            content: '마음이 따듯하나 화날때 건들면 큰일남',
            nickname: '나는야 두부 멘탈',
        },
        INFJA: {
            vegetable : '아스파라거스',
            content: '목적 없는 행동은 하지 않는다구!',
            nickname: '나는야 대통령',
        },
        INFJT:{
            vegetable : '꽃을 피우고 싶은 브로콜리',
            content: '독립심이 뛰어난 나! 동료애를 중요시하지!',
            nickname: '나는야 어린왕자',
        },
        INTPA: {
            vegetable : '쪽파 말고 대파',
            content: '분석적이고 비판적이며 다야한 분야에 관심이 많지',
            nickname: '나는야 아이디어 뱅크',
        },
        INTPT: {
            vegetable : '아삭! 오이',
            content: '관심붐야에 대한 방언터지니 조심해!',
            nickname: '나는야 코난 남도일',
        },
        INTJA: {
            vegetable : '쮀리~ 체리',
            content: '왕고집쟁이지만 목적달성하기 위한거라구!',
            nickname: '나는야 천재 OR 바보',
        },
        INTJT: {
            vegetable : '대롱대롱 포도',
            content: '감정표현보다 추론과 논리적 판단이 뛰어나지! ',
            nickname: '나는야 책벌레',
        },
        ESFPA: {
            vegetable : '깻잎',
            content: '사람을 미워하지 못하는 나!',
            nickname: '나는야 마당발',
        },
        ESFPT:{
            vegetable : '파프리카',
            content: '친절, 수용, 현실적이라 어떤 상황에서도 잘 타협하여 손해보는 장사를 하지!',
            nickname: '나는야 노세노세~ 젊어서 노세',
        },
        ESFJA: {
            vegetable : '둥이 완두콩',
            content: '타인과의 관계에서 에너지가 터친다! 갈등 싫어! 사회적 질서 최고!',
            nickname: '나는야 오지라퍼',
        },
        ESFJT: {
            vegetable : '씁하~ 마늘',
            content: '남을 배려하면서도 결단력 발휘! 비위 맞추기가 거의 강호동!',
            nickname: '나는야 계모임 총무',
        },
        ESTPA:{
            vegetable : '사이다 필수 고구마',
            content: '폼생폼사로 삶을 충분히 즐기자!, 톰과 제리에서 제리정도?!', 
            nickname: '나는야 호인호걸형',
        },
        ESTPT: {
            vegetable : '들숨에 후추!  날숨에 에이취~! 후추',
            content: '유머감각은 베이스, 임기응변으로 문제해결 쌉가능',
            nickname: '나는야 겁 없는 해결사',
        },
        ESTJA: {
            vegetable : '강냉이 조심! 옥수수',
            content: '추진력 강하여 목적달성하려는 의지 중요! 게으름뱅이가 뭐야?!',
            nickname: '나는야 행동대장',
        },
        ESTJT: {
            vegetable : '눈물 찔끔 양파',
            content: '솔직하며 직설적! 양보 절대 없다!! ',
            nickname: '나는야 팩트 폭격기',
        },
        ENFPA: {
            vegetable : '아무생각 없이 먹다가 생강!!!',
            content: '사람과 사람사이의 미묘한 기를 잘 읽으며 자만추! 다방면에서 다재다능~',
            nickname: '나는야 취미부자',
        },
        ENFPT: {
            vegetable : '짱구가 싫어하는 피망',
            content: '남들이 모르는 나만의 비전과 독보적인 카리스마 보유',
            nickname: '나는야 자유로운 영혼',
        },
        ENFJA: {
            vegetable : '노장의 힘! 노각',
            content: '부드러운 카리스마 보유, 언변이 뛰어나며 타인의 성장에 관심폭팔',
            nickname: '나는야 교장선생님',
        },
        ENFJT: {
            vegetable : '온몸에 힘이 불끈💪산삼',
            content: '사랑받기 원하며 너그럽고 온화하여 타인을 편안하게 해주는 침대st.',
            nickname: '나는야 ',
        },
        ENTPA: {
            vegetable : '고추 먹고 맴맴!',
            content: '고집이 세며 인내심이 짧으며 타인의 간섭을 싫어한다구! 일 중독이며 아군 적군 골고루 많다.',
            nickname: '나는야 독고다이',
        },
        ENTPT: {
            vegetable : '상쾌함의 대명사, 페퍼민트!',
            content: '모험심이 강하고 미래를 대비하고 무엇이든 추진하려한다구.',
            nickname: '나는야 고정관념 파괴자',
        },
        ENTJA: {
            vegetable : '노을을 품은 늙은 호박!',
            content: '높은 야망이 있고 방해가 되면 제거(쓱싹!)하며 자신의 경험을 중요시하며 자유를 원해~',
            nickname: '나는야 학회장'
        },
        ENTJT:{
            vegetable : '열쩡열쩡열쩡!! 발그레  사과',
            content: '냉정하게 판단하며, 탁월한 논리적인 사고 보유하여 추진력과 리더십 끝판왕',
            nickname: '나는야 이순신 장군'
        },     
    };

    return (
        <div className={classes.startPageLayout}>
            <div className={classes.result_content}> 
                <h2>운명의 몬나니 야채는?!?! 바로바로!!!</h2>

                <div className={classes.resultHead}>{resultList[props.mbti].vegetable}</div>
                <div className={classes.resultImg}><img src={process.env.PUBLIC_URL + `/img/${props.mbti}.PNG`}/></div>
                <div className={classes.resultContent}>{resultList[props.mbti].content}</div>
                <div className={classes.resultNickname}>{resultList[props.mbti].nickname}</div>
            </div>
            <div className={classes.market_content}>
                <h3>못난이 농작물에 대해 알고계신가요?🧐</h3>
                <div>겉보기엔 못생겼지만 맛은 예쁜 못난이 농작물에 대해 얼마나 알고 계신가요?</div>
                <div>단지 생긴게 이상하다는 이유로 폐기되는 농작물이 연간 13억톤에 달한다고 합니다.</div>
                <div>높은 품질과 착한 가격을 가진 못난이 농작물을 통해</div>
                <div>환경도 지키고 가치있는 소비를 해보세요!</div>
                <button className={classes.uglyBtn} onClick={()=>{
                            axios.post('http://localhost:8000/api/v1/share/',{
                                form_name: 'market', 
                            });
                        }}><a href="https://uglyus.co.kr/ustore"><span data-text="못난이농산물 구경가기">못난이농산물 구경가기</span></a></button>
            </div>
            <div className={classes.snsShareBtn}>
                <div className={classes.snsBtn} onClick={() => shareKakao()}>
                    <a id="kakaotalk-sharing-btn" href="javascript:;">
                    <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
                        alt="카카오톡 공유 보내기 버튼" />
                    </a>
                </div>
                <div>
                    <FacebookShareButton onClick={()=>{
                            axios.post('http://localhost:8000/api/v1/share/',{
                                form_name: 'facebook' 
                            });
                        }} className={classes.snsBtn} url={`http://localhost:3001/result/${props.mbti}`}><FacebookIcon size={32} round={true} /></FacebookShareButton> 
                </div>
                <div>
                    <TwitterShareButton onClick={()=>{
                            axios.post('http://localhost:8000/api/v1/share/',{
                                form_name: 'twitter' 
                            });
                        }} className={classes.snsBtn} url={`http://localhost:3001/result/${props.mbti}`}><TwitterIcon size={32} round={true} /></TwitterShareButton> 
                </div>
                <CopyToClipboard onClick={()=>{
                            axios.post('http://localhost:8000/api/v1/share/',{
                                form_name: 'copylink' 
                            });
                        }} className={classes.snsBtn} text={`http://localhost:3001/result/${props.mbti}`}>
                    <button onClick={()=>{
                        alert('복사완료!')
                    }}><FontAwesomeIcon icon={ faPaperclip }   /></button>
                </CopyToClipboard>
            </div>
            <div className='replayBtn'>
                <Link to='/'><Button>한번 더 수확해볼까?</Button></Link>
            </div>
        </div>
    );
}

export default ResultCard;