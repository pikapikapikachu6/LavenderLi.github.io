import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeContext, useThemeProvider } from './hooks/useTheme'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import SideNav from './components/ui/SideNav'
import ScrollToTop from './components/ui/ScrollToTop'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPostPage from './pages/BlogPostPage'

export default function App() {
  const themeCtx = useThemeProvider()

  return (
    <ThemeContext.Provider value={themeCtx}>
      <BrowserRouter basename="/LavenderLi.github.io">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <SideNav />
          <ScrollToTop />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}
