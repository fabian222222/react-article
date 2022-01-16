import React from 'react'
import { useForm } from 'react-hook-form'
import { RegisterApi } from '../../Services/UserApi/RegisterApi'
import styled from 'styled-components'
import register_background from './../../assets/images/article_writer.png'

export default function RegisterForm() {

    const { register, handleSubmit, watch } = useForm()

    return (
        <Container>
            <Form onSubmit={handleSubmit(async(form) => {
                await RegisterApi(form)
            })}>
                <Formtitle>Create your account !</Formtitle>
                <InputContainer>
                    <label htmlFor="firstname">firstname : </label>
                    <input id="firstname" type="text" {...register("firstname", {
                        minLength : 3,
                        required : true
                    }) } />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="lastname">Lastname : </label>
                    <input id='Lastname' type="text" {...register("lastname", {
                        required : true, 
                        minLength : 3
                    })} />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="email">Email : </label>
                    <input id='email' type="text" {...register("email", {
                        required : true,
                    })} />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="password">Password : </label>
                    <input id="password" type="password" {...register("password", {
                        required : true,
                        minLength : 8
                    })} />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="password_verif">Password verif : </label>
                    <input id='password_veri' name="password" type="password" {...register("password_verif", {
                        required : true,
                        validate : value => value === watch("password") || "The passwords do not match"
                    })}/>
                </InputContainer>
                <input style={{width:"fit-content"}} type="submit" value="Create account"/>
            </Form>
            <ImageContainer>
                <Image src={register_background} alt="register form illustration" />
            </ImageContainer>
        </Container>
    )
}

const Container = styled.div`
    display : flex;
    max-width:100vw;
    max-height:100vh;
    overflow:hidden;
`
const Form = styled.form`
    width : 50%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding: 20px;
`
const InputContainer = styled.div`
    position:relative;
    margin-bottom : 20px;
`
const ImageContainer = styled.div`
    width : 50%;
`
const Image = styled.img`
    object-fit : contain;
    width:100%;
    height:100%;
`
const Formtitle = styled.h1`
    font-size : 25px;
    font-weight:600;
    font-family:"montserrat";
    margin-bottom:30px;
`