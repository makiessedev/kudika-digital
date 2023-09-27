import { data } from 'autoprefixer'
import { Container } from './Container'
import { Content } from './Content'
import { Description } from './Description'
import { Header } from './Header'
import { PostContainer } from './PostContainer'
import { Title } from './Title'
import  Link  from 'next/link'

type Post = {
  title: string,
  description: string,
  content: string,
  author: string,
  authorUrl: string | null
}

type PostProps = {
  data: Post
}

export function Post({data}: PostProps) {
  return (
    <Container>
      <Header />
      <Link 
        className='text-base font-normal text-gray-500/60 md:text-lg' 
        href={data.authorUrl ?? '/#'}
      >
        <cite>*Escrito por {data.author}</cite>
      </Link>
      <PostContainer>
        <Title>{data.title}</Title>

        <Description>{data.description}</Description>

        <Content content={data.content} />
      </PostContainer>
    </Container>
  )
}
