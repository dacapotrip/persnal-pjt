import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from "../api/api"
import { AuthContext } from '../../context/Context';

const boardOptions = [
    { value: 'free', label: '자유 게시판' },
    { value: 'info', label: '정보 공유 게시판' },
    { value: 'review', label: '후기 게시판' },
    { value: 'meeting', label: '모임 게시판' }
];

function PostWrite() {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedBoard, setSelectedBoard] = useState(boardOptions[0].value);
    
    const titleHandler = (e) => {
        setTitle(e.target.value);
    }

    const contentHandler = (e) => {
        setContent(e.target.value)
    }

    const boardHandler = (e) => {
        setSelectedBoard(e.target.value);
    };

    const cancelHandler = () => {
        alert("글작성을 취소합니다");
        navigate(`/board/${selectedBoard}`);
    }

    const createTodo = async() => {
        const data = {
            title : title,
            content : content,
            boardType: selectedBoard,
            author: user.nickname
        }
        try {
            const response = await API.post(`/board/${selectedBoard}`, data);
            console.log(response);
            alert('글이 작성되었습니다.');
            navigate(`/board/${selectedBoard}`);
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <Container style={{ paddingTop: '150px', maxWidth: '950px', color:'white' }}>
            <Form>
                <Row>
                    <Col md={8}>
                        <Form.Group className="mb-2" controlId="postTitle">
                            <Form.Label>제목</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="제목을 입력하세요" 
                                style={{ padding: '10px' }} 
                                onChange={titleHandler}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="postBoard">
                            <Form.Label>게시판 선택</Form.Label>
                            <Form.Control as="select" style={{ padding: '10px' }} 
                                          value={selectedBoard} onChange={boardHandler}>
                                {boardOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </Form.Control>
                </Form.Group>
                    </Col>
                </Row>
                
                <Form.Group className="mb-4" controlId="postContent">
                    <Form.Label>내용</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={25} 
                        placeholder="내용을 입력하세요" 
                        style={{ padding: '10px'}} 
                        onChange={contentHandler}
                    />
                </Form.Group>

                <Button variant="primary" style={{ width: '25%', marginLeft: '215px'}}
                        onClick={createTodo}>
                    작성완료
                </Button>
                <Button variant="danger" style={{ width: '25%', marginLeft: '10px' }}
                        onClick={cancelHandler}>
                    작성취소
                </Button>
            </Form>
        </Container>
    );
}

export default PostWrite;