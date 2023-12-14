import React, {useState} from 'react';
import Layout from "./../../components/Layout/Layout";
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import '../../styles/AuthStyles.css'

import toast from 'react-hot-toast'

const Register = () => {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[phone, setPhone] = useState("")
    const[address, setAddress] = useState("")
    const[answer, setAnswer] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {name, email, password, phone, address, answer});
            if(res && res.data.success){
                toast.success(res.data.message)
                navigate("/login")
            }
            else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    }
  return (
    <Layout title="Registration Page">+
        <div className="form-container">   
            <form onSubmit={handleSubmit}>
                <h4 className='title'>REGISTRATION FORM</h4>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input type="text" value={name} onChange={ (e) => setName(e.target.value)} className="form-control" id="exampleInputName" placeholder="Enter Name" required autofocus/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                    <input type="email" value={email} onChange={ (e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder="Enter Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword" placeholder="Enter Password" required/>
                </div>            
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                    <input type="text" value={phone} onChange={ (e) => setPhone(e.target.value)} className="form-control" id="exampleInputPhone" placeholder="Enter Phone Number" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input type="text" value={address} onChange={ (e) => setAddress(e.target.value)} className="form-control" id="exampleInputAddress" placeholder="Enter Your Address" required />
                </div>  
                <div className="mb-3">
                    <label htmlFor="exampleInputAnswer" className="form-label">Answer</label>
                    <input type="text" value={answer} onChange={ (e) => setAnswer(e.target.value)} className="form-control" id="exampleInputAnswer" placeholder="What is your pets name?" required />
                </div>                           

                <button type="submit" className="btn btn-primary">REGISTER</button>
            </form>
             
        </div>

    </Layout>

  );
};

export default Register;