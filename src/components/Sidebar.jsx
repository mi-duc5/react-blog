import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 3;
    margin: 20px;
    padding-bottom: 30px;
    background-color: #fdfbfb;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.span`
  margin: 10px;
  padding: 5px;
  width: 80%;
  border-top: 1px solid #a7a4a4;
  border-bottom: 1px solid #a7a4a4;
  font-family: 'Varela Round', sans-serif;
  font-size: 12px;
  color: #222;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
`

const Image = styled.img`
  margin-top: 15px;
`

const Desc = styled.p`
  padding: 30px;
`

const List = styled.ul`
  list-style: none;
  margin-bottom: 30px;
`

const ListItem = styled.li`
  display: inline-block;
  width: 50%;
  margin-top: 15px;
  cursor: pointer;
`

const Social = styled.div`
  margin-top: 15px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Icon = styled.div`
  font-size: 15px;
  margin-left: 10px;
  cursor: pointer;
`

const Sidebar = () => {
  return (
    <Container>
        <SidebarItem>
          <Title>ABOUT ME</Title>
          <Image src='https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg' />
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis minima corrupti laborum quibusdam facilis sit tenetur, optio sunt accusamus maxime officia saepe ipsam architecto asperiores natus velit animi dolore?</Desc>
        </SidebarItem>
        <SidebarItem>
          <Title>CATEGORIES</Title>
          <List>
            <ListItem>Life</ListItem>
            <ListItem>Music</ListItem>
            <ListItem>Style</ListItem>
            <ListItem>Sport</ListItem>
            <ListItem>Tech</ListItem>
            <ListItem>Cinema</ListItem>
          </List>
        </SidebarItem>
        <SidebarItem>
          <Title>FOLLOW US</Title>
          <Social>
            <Icon><i className="fa-brands fa-facebook"></i></Icon>
            <Icon><i className="fa-brands fa-twitter"></i></Icon>
            <Icon><i className="fa-brands fa-pinterest"></i></Icon>
            <Icon><i className="fa-brands fa-instagram-square"></i></Icon>
          </Social>
        </SidebarItem>
    </Container>
  )
}

export default Sidebar