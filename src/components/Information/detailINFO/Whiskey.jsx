import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './../../CSS/Detaill.css'
import WineImg from '../../../asset/InfoIMG/Wine.jpg';
import World from '../../../asset/InfoIMG/worldwine.jpg';

function Wine() {
    return(
        <div className='container'>
            <div className='card-container'>
            <Card className="bg-dark text-white">
            <Card.Img src={WineImg} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title style={{fontSize:'3.5rem'}}>WHISKEY</Card.Title>
                    <Card.Text style={{fontSize:'1.2rem'}}>
                        It is the oldest alcoholic beverage in history
                        and has had a magical effect on human history.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            </div>
            <Tab.Container id="left-tabs-example"
                       defaultActiveKey="first">
                <div className='tap-container'>
                    <Row> 
                        <Col sm={3}>
                            <div className='wine-div'>
                                Whiskey<br/>(위스키)
                            </div>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className='navlink'>
                                        위스키란?
                                    </Nav.Link>
                                </Nav.Item>
                                <hr className='hr_white'/>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className='navlink'>
                                        위스키의 종류
                                    </Nav.Link>
                                </Nav.Item>
                                <hr className='hr_white'/>
                            </Nav>
                        </Col>  
                        <Col sm={9}>
                            <Tab.Content style={{color:'white'}}>
                                <Tab.Pane eventKey="first">
                                    <h2 className='tap-content'>WHISKEY(위스키)란?</h2>
                                    <div className='tap-content' style={{fontSize:'1.1rem'}}>                         
                                        <p style={{marginTop:'40px'}}>
                                        위스키는 증류주로 맥아 효소로 녹말을 포함하고 있는 곡물을 재료로 사용합니다.<br/>
                                        또한 위스키는 오크통에 수년~수십년을 숙성시키기에 여타 다른 증류주들 중에서도 특별히 강한 향과 맛이 특징입니다.
                                        </p>                                       
                                        <p style={{marginTop:'50px'}}>
                                        위스키는 가격대가 높은편에 속합니다.<br/>
                                        이유는 단순히 적당한 기간동안 숙성키는게 아닌 최소 수년에서 최대 수십년을 오크통에서 숙성시키기 때문입니다.
                                        또한 오래 숙성시키면 시킬수록 맛과 향이 강해지지만 그만큼 양도 적어집니다.
                                        </p>
                                        <p style={{marginTop:'50px'}}>
                                        이 줄어드는양을 Angels share라고 하는데 말 그대로 천사들의 몫입니다.<br/>
                                        위스키를 숙성시키는 오크통은 통의 재료인 나무 그리고 통의 구조상 미세한 틈이 있기때문에 물이나 알코올이 조금씩 증발해서 날아갑니다.<br/>
                                        보통 1년에 2~3%가 줄어들고 10년 숙성이면 처음 양의 20%, 20년이 넘어가면 반은 날아갑니다.
                                        이런 점 때문에 가격대가 높고 숙성 기간이 길어질수록 가격이 기하급수적으로 비싸집니다.
                                        </p>
                                        <p style={{marginTop:'50px'}}>
                                        이런 숙성에는 기후도 영향을 줍니다 온도가 높은지역에서 숙성하면 엔젤스 쉐어가 더 많아지고 숙성속도도 빨라집니다.<br/>
                                        습도또한 높으면 물은 잘 증발하지않고 알코올이 많이 증발해 도수가 낮아지고 반대면 도수가 더 높아집니다.
                                        </p>
                                    </div>
                                    <hr/>
                                    <h2 className='tap-content' style={{marginTop:'40px'}}
                                        >WHISKEY(위스키)의 역사
                                    </h2>
                                    <div className='tap-content' style={{fontSize:'1.1rem'}}>
                                        <p style={{marginTop:'40px'}}>
                                        위스키는 동방의 증류기술이 중세 십자군 전쟁을 통해 서양으로 전파된 후게 생겨난 술로
                                        12세기 이전에 아일랜드에서 제조되기 시작해 15세기경 스코틀랜드로 전파된게 오늘날의 스카치 위스키의 원조로
                                        추정중 입니다.<br/>
                                        초기의 위스키는 증류된 원액을 그대로 마시는것이 일반적이었다고 하는데 당시에는 보드카처럼
                                        맑고 투명하면서 강한 보리향을 내는 술이었다고 추측하고 있습니다.
                                        </p>
                                        <p style={{marginTop:'50px'}}>
                                        그러나 18세기에 이르러 잉글랜드와 스코틀랜드의 분쟁에서 잉글랜드가 승리하면서 위스키의 역사가 크게 바뀌었습니다.<br/>
                                        잉글랜드가 스코틀랜드에서의 지배를 공고히 하기 위한 자금을 얻기 위해 각종 규제를 신설하였고 그중에는 과세 정책도 있었습니다.<br/>
                                        특히 이들이 제조하는 술에 과도한 세금을 부과하기 시작하면서 단속을 피해 깊은 산속으로 숨어 제조하였으며, 달빛이 뜨는 한밤중에 몰래 위스키를 만들었고
                                        거기에 당시에는 유일하게 합법이었던 셰리 와인통에 몰래 숨겨두었다가 주변의 눈을 피해 몰래 판매하게 되었습니다.
                                        </p>
                                        <p style={{marginTop:'50px'}}>
                                        이 과정에서 와인통의 원료인 떡갈나무의 진액과 통에 흡수되었던 셰리 와인이 위스키 원액에 스며들어 호박색을 띠는 빛깔과 향기를 내고
                                        이것이 원래의 위스키보다 상당한 인기를 끌면서 점차 주변 국가로 확산되습니다.<br/>
                                        이후 정책이 합리적으로 바뀌고 1824년 글렌리벳이 최초의 합법적 주류면허를 취득하면서 이후 합법적인 증류소가 늘었났습니다.<br/>
                                        현대에 이르러 위스키의 거래가 자유로워지자 전 세계로 퍼져나가면서 위스키의 명성을 널리 알리게 되었습니다.
                                        </p>
                                    </div>
                                    <hr/>
                                </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h2 className='tap-content'>WHISKEY(위스키)의 종류</h2>
                                    <div className='tap-content' style={{fontSize:'1.1rem'}}>
                                        <p style={{marginTop:'40px'}}>
                                        위스키의 분류는 생산지에 따른 분류와 재료/블렌딩에 따른 분류 그리고 숙성에 따른 분류로 나눌수 있습니다.
                                        생산지는 보통 스카치,아이리시등 같은 분류이고 재료와 블렌딩은 싱글몰트나 블렌디드 몰트등 같은 분류 입니다.
                                        </p>
                                        <p style={{marginTop:'50px'}}>
                                        하지만 와인은 전 세계에서 생산되는 와인의 종류는 셀수 없이 많습니다.<br/>
                                        예로 최근엔 옐로우나 앰버 와인이라는 기존에는 없던 새로운 와인 종류가 추가되는경우도 있습니다.<br/>
                                        또한 종류가 많은 만큼 분류법도 많은데 기존 설명 했던 색이나 양조 방법, 포도의 취급법에 따른 분류도 있으며
                                        저장기간에 따른 분류, 생산 지역에 따른 분류, 식사 순서에 따른 분류 또한 존재 합니다.
                                        </p>
                                        <p style={{marginTop:'50px'}}>
                                        여기서는 모든 분류법을 소개해드릴수 없으니 생산지역에 따른 분류를 대표적으로 소개해 드리고자 합니다.
                                        </p>
                                        <hr/>
                                        <p style={{marginTop:'50px'}}>
                                        와인은 의외로  만드는 데 다소 까다로운 조건을 요구합니다. 
                                        와인를 만들기 위한 포도는 수확한 것을 바로 발효시켜 사용해야 하며, 이 기회가 1년에 한 번뿐이며
                                        기후 조건, 토질, 품종, 숙성 기간 등 여러 요소가 영향을 미치기 때문에 일정한 품질의 포도주를 뽑기 위해선 요령이 필요하죠.<br/>
                                        게다가 포도주를 만들 수 있는 포도 품종은 아주 제한적이며, 적합한 토양과 기후가 뒷받침되어야 하기 때문에 포도주 생산지도 흔치 않습니다.
                                        대신 이렇게 다양한 조건의 변화에 따라 맛이 천차만별로 달라지는 특성 덕에 종류도 굉장히 늘어났습니다.
                                        </p>
                                        <p style={{marginTop:'50px'}}>
                                        포도주의 산지를 구분할 때 쓰는 표현으로 구세계 포도주(Old world wine)와 신세계 포도주(New world wine)이라는 표현이 있습니다.<br/>
                                        여기서 구세계는 로마 제국 이후 오랫동안 포도를 재배해 포도주를 생산한 유럽 지역을 뜻하며,
                                        신세계는 근대 이후 유럽 국가들이 세력을 확장해 식민지를 삼으면서 유럽식 포도주를 생산하기 시작한 아프리카, 아메리카, 오세아니아 등의 지역을 의미합니다.
                                        </p>
                                        <Image src={World} fluid style={{marginTop:'50px'}}/>
                                        <p style={{marginTop:'50px'}}>
                                        위의 이미지는 각각 신세계와 구세계 와인의 생산지를 나타낸 것입니다.<br/>
                                        구세계 와인의 대표적인 나라는 프랑스, 이탈리아, 스페인, 포르투갈, 조지아, 그리스등이 있고
                                        사실상 유럽의 대다수는 구세계 와인의 생산지 입니다.<br/>
                                        신세계 와인의 대표적인 나라는 칠레, 아르헨티나, 미국, 호주, 남아공, 뉴질랜드, 캐나다등이 있습니다.
                                        </p>
                                    </div>
                            </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </div>
            </Tab.Container>
        </div>
    );
}

export default Wine;