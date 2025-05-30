import { useParams } from 'react-router-dom'
import projects from '../../data/projects.json'

function Article() {
  const { id } = useParams()
  const project = projects.find((p) => String(p.id) === id)
  if (!project)
    return <div className="text-center text-red-500">Article not found.</div>

  return (
    <>
      <h1>{project.title}</h1>
    </>
  )
}

export default Article
