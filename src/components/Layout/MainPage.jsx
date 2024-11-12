import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import MainPageGrid from './MainPageGrid'
import './../CSS/MainPage.css'
import { useNavigate } from 'react-router-dom';


function MainPage() {

    const navigate = useNavigate();
    
    return (
        <div style={{ paddingTop: '101px'}}>
        <Carousel>
                    
            <Carousel.Item interval={4000}>
                <div className='slidercontents_wiskey'>
                    <div className='wrapText'>
                        <h1>Whiskey/Whisky (위스키)</h1>
                        <div className="d-none d-md-block">
                            <p>곡물을 당화 및 발효, 증류 시켜 오크통에 숙성시킨 증류주</p>
                        </div>
                        <Button Button variant="outline-light"
                                onClick={() => {navigate("info")}}>
                            SHOW NOW
                        </Button>
                    </div>
                </div>
            </Carousel.Item>
        
            <Carousel.Item interval={4000}>
                <div className='slidercontents_wine'>
                    <div className='wrapText'>
                        <h1>Wine (포도주/과실주)</h1>
                        <div className="d-none d-md-block">
                            <p>포도즙을 발효시켜 만든 양조주</p>
                        </div>
                        <Button Button variant="outline-light"
                                onClick={() => {navigate("info")}}>
                            SHOW NOW
                        </Button>
                    </div>
                </div>
            </Carousel.Item>
        
            <Carousel.Item interval={4000}>
                <div className='slidercontents_brandy'>
                    <div className='wrapText'>
                        <h1>Brandy (브랜디)</h1>
                        <div className="d-none d-md-block">
                            <p>과실주를 증류하여 바리크에 숙성시킨 증류주</p>
                        </div>
                        <Button Button variant="outline-light"
                                onClick={() => {navigate("info")}}>
                            SHOW NOW
                        </Button>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item interval={4000}>
                <div className='slidercontents_vodka'>
                    <div className='wrapText'>
                        <h1>Vodka (보드카)</h1>
                        <div className="d-none d-md-block">
                            <p>곡물로 만든 양조주를 원재료의 향미가 없어질때까지 증류/여과하여 만드는 증류주</p>
                        </div>
                        <Button Button variant="outline-light"
                                onClick={() => {navigate("info")}}>
                            SHOW NOW
                        </Button>
                    </div>
                </div>
            </Carousel.Item>
        
        </Carousel>

        <div style={{ padding: '20px' }}>
                <MainPageGrid />
        </div>

        </div>
    );
}

export default MainPage;