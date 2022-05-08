import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding-top: 60px;
`

const Image = styled.img`
    margin-left: 150px;
    width: 70vw;
    height: 250px;
    border-radius: 10px;
    object-fit: cover;
`

const Form = styled.form`
    position: relative;
`

const FormGroup = styled.div`
    margin-left: 150px;
    display: flex;
    align-items: center;
`

const Icon = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: rgb(121, 118, 118);
    cursor: pointer;
`

const Input = styled.input`
    font-size: 30px;
    border: none;
    padding: 20px;
    width: 70vw;

    :focus {
        outline: none;
    }
`

const Text = styled.textarea`
    font-size: 20px;
    border: none;
    height: 100vh;

    :focus {
        outline: none;
    }
`

const Button = styled.button`
    position: absolute;
    top: 20px;
    right: 50px;
    color: white;
    background-color: teal;
    padding: 10x;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
`

const Write = () => {
  return (
    <Container>
        <Image src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
        <Form>
            <FormGroup>
                <label htmlFor='fileInput'>
                    <Icon><i class="fa-solid fa-plus"></i></Icon>
                </label>
                <Input type={'file'} id={'fileInput'} style={{display: 'none'}} />
                <Input type={'text'} placeholder='Title' autoFocus={true} />
            </FormGroup>
            <FormGroup>
                <Text placeholder='Tell your story...' type='text'></Text>
            </FormGroup>
            <Button>Publish</Button>
        </Form>
    </Container>
  )
}

export default Write