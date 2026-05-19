import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const registerUser = async (e) => {

        e.preventDefault();

        const res = await axios.post('http://localhost:8080/api/register', {
            name,
            email,
            password
        });

        alert(res.data.message);

        if(res.data.message === 'Registration Successful') {
            navigate('/');
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow p-4">
                        <h2 className="text-center mb-4">Register</h2>

                        <form onSubmit={registerUser}>

                            <div className="mb-3">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e)=>setName(e.target.value)}
                                    required
                                />
                            </div>

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

                            <button className="btn btn-success w-100">
                                Register
                            </button>

                            <p className="mt-3 text-center">
                                Already have account?
                                <Link to="/"> Login</Link>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
