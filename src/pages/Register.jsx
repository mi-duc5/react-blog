import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        rgba(255, 255, 255, .5), 
        rgba(255, 255, 255, .5)
        ), 
        url('https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-size: cover;
`

const Title = styled.title`
    font-size: 50px;
`

const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    margin: 10px 0;
`

const Input = styled.input`
    padding: 10px;
    background-color: white;
    border: none;
`


const ButtonRegister = styled.button`
    margin-top: 20px;
    cursor: pointer;
    background-color: teal;
    border: none;
    color: white;
    border-radius: 10px;
    padding: 10px;
`

const ButtonLogin = styled.button`
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: lightcoral;
    cursor: pointer;
    border: none;
    padding: 10px;
    color: white;
    border-radius: 10px;
`

const Register = () => {
  return (
    <Container>
        <Title>Register</Title>
        <Form>
        <Label>Username</Label>
            <Input type={'text'} placeholder={'Enter your username...'} />
            <Label>Email</Label>
            <Input type={'text'} placeholder={'Enter your email...'} />
            <Label>Password</Label>
            <Input type={'password'} placeholder={'Enter your password...'} />
            <ButtonRegister>Register</ButtonRegister>
        </Form>
        <ButtonLogin><Link className='link' to='/login'>Login</Link></ButtonLogin>
    </Container>
  )
}

export default Register