import { Container } from './Container'
import { Content } from './Content'
import { Description } from './Description'
import { Header } from './Header'
import { PostContainer } from './PostContainer'
import { Title } from './Title'

type PostProps = {
  data: {
    title: string
    description: string
    content: string
}
}

export function Post(post: any) {
  console.log(JSON.stringify(post, null, 2))
  return (
    <Container>
      <Header />

      <PostContainer>
        <Title>{post.data.data.title}</Title>

        <Description>{post.data.data.description}</Description>

        <Content>{post.data.data.content[0].text}</Content>
      </PostContainer>
    </Container>
  )
}
