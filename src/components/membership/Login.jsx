import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Context';
import { useContext, useState } from 'react';
import api from '../api/api';

function Login() {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const pwdHandler = (e) => {
        setPwd(e.target.value);
    }

    const Loginhandler = async () => {
        const data = {
            email: email,
            password: pwd
        };
        try {
            const response = await api.post('/login', data);
            login(response.data);
            alert('로그인에 성공했습니다.');
            navigate('/');
        } catch (err) {
            console.log(err);
            alert('로그인에 실패하였습니다.');
        }
    }


    return(
        <div style={{ paddingTop: '260px',
                      margin:'0 auto',
                      width: '30%',
        }}>
            <h2 style={{color:'white'}}>LOGIN</h2>
            <Form style={{border: '2px solid white',
                          borderRadius: '35px',
                          padding: '35px'
            }}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label style={{color:'white'}}>
                        아이디
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                                  onChange={emailHandler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label style={{color:'white'}}>
                        비밀번호
                    </Form.Label>
                    <Form.Control type="password" placeholder="Password"
                                  onChange={pwdHandler} />
                </Form.Group>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="success" onClick={Loginhandler}>
                        로그인
                    </Button>
                    <Button variant="link"
                            style={{color:'white'}}
                            onClick={() => {navigate("/Join")}}>
                        회원 가입
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Login;