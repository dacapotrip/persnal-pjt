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
                    <Card.Title style={{fontSize:'3.5rem'}}>Vodka</Card.Title>
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
                                Vodka<br/>(보드카)
                            </div>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className='navlink'>
                                        보드카란?
                                    </Nav.Link>
                                </Nav.Item>
                                <hr className='hr_white'/>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className='navlink'>
                                        보드카의 종류
                                    </Nav.Link>
                                </Nav.Item>
                                <hr className='hr_white'/>
                            </Nav>
                        </Col>  
                        <Col sm={9}>
                            <Tab.Content style={{color:'white'}}>
                                <Tab.Pane eventKey="first">
                                    <h2 className='tap-content'>WINE(와인)이란?</h2>
                                    <div className='tap-content' style={{fontSize:'1.1rem'}}>
                                        <p style={{marginTop:'40px'}}>
                                        보드카란 무엇일까요?
                                        </p>                                         
                                        <p style={{marginTop:'50px'}}>
                                        곡물이나 서류 등 녹말이나 당을 함유한 재료를 당화, 발효시켜 양조주를 만들고,
                                        이를 원재료의 향미가 없어질 때 까지 여러 번 증류/여과하여 제조하는 증류주(스피리츠)를 뜻합니다.
                                        무색·무미·무취를 특징으로 추구하며, 유럽과 미국 & 캐나다 그리고 폴란드와 러시아 등 세계적으로 사랑받고 있는 술입니다.
                                        </p>                                       
                                        <p style={{marginTop:'50px'}}>
                                        보드카의 매력은 스피리츠의 본분에 충실한 안정적인 풍미에서 나옵니다. 또한,
                                        고급품으로 갈수록 무색 무미 무취로 스피리츠라는 술 분류에 충실한 깔끔함을 자랑합니다.
                                        </p>
                                        <p style={{marginTop:'50px'}}>
                                        하지만 왜 와인하면 포도주가 먼저 생각 날까요?<br/>
                                        이유는 와인 종류의 다수가 포도로 만든 포도주이고 와인이 본래는 포도주의 의미이기 때문이죠.
                                        </p>
                                    </div>
                                    <hr/>
                                    <h2 className='tap-content' style={{marginTop:'40px'}}
                                        >WINE(와인)의 역사
                                    </h2>
                                    <div className='tap-content' style={{fontSize:'1.1rem'}}>
                                        <p style={{marginTop:'40px'}}>
                                        인류 역사상 가장 오랜 역사를 가진 술이 바로 와인입니다.<br/>
                                        와인의 역사는 지금으로부터 약 7000~8000년 전으로 거슬러 올라가는데, 처음에 누가 발명했는지는 아무도 모릅니다.
                                        그저 자연 발생적이라고 추측하고 있을 뿐이죠.
                                        </p>
                                        <p style={{marginTop:'50px'}}>
                                        고고학자들은 기원전 6000년경에 메소포타미아에서 처음으로 와인을 제조한 흔적을 발견하였습니다.<br/>
                                        그리고 기원전 4000년경에는 나일강 델타 지역에 포도를 생산하는 포도원이 있었다는 사실이 발견되었고 <br/>
                                        기원전 3000년경부터 그리스 인은 포도를 재배하기 시작했으며 당시 그 과즙을“꿀과 같이 달콤하다”라고 표현하였다고 전해지고 있습니다.
                                        </p>
                                        <p style={{marginTop:'50px'}}>
                                        그리스로부터 시작된 포도 재배는 지중해를 중심으로 퍼져 나갔으며 기원전 600년경에 프랑스로 전파되습니다.<br/>
                                        약 50종류의 포도 품종들이 암포라(손잡이가 있는 그리스의 항아리)에 보관되었거나 다른 나라로 운송되었죠.
                                        </p>
                                        <p style={{marginTop:'50px'}}>
                                        고대 항해 문화는 지중해 연안을 따라 흘러가면서 포도나무와 와인을 양조하는 비법을 전파할 수 있었습니다.<br/>
                                        로마제국은 프랑스를 포함한 전 유럽에 식민지를 만들 때마다 포도나무들을 전파하였고 2세기부터 암포라 대신 나무 배럴이 사용되기 시작하였습니다.<br/>
                                        지중해 연안에서부터 시작한 포도원은 프랑스 론 밸리, 부르고뉴, 루아르 밸리, 나중에는 보르도 지역까지 전파되었다.
                                        </p>
                                        <p style={{marginTop:'50px'}}>
                                        이후, 약 19세기 후반 프랑스에서 필록세라라는 포도나무 뿌리에 기생하는 진드기가 창궐해 유럽 전역의 포도밭을 황폐화 시겼습니다.<br/>
                                        하지만 이로 인해 포도를 구제하는 치료법이 개발되었으며 그 덕택에 양조법이 더 발전하게 되었습니다.<br/>
                                        와인 양조가 가장 발전되어 있었던 프랑스는 필록세라의 출현을 계기로 와인 생산 지역과 생산 과정을 관리하고 법령을 제정하였고
                                        와인의 품질 관리를 할 수 있게 되면서 원산지 명칭을 표기하는 아펠라시옹 방식과 품질 등급 체계를 구축할 수 있게 된 것이죠.
                                        </p>
                                    </div>
                                    <hr/>
                                </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h2 className='tap-content'>WINE(와인)의 종류</h2>
                                    <div className='tap-content' style={{fontSize:'1.1rem'}}>
                                        <p style={{marginTop:'40px'}}>
                                        와인은 기본적으로 색에 따라 레드(RED), 화이트(WHITE), 로제(LOSE)으로,<br/>
                                        와인 양조 방법에 따라 스틸(STILL), 스파클링(SPARKLING), 주정강화(FORTIFIED)으로 구분할 수 있습니다.
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