import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Join() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [nickname, setNickname] = useState();
    
    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const pwdHandler = (e) => {
        setPwd(e.target.value)
    }

    const nicknameHandler = (e) => {
        setNickname(e.target.value);
    };

    const joinuser = async() => {
        const data = {
            email : email,
            password : pwd,
            nickname: nickname
        }
        try {
            await api.post('/join', data);
            alert('가입 완료');
            navigate('/Login')
        } catch (err) {
            alert('가입실패')
            console.log(err);
        }
    }

    return(
        <div style={{ paddingTop: '260px',
                      margin:'0 auto',
                      width: '30%',
        }}>
            <h2 style={{color:'white'}}>회원 가입</h2>
            <Form style={{border: '2px solid white',
                          borderRadius: '35px',
                          padding: '35px'
            }}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label style={{color:'white'}}>
                        아이디
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                                  onChange={emailHandler}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label style={{color:'white'}}>
                        비밀번호
                    </Form.Label>
                    <Form.Control type="password" placeholder="Password"
                                  onChange={pwdHandler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupNickname">
                    <Form.Label style={{color:'white'}}>
                        닉네임
                    </Form.Label>
                    <Form.Control type="Nickname" placeholder="Nickname"
                                  onChange={nicknameHandler} />
                </Form.Group>
                    <Button variant="success"
                            onClick={joinuser}>
                        회원 가입
                    </Button>
            </Form>
        </div>
    )

}

export default Join;