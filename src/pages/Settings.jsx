import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'

const Container = styled.div`
    display: flex;
`

const Wrapper = styled.div`
    flex: 9;
    padding: 20px;
`

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const UpdateTitle = styled.span`
    font-size: 30px;
    margin-bottom: 20px;
    color: lightcoral;
`

const DeleteTitle = styled.span`
    color: red;
    font-size: 12px;
    cursor: pointer;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const PP = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`

const PPIcon = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: lightcoral;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    cursor: pointer;
`

const Image = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 20px;
    object-fit: cover;
`

const Label = styled.label`
    font-size: 20px;
    margin-top: 20px;
`

const Input = styled.input`
    color: gray;
    margin: 10px 0;
    height: 30px;
    border: none;
    border-bottom: 1px solid lightgray;
`

const Button = styled.button`
    width: 150px;
    align-self: center;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: teal;
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
`

const Settings = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                <UpdateTitle>Update Ypur Account</UpdateTitle>
                <DeleteTitle>Delete Account</DeleteTitle>
            </Title>
            <Form>
                <Label>Profile Piture</Label>
                <PP>
                    <Image src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                    <Label htmlFor='fileInput'>
                        <PPIcon><i className="fa-solid fa-circle-user"></i></PPIcon>
                    </Label>
                    <Input type={'file'} id={'fileInput'} style={{display: 'none'}} />
                </PP>
                <Label>Username</Label>
                <Input type={'text'} placeholder={'MinhDuc'} />
                <Label>Email</Label>
                <Input type={'email'} placeholder={'minhduc111252@gamil.com'} />
                <Label>Password</Label>
                <Input type={'password'} />
                <Button>Update</Button>
            </Form>
        </Wrapper>
        <Sidebar />
    </Container>
  )
}

export default Settings