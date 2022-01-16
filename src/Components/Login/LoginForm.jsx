import React, {useRef, useState, useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { LoginApi } from "./../../Services/UserApi/Connection"
import loginBackground from './../../assets/images/mesh.png'
import { StoreContext } from '../../Providers/StoreProvider'
import styled from 'styled-components'

const LoginForm = () => {
    const{setToken} = useContext(StoreContext)
    const {register, handleSubmit} = useForm()
    const labelEmail = useRef()
    const labelPassword = useRef()
    const [status, setStatus] = useState("")

    const labelMover = (label)=>{
        label.current.style.top = "0px"
        label.current.style.fontSize = "13px"
    }

    if (status === 200){
        return <Navigate to="/articles"></Navigate>
    } else {
        return (
            <PageContainer>
                <FormLogin onSubmit={handleSubmit(async(form) =>{
                    const response = await LoginApi(form)
                    if(response.status === 200){
                        localStorage.setItem('token', response.data.token);
                        setToken(response.data.token)
                        setStatus(response.status)
                    }
                })}>
                    <FormTitle>Log youself in : </FormTitle>
                    <FillContainer>
                        <FillLabel ref={labelEmail} htmlFor="email">Email</FillLabel>
                        <FillInput onFocus={() => {labelMover(labelEmail)}} id='email' type="text" {...register("email", {
                            required : true
                        })} />
                    </FillContainer>
                    <FillContainer>
                        <FillLabel ref={labelPassword} htmlFor="password">Password</FillLabel>
                        <FillInput 
                        id='password' type="text" onFocus={() => {labelMover(labelPassword)}}{...register('password' , {
                            required : true,
                            minLength : 8
                        })}/>
                    </FillContainer>
                    <FormSubmit type="submit" value="login"/>
                </FormLogin>
                <BackgroundContainer className="background_container">
                    <BackgroundImage src={loginBackground} alt="login background" />
                </BackgroundContainer>
            </PageContainer>
        )
    }
}

const PageContainer = styled.div`
    min-width : 100vw;
    min-height:100vh;
    display:flex;
    margin:0;
    overflow:hidden;
`
const FormLogin = styled.form`
    width:50%;
    margin:0;  
    display:flex;
    flex-direction:column;
    padding:50px;
    justify-content:center;   
`
const FormTitle = styled.h1`
    font-size:25px;
    font-family:montserrat;
    font-weight:600;
    margin-bottom:25px;
`
const FillContainer = styled.div`
    position:relative; 
    margin-bottom:20px;
`
const FillLabel = styled.label`
    padding:5px;
    background-color:white; 
    transition:.2s;
    position:absolute; 
    left : 10px; 
    top:50%; 
    transform:translateY(-50%);
`
const FillInput = styled.input`
    padding-left:10px;
    width:100%;
    height:30px;
    border-radius:5px;
    border:1px solid black;
`
const FormSubmit = styled.input`
    border:none; 
    width:100px; 
    border-radius:4px; 
    padding:8px 5px; 
    background-color:#516BEB; 
    color:white; 
    font-weight:600; 
    cursor:pointer;
`
const BackgroundContainer = styled.div`
    min-height:100%;
    max-height:100%;
    width:50%;
    margin:0;
`
const BackgroundImage = styled.img`
    width:100%; 
    min-height:100%;
    max-height:100%; 
    object-fit:cover;
`

export default LoginForm
