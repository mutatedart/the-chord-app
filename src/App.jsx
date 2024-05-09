import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="nav">
          <h2>theChord.app</h2>
          <h4>by musicians for musicians</h4>
          <a href="#" target=""><button class="nav-button">Songs</button></a>
          <a href="#" target=""><button class="nav-button">Sets</button></a>
          <a href="#" target=""><button class="nav-button">Login</button></a>
          <a href="#" target=""><button class="nav-button">Signup</button></a>
        </div>
        <div className="container">
          <div className="paragraph">
            Welcome fellow musician! Here's a quick guide to getting started:
          </div>
          <div className="paragraph">
            <h4>ACCOUNT</h4>
            First, create an account by clicking or tapping on Signup if you have
            not made an account already. If you have, click or tap on Login in order
            to access your song library and sets.
          </div>
          <div className="paragraph">
            <h4>SONGS</h4>
            Click or tap on the "Songs" button above to see what songs are in your
            library, or get started building songs to add to your sets. Songs hold
            sections like the chorus, bridge, solo, or verse.
          </div>
          <div className="paragraph">
            <h4>SETS</h4>
            Click or Tap on the "Sets" button above in order to view or edit the
            sets you've created. You can add or remove songs from sets, and name
            them whatever you want, though we'd recommend something that will help
            you recall what the set was created for initially.
          </div>
          <div className="paragraph">
            <h4>HELP</h4>
            If you have questions or need support, feel free to contact us by clicking the button below. Please
            keep in mind that this is a tiny team of one, so it may take some time to
            respond or investigate any issues you have.
            <div className="paragraph">
              <a href="mailto:contact@thechord.app" target="_blank"><button className="btn">Contact</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
