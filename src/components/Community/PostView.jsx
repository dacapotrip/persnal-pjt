import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from "../api/api";
import './../CSS/View.css';
import Button from 'react-bootstrap/Button';
import { AuthContext } from "../../context/Context";
import Form from 'react-bootstrap/Form';

function PostView() {
    const { id, boardType } = useParams();
    const [post, setPost] = useState(null);
    const [views, setViews] = useState(0);
    const [like, setLike] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await API.get(`/board/${boardType}/${id}`);
                console.log(response.data);
                setPost(response.data);
                setViews(response.data.views);
                setLike(response.data.recommendations);

                await API.put(`/board/${boardType}/${id}/views`);
            } catch (err) {
                console.log(err);
            }
        };

        const fetchComments = async () => {
            try {
                const response = await API.get(`/board/comments/${id}`);
                console.log(response.data);
                setComments(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchPost();
        fetchComments();
    }, [id, boardType]);

    const CommentChange = (e) => {
        setCommentText(e.target.value);
    };

    const CommentSubmit = async () => {
        if (!user) {
            alert("로그인이 필요합니다.");
            return;
        }

        if (commentText.trim() === "") return;

        try {
            const data = {
                postId: id,
                author: user.nickname,
                comment: commentText,
            };
            await API.post("/board/comments", data);
            setCommentText("");
            setComments(prevComments => [...prevComments, { author: user.nickname, comment: commentText, createdAt: new Date().toISOString() }]);
        } catch (err) {
            console.log(err);
        }
    };

    const Likehandler = async () => {
        try {
            await API.put(`/board/${boardType}/${id}/like`);
            setLike(prevState => prevState + 1);
        } catch (err) {
            console.log(err);
        }
    };

    const DeletePost = async () => {
        try {
            await API.delete(`/board/${boardType}/${id}`);
            alert("게시글이 삭제되었습니다.");
            navigate(`/board/${boardType}`);
        } catch (err) {
            console.log(err);
        }
    };

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className='viewcontainer'>
            <h1>{post.title}</h1>
            <div className='postinfo'>
                <p>작성자: {post.author}</p>
                <p>조회수: {views}</p>
                <p>추천수: {like}</p>
            </div>
            <div className='content'>
                <p>{post.content}</p>
            </div>
            <div className='likebutton'>
                <Button variant="outline-danger"
                        style={{ width:'90px', 
                                 height:'90px', 
                                 borderRadius:"100%",
                                 border: '3px solid red'}}
                        onClick={Likehandler}>
                        Like
                </Button>
            </div>
            <div>
                {user && user.nickname === post.author && (
                <Button variant="outline-danger"
                        onClick={DeletePost}
                        style={{border: '2px solid red'}}>
                        delete
                </Button>
                )}
            </div>
            <div className='comment-section'
                 style={{paddingTop:'15px'}}>
                <h3>Timeline</h3>
                <div className='comment-form'>
                    <Form.Control 
                        type="text"
                        value={commentText}
                        onChange={CommentChange}
                        placeholder="댓글을 입력하세요"
                    />
                    <Button 
                        variant="primary" 
                        onClick={CommentSubmit}
                        style={{ marginTop: '10px' }}
                        disabled={!user}>
                        댓글 작성
                    </Button>
                </div>
                {comments.map(comment => (
                    <div key={comment.id}>
                        <hr/>
                        <p style={{marginLeft:'10px'}}>{comment.author}: {comment.comment}</p>
                        <hr/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostView;
