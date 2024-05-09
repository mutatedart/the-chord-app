import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="nav">
          <h1>theChord.app</h1>
          <h4>by musicians for musicians</h4>
          <a href="#" target=""><button class="nav-button">Songs</button></a>
          <a href="#" target=""><button class="nav-button">Sets</button></a>
          <a href="#" target=""><button class="nav-button">Login</button></a>
          <a href="#" target=""><button class="nav-button">Signup</button></a>
        </div>
        <div className="container">
          <div className="paragraph">
            Welcome! Here's how you can get started:
          </div>
          <div className="paragraph">
            Click or Tap on the "Songs" button above to see what songs are in your
            library, or get started building songs to add to your sets. Songs hold
            sections, like the chorus, bridge, solo, or verse.
          </div>
          <div className="paragraph">
            Click or Tap on the "Sets" button above in order to view or edit the
            sets you've created. You can add or remove songs from sets, and name
            them whatever you want, though we'd recommend something that will help
            you recall what the set was for to begin with.
          </div>
          <div className="paragraph">
            If you have questions or need support, please contact us by clicking the button below. Please
            keep in mind that this is a tiny team, so it may take some time to
            respond or investigate any issues you have.
            <a href="mailto:contact@thechord.app" target="_blank"><button className="btn">Contact</button></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
