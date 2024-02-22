import { useState } from 'react'
import './App.css'

function App() {
  const [followers, setFollowers] = useState(80)
  const [likes, setLikes] = useState(803);
  const [photos, setPhotos] = useState(1.4);

  return (
    <>
      <Card followers={followers} likes={likes} photos={photos}></Card>
    </>
  )
}

function Card(props) {
  return <div class = "card-container">
    <div class="card">
      <img class ="image1" src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      <div class="image-div">
        <img class="image2" src= "https://i.pravatar.cc/150?img=68" alt="Avatar"></img>
      </div>
      <div class="container">
        <div class="name"><h4><b>John Doe</b></h4></div>
        <div class="location">London</div>
        <hr></hr>
        <div class="row">
          <div class="col">
            <h2>{props.followers}K</h2>
            <p>Followers</p>
          </div>
          <div class="col">
            <h2>{props.likes}K</h2>
            <p>Likes</p>
          </div>
          <div class="col">
            <h2>{props.photos}K</h2>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default App
