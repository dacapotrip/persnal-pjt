import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useCallback, useContext, useEffect, useState } from 'react';
import API from "../api/api";
import { AuthContext } from "../../context/Context";

function Board() {

    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const { boardType } = useParams();
    const { user } = useContext(AuthContext);

    console.log('boardType:', boardType);

    const boardTitle = () => {
        switch (boardType) {
            case 'free':
                return '자유 게시판';
            case 'info':
                return '정보 공유 게시판';
            case 'review':
                return '후기 게시판';
            case 'meeting':
                return '모임 게시판';
            default:
                return '게시판';
        }
    };

    const fetchPosts = useCallback(async () => {
        try {
            const response = await API.get(`/board/${boardType}`);
            setPosts(response.data);
            console.log('Response:', response.data);
        } catch (err) {
            console.log(err);
        }
    }, [boardType]);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return (
        <div className="container" style={{paddingTop:'110px'}}>
            <h2 style={{color:'white'}}>{boardTitle()}</h2>
            <div className="d-flex justify-content-end my-4">
                <Form.Select aria-label="정렬 선택" className="w-auto me-2"
                             style={{ height: '2.5rem' }}>
                    <option value="latest">최신순</option>
                    <option value="oldest">오래된 순</option>
                </Form.Select>
                <Button variant="info"
                        onClick={()=>{ navigate('/write') }}
                        disabled={!user}>
                    글쓰기
                </Button>
            </div>  
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>조회수</th>
                    <th>추천수</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post, index) => (
                    <tr key={post.id}>
                        <td>{index + 1}</td>
                        <td>
                            <Link to={`/board/${boardType}/${post.id}`}>
                                {post.title}
                            </Link>
                        </td>
                        <td>{post.author}</td>
                        <td>{post.views}</td>
                        <td>{post.recommendations}</td>
                    </tr>
                ))}
            </tbody>
            </Table>
            <div className="d-flex flex-column align-items-center my-4" style={{ width: '100%' }}>
                <Pagination className="mb-3">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>

                <Form className="d-flex" style={{ width: '50%' }}>
                    <Form.Control type="search" className="me-2"
                                  placeholder="검색어를 입력해주세요"
                                  style={{ height: '2.5rem', flexGrow: 1 }}/>
                    <Button variant="success" style={{ width: '15%' }}>검색</Button>
                </Form>
            </div>
        </div>
        );
    }

export default Board;