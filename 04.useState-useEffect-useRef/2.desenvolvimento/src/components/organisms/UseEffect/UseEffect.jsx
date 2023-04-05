import { useState, useEffect } from 'react'
import { Text } from '../../atoms'

export default function UseEffect() {
  const [posts, setPosts] = useState([])
  console.log({ posts })

  useEffect(() => {
    fetch('http://localhost:3004/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, [])

  return (
    <section className="UseEffect">
      <Text subtitle="useEffect" />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </section>
  )
}
