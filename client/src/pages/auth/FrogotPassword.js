import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { toast } from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../../styles/authStyles.css";

const FrogotPassword = () => {
    const [email, setEmail] = useState("");
    const [answer, setAnswer] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate();

    //FORM FUNCTION
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/api/v1/auth/forgot-password`, { email, newPassword, answer })
            if (res && res.data.success) {
                navigate('/login');
                toast.success(res.data.message);
            }
            else {
                toast.error(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!")
        }
    }
    return (
        <Layout>
            <div className="form-container" style={{ minHeight: "90vh" }}>
                <form onSubmit={handleSubmit}>
                    <h4 className="title">Reset Password</h4>
                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Email "
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail2"
                            placeholder="Enter Your Favorite Sport Name "
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Your New Password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export default FrogotPassword