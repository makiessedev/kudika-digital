import { Container } from './Container'
import { Content } from './Content'
import { Description } from './Description'
import { Header } from './Header'
import { PostContainer } from './PostContainer'
import { Title } from './Title'

type PostProps = {
  props: {
    title: string
    description: string
    content: string
  }
}

export function Post(post: PostProps) {
  return (
    <Container>
      <Header />

      <PostContainer>
        <Title>{post.props.title}</Title>

        <Description>{post.props.description}</Description>

        <Content>{post.props.content}</Content>
      </PostContainer>
    </Container>
  )
}
