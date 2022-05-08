import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
        url('https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
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


const ButtonLogin = styled.button`
    margin-top: 20px;
    cursor: pointer;
    background-color: lightcoral;
    border: none;
    color: white;
    border-radius: 10px;
    padding: 10px;
`

const ButtonRegister = styled.button`
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: teal;
    cursor: pointer;
    border: none;
    padding: 10px;
    color: white;
    border-radius: 10px;
`

const Login = () => {
  return (
    <Container>
        <Title>Login</Title>
        <Form>
            <Label>Email</Label>
            <Input type={'text'} placeholder={'Enter your email...'} />
            <Label>Password</Label>
            <Input type={'password'} placeholder={'Enter your password...'} />
            <ButtonLogin>Login</ButtonLogin>
        </Form>
        <ButtonRegister><Link className='link' to='/register'>Register</Link></ButtonRegister>
    </Container>
  )
}

export default Login