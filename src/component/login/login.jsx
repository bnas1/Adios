import './login-styles.css'
import loginImg from './loginimg.png'
import { signInWithGoogle } from '../../firebase/firebase'
const Login = () =>{
    return(
        <>
        <div className='container'>
        <div className="parent">
        <div className='div1'>
                <img src={loginImg} className='loginimg' />  
        </div>
            <div className='div2'>
                <button className='login-with-google-btn' onClick={signInWithGoogle} >Sign in with google</button>
            </div>
        </div>
        </div>       
        </>
    )
}
export default Login