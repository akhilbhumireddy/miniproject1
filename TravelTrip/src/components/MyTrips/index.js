import React, {useState, useEffect} from 'react'
import Header from '../Header'

const MyTrips = ({details, prevStep}) => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(details),
          },
        )

        const data = await response.json()
        setPosts(data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div>
      <Header />
      <main>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {posts.length === 0 ? (
              <div>
                <h1>No posts available</h1>
              </div>
            ) : (
              <div>
                <h1>Posts</h1>
                <ul>
                  {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}

export default MyTrips
