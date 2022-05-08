import React from 'react'
import styled from 'styled-components'
import Posts from '../components/Posts'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'


const Container = styled.div`
  display: flex;
`
const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Posts />
        <Sidebar />
      </Container>
    </>
  )
}

export default Home