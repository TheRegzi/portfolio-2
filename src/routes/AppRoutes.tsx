import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Article from '../pages/Article'

/**
 * AppRoutes component that defines the main routing structure for the application, including all core routes with their corresponding pages.
 * Uses nested <Routes> and <Route> from react-router-dom.
 *
 * @returns {JSX.Element} The rendered route structure.
 */
const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="article/:id" element={<Article />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes

export interface ArticleParams {
  id: string
}
