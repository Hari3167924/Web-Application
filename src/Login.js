import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const loginUser = async (e) => {

        e.preventDefault();

        const res = await axios.post('http://localhost:8080/api/login', {
            email,
            password
        });

        alert(res.data.message);

        if(res.data.message === 'Login Successful') {
            navigate('/home');
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow p-4">
                        <h2 className="text-center mb-4">Login</h2>

                        <form onSubmit={loginUser}>

                            <div className="mb-3">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={(e)=>setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button className="btn btn-primary w-100">
                                Login
                            </button>

                            <p className="mt-3 text-center">
                                New User?
                                <Link to="/register"> Register</Link>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
