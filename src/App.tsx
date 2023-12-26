import Post from "./Post"

function App() {
  return (
    <div>
      <Post 
        author="John Doe"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
        />
      <Post
        author="Jane Doe"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
      />
    </div>
  )
}

export default App
