import { useState } from "react";
import axios from "axios";
import { Link , useNavigate} from "react-router-dom"
function Login () {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleApi = () => {
        console.log({ email, password })
        axios.get('/users', {
            email: email,
            password: password
        })
        .then( result => {
            console.log(result.data)
            alert('Success')
            localStorage.setItem('token', result.data.token)
            navigate('/landing')
        })
        .catch(error => {
            alert('service error')
            console.log(error)
        })
    }
    return (
        <div className="App">
            <h1>Login</h1>
            Email : <input value={email} onChange={handleEmail}  type="email"/>
            Password : <input value={password} onChange={handlePassword} type="password"/>
            <button onClick={handleApi} >Login</button>
         
        </div>
    )
}
export default Login