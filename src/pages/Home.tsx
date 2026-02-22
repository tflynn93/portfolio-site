import { useEffect } from 'react'

export function Home() {
  useEffect(() => {
    document.title = 'Timothy Flynn | Home'
  }, [])

  return (
    <div className="page-content">
      <h2>Welcome</h2>
      <p>Hi, I'm Timothy Flynn. This is my portfolio site showcasing my professional work and passion for wildlife photography.</p>
    </div>
  )
}
