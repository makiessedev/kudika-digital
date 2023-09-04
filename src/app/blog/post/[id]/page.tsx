
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
  const response = await fetch(`http://localhost:3000/post/${params.id}`, {
    next: {
      revalidate: 5
    }
  })
  const post: Post = await response.json()  

  console.log(post)

  return (
    <section
      className="md:flex md:flex-col md:items-center px-6 lg:px-20 pt-28"
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
        className="pt-10 md:pt-20 space-y-4 max-w-3xl"
      >
        <h3
          className="font-bold text-gray-500 text-2xl"
        >{post.props.title}</h3>
        <p
          className="font-normal text-base md:text-lg text-gray-500/60"
        >
          { post.props.description }
        </p>
        <p
          className="font-normal text-base md:text-lg text-gray-500/90"
        >
          { post.props.content }
        </p>
      </section>
    </section>
  )
}

