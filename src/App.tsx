import './App.css'

function App() {
  return (
    <div className="app">
      <div className="background-section">
        <div className="background-image"></div>
        <div className="gradient-overlay"></div>
      </div>
      
      <div className="content">
        <div className="profile-section">
          <div className="avatar">
            <img src="https://via.placeholder.com/200x200/333/fff?text=頭貼" alt="Profile" />
          </div>
          
          <h1 className="name">你的名字</h1>
          
          <div className="social-links">
            <a href="#" className="social-link" aria-label="GitHub">
              <span>GitHub</span>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <span>LinkedIn</span>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <span>Twitter</span>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <span>Instagram</span>
            </a>
            <a href="#" className="social-link" aria-label="Email">
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
