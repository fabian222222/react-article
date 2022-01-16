import React, {useState, useEffect} from 'react'
import { Categories } from '../../Services/CategoryApi/Categories'
import Select from 'react-select'
import { ArticleCreate } from '../../Services/ArticleApi/createArticle'
import { useForm } from "react-hook-form"
import styled from 'styled-components'
import form_illu from './../../assets/images/form_illu.jpg'

const ArticleForm = () => {

    const [categories, setCategories] = useState([])
    const [select, setSelect] = useState([])
    const [idCategory, setIdCategory] = useState("")
    
    const {register, handleSubmit} = useForm()
    
    const getCategories = async () => {
        const data = await Categories()
        setCategories(data.data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        const categoriesForSelect = categories.map(category => ({"value" : category.id, "label" : category.name}))
        setSelect(categoriesForSelect)
    }, [categories])

    return (
        <Container>
            <PageTitle>Create your article !</PageTitle>
            <Elements>
                <Form onSubmit={handleSubmit(async(form) =>{
                    const response = await ArticleCreate({"article_category_id" : idCategory, title: form.title, content : form.content})
                    console.log(response);
                })}>
                    <FillContainer>
                        <Label htmlFor="title">title</Label>
                        <Input id='title' type="text" {...register("title", {
                            required : true
                        })} />
                    </FillContainer>
                    <FillContainer>
                        <Label htmlFor="content">content</Label>
                        <Input id='content' type="text" {...register('content' , {
                            required : true,
                            minLength : 8
                        })}/>
                    </FillContainer>
                    <Select options={select} onChange={(e)=>{setIdCategory(e.value)}}/>
                    <FormSubmit type="submit" value="Create this article"/>
                </Form>
                <ImageContainer>
                    <img style={{width:"100%", height:"100%", objectFit:"cover"}} src={form_illu} alt="" />
                </ImageContainer>
            </Elements>
        </Container>
    )
}

const Container = styled.div`
    padding: 10px;
    min-height : 100vh;
`
const PageTitle = styled.h1`
    font-family : "montserrat";
    font-size : 25px;
    font-weight: 600;
    background-color : #c7c7c7;
    padding:5px;
    padding-left : 10px;
    border-radius : 5px;
`
const Elements = styled.div`
    display:flex;
`
const Form = styled.form`
    width:50%;
    display:flex;
    flex-direction: column;
`
const ImageContainer = styled.div`
    width:50%;
`
const FillContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin-bottom: 15px;
`
const FormSubmit = styled.input`
    border:none; 
    width:fit-content; 
    border-radius:4px; 
    padding:8px 8px; 
    background-color:#516BEB; 
    color:white; 
    font-weight:600; 
    cursor:pointer;
    margin-top:15px;
`
const Label = styled.label`
    background-color : #cacaca;
    width:fit-content;
    padding:5px;
    font-size : 18px;
    font-family: "montserrat";
    font-weight: 500;
    border-radius : 5px 5px 0 0;
`
const Input = styled.input`
    height:30px;
    border-radius:5px;
    border:solid 1px black;
`


export default ArticleForm