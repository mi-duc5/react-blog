import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 385px;
  margin: 0px 25px 40px 25px;
`

const Image = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 7px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Cats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Cat = styled.div`
  font-family: 'Varela Round', sans-serif;
  font-size: 11px;
  color: #be9656;
  line-height: 20px;
  margin-top: 15px;
  margin-right: 10px;
  cursor: pointer;
`
const Title = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-top: 15px;
  cursor: pointer;
`
const Date = styled.div`
  font-family: 'Lora', sans-serif;
  font-style: italic;
  font-size: 13px;
  color: #999;
  margin-top: 15px;
`

const Desc = styled.p`
  font-family: 'Varela Round', sans-serif;
  font-size: 14px;
  color: #444;
  line-height: 24px;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis; /* Dấu chấm lửng */
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

const Post = () => {
  return (
    <Container>
      <Image src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
      <Info>
        <Cats>
          <Cat>Music</Cat>
          <Cat>Life</Cat>
        </Cats>
        <Title>Lorem, ipsum dolor sit amet</Title>
        <hr/>
        <Date>1 hour age</Date>
      </Info>
      <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum magni ipsum unde ad, sunt fugit dolore, nisi fuga suscipit maxime inventore obcaecati illum error ullam repudiandae veritatis, vero eveniet a.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt deserunt vero eos quae doloremque voluptates illum autem molestiae nemo ab. Vero id quaerat quod, reiciendis laboriosam vitae corrupti animi eligendi.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus inventore itaque ad eius possimus dolorum minima quia saepe impedit sequi, iure totam, sapiente nisi aliquid ea consequatur et nam adipisci!
      </Desc>
    </Container>
  )
}

export default Post