interface PostProps {
  author: string
  content: string
}


function Post(props: PostProps) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  )
}

export default Post
