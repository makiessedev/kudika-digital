import { data } from 'autoprefixer'
import { Container } from './Container'
import { Content } from './Content'
import { Description } from './Description'
import { Header } from './Header'
import { PostContainer } from './PostContainer'
import { Title } from './Title'

type Post = {
  title: string,
  description: string,
  content: string
}

type PostProps = {
  data: Post
}

export function Post({data}: PostProps) {
  return (
    <Container>
      <Header />

      <PostContainer>
        <Title>{data.title}</Title>

        <Description>{data.description}</Description>

        <Content content={data.content} />
      </PostContainer>
    </Container>
  )
}
