import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 9;
`

const Wrapper = styled.div`
  padding: 20px;
  padding-right: 0;
`

const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
`

const Title = styled.h1`
  text-align: center;
  margin: 10px;
  font-family: 'Lora', serif;
  font-size: 28px;
`

const PostEdit = styled.div`
  float: right;
  font-size: 16px;
  display: flex;
`

const Icon = styled.div`
  margin-left: 10px;
  cursor: pointer;
`

const Info = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-family: 'Varela Round', sans-serif;
  color: #b39656;
`

const Author = styled.span`
  
`

const Date = styled.span`
  
`

const Desc = styled.p`
  color: #666;
  font-size: 18px;
  line-height: 25px;

  ::first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600px;
  }
`



const SinglePost = () => {
  return (
    <Container>
        <Wrapper>
            <Image src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
            <Title>Lorem ipsum dolor sit amet
              <PostEdit>
                <Icon style={{color: 'teal'}}><i className="fa-solid fa-pen-to-square"></i></Icon>
                <Icon style={{color: 'tomato'}}><i class="fa-solid fa-trash"></i></Icon>
              </PostEdit>
            </Title>
            <Info>
              <Author>Author: <b>Safak</b></Author>
              <Date>1 hour ago</Date>
            </Info>
              <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum delectus, corporis exercitationem ad temporibus minus laboriosam quasi cum hic itaque provident omnis perferendis earum dolore, nisi neque non! Dolorem, asperiores.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dolores eveniet, ducimus harum nam praesentium ipsum soluta rerum dignissimos aliquid totam nostrum, impedit libero. Iste libero eveniet quisquam at ex.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illo magnam, ad nisi, deleniti fuga repudiandae ullam fugit nihil fugiat molestiae adipisci totam? Doloribus quas reiciendis sunt cum possimus accusamus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ad accusamus inventore quibusdam illo nihil exercitationem suscipit quaerat at incidunt dolore amet officia veniam voluptatem molestias, iure illum, sunt dignissimos.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, nihil! Aliquid culpa, doloribus sequi beatae vel at, earum consequuntur rem eligendi aut modi, ea quaerat odit fugiat doloremque nemo quos?
            </Desc>
        </Wrapper>
    </Container>
  )
}

export default SinglePost