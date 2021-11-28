import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const images = {
    "cat": "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d",
    "dog": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    "bababooey": "https://www.voicy.network/Content/Clips/Images/85e733bb-469e-4fcd-9898-634f54315650-small.jpg",
    "bruh": "https://c.tenor.com/KlCYzllf0J0AAAAd/bruh.gif",
    "dawg": "https://external-preview.redd.it/fX-BW8AT4MiiVpu9TzKk9EsOYNqpIrljDD5gao07V4k.jpg?auto=webp&s=f0e8bfa3676f55c6e5657c412ded98dafbad4f5f",
    "beans": "https://i.pinimg.com/474x/92/62/3b/92623baf166d9faf2e77fecd355a0545.jpg",
    "aang": "https://preview.redd.it/8kpwuq79h4851.jpg?auto=webp&s=fd50d6f2d0d4da2e55f636733c73153ff9789ae6"
  }
  const [image, setImage] = useState();
  return (
    <div className="App">
      <h1>Type into the textbox below if you want to, idk idc</h1>
      <header className="App-header">
        <input type="text" style={{ width: "200px", height: "50px", fontFamily: "Comic Sans MS", fontSize: "30px", marginBottom: "10px" }} onChange={(event) => setImage(event.target.value)} />
        <img style={{ backgroundSize: "contain", height: "400px", width: "auto" }} src={images[image]} />
      </header>
    </div>
  );
}

export default App;
