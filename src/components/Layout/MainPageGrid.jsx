import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import freeImg from '../../asset/mainIMG/free.jpg';
import infoImg from '../../asset/mainIMG/info.jpg';
import partyImg from '../../asset/mainIMG/party.jpg';
import reviewImg from '../../asset/mainIMG/review.jpg';
import { useNavigate } from 'react-router-dom';


const cardData = [
    {
      title: '자유 게시판',
      text: '다양한 사람들과 자유롭게 이야기를 나눠보세요',
      imgSrc: freeImg,
      route: '/board/free'
    },
    {
      title: '정보 공유 게시판',
      text: '자신만의 지식이나 많은 사람들이 알면 좋을 주류에 관한 정보를 나눠보세요',
      imgSrc: infoImg,
      route: '/board/info'
    },
    {
      title: '후기 게시판',
      text: '어떤 술에 대해 자신의 느낌이나 생각등을 알려주세요',
      imgSrc: reviewImg,
      route: '/board/review'
    },
    {
      title: '모임 게시판',
      text: '개인, 단체가 여는 모임에 관한 정보를 나눠보세요',
      imgSrc: partyImg,
      route: '/board/meeting'
    },
  ];

function MainPageGrid() {

  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-around' }}>
      {cardData.map((card, idx) => (
          <Card style={{ width: '600px'}} >
            <Card.Img variant="top" src={card.imgSrc} 
                      className="img-fluid" style={{ height: '400px', objectFit: 'cover' }}/>
            <Card.Body >
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              <Button variant="outline-success"
                      onClick={() => navigate(card.route)}>
                  이동하기
              </Button>
            </Card.Body>
          </Card>
      ))}
    </div>
  );
}

export default MainPageGrid;