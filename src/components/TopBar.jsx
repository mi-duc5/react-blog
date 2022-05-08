import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: white;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  font-family: 'Josefin Sans', sans-serif;
  z-index: 999;
`

const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LeftIcon = styled.div`
  margin-right: 10px;
  font-size: 20px;
  color: #444;
  cursor: pointer;
`

const Center = styled.div`
  flex: 6;
`

const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`

const ListItem = styled.li`
  margin-right: 20px;
  font-size: 10px;
  font-weight: 300;
  cursor: pointer;
`

const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`

const Search = styled.div`
  font-size: 10px;
  color: #666;
  cursor: pointer;
  margin-left: 15px;
`


const TopBar = () => {

  const user = true;

  return (
    <Container>
      <Left>
        <LeftIcon><i className="fa-brands fa-facebook"></i></LeftIcon>
        <LeftIcon><i className="fa-brands fa-twitter"></i></LeftIcon>
        <LeftIcon><i className="fa-brands fa-pinterest"></i></LeftIcon>
        <LeftIcon><i className="fa-brands fa-instagram-square"></i></LeftIcon>
      </Left>
      <Center>
        <List>
          <ListItem><Link className='link' to='/' >HOME</Link></ListItem>
          <ListItem><Link className='link' to='/' >ABOUT</Link></ListItem>
          <ListItem><Link className='link' to='/contact' >CONTACT</Link></ListItem>
          <ListItem><Link className='link' to='/write' >WRITE</Link></ListItem>
          <ListItem>{user && 'LOGOUT'}</ListItem>
        </List>
      </Center>
      <Right>
        { user ? (
          <Image src='https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/133505458_1384562408549233_5148766884302241506_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=FBS-y_wrp00AX-Nt6Eg&tn=yl0Ug6MabY528Wjx&_nc_ht=scontent.fhan3-2.fna&oh=00_AT8e-MfYjvcJPtOA8p674h5zDMMORpXfAgDSzuIhA59RDg&oe=629C2EE9' />
        ) : (
          <>
            <List>
              <ListItem><Link className='link' to='/login' >LOGIN</Link></ListItem>
              <ListItem><Link className='link' to='/register' >REGISTER</Link></ListItem>
            </List>
          </>
        )
        }
        <Search><i className="fa-solid fa-magnifying-glass"></i></Search>
      </Right>
    </Container>
  )
}

export default TopBar

