import './App.css';
import './style.css';
import mysrcimage from "./imageInSrc.jpg";
import myVideo from './video.mp4';

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Sarah BA</h1>
          <br />
          <img src={mysrcimage} width="900" height="200" alt="hello"/>
          <br />
          <img src="/imageInPublic.jpg" width="1200" height="200" />
        </div>
        <video width={320} height={240} controls>
          <source src={myVideo.mp4} type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
