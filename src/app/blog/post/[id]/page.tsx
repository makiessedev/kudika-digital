
type Slug = {
  params: {
    id: string
  }
}

type Post = {
  props: {
    title: string,
    content: string,
    description: string
  }
}

export default async function index({ params }: Slug) {
  const response = await fetch(`http://localhost:3000/post/${params.id}`)
  const post: Post = await response.json()  

  console.log(post)

  return (
    <section
      className="px-6 lg:px-20 pt-28"
    >
      <h1
        className="font-black text-7xl text-gray-500/30 uppercase"
      >
        blog
      </h1>
      <p
        className="font-bold text-3xl text-gray-500/30"
      >Fique ligado aos nossos artigos</p>
      <section
        className="pt-20"
      >
        <h3>{post.props.title}</h3>
        <p>
          { post.props.content }
        </p>
      </section>
    </section>
  )
}