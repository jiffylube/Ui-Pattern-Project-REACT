import './App.css';
import Card from './Contents/Card.jsx' 
import Modal from './Contents/Modal/Modal.jsx';
import Nav from './Contents/Nav.jsx'
import { useEffect, useState } from "react";

function App() {

  // fetch components
  const url = 'https://uselessfacts.jsph.pl/random.json?language=en'
  const url2 = 'https://api.chucknorris.io/jokes/random'
  const [link, setLink] = useState("Useless Fact");
  const [joke, setJoke] = useState("Joke Loading");

  useEffect(() => {
    fetch(url)
      .then(response =>
        response.json())
      .then(result =>
        setLink(result.text))
    fetch(url2)
      .then(response =>
        response.json())
      .then(result =>
        setJoke(result.value)
        // console.log(result.value)
      )
  }, [])

  // Modal
  const [display, setDisplay] = useState(false);

  function openModal() {
    // console.log('Card clicked, open modal');
    setDisplay(true)
  }
  function closeModal() {
    // console.log('Modal backdrop clicked, close modal')
    setDisplay(false)
  }

  return (
    <div className="App">
      <Nav />

      {display && <Modal closeModal={closeModal} joke = {joke}/>}
      
      <div className="BoxForCards">
        <Card link={link} clickCard={openModal}/>
        <Card link={link} clickCard={openModal}/>
        <Card link={link} clickCard={openModal}/>
        <Card link={link} clickCard={openModal}/>
      </div>
    </div> 
  );
}

export default App;
