import React, {useState} from 'react'
import './index.css'


const books = [
  {title:"Shuggie Bain",
  author:"Douglas Stuart",
  image: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529019292.jpg"},
  {title:"The God of Small Things",
  author:"Arundhati Roy",
  image: "https://assets-eu-01.kc-usercontent.com/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/fc8d7134-edee-4218-b88d-12f62b958678/The%20God%20of%20Small%20Things%20cover.jpg?w=270&h=407&auto=format&bg=%23efefef&fit=crop"},
  {title:"Pride and Prejudice",
  author:"Jane Austen",
  image: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781909621657.jpg"},
  {title:"Don Quixote",
  author:"Miguel de Cervantes",
  image: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781509844760.jpg"},
  {title:"How to Win Friends and Influence People",
  author:"Dale Carnegie",
  image: "https://assets-eu-01.kc-usercontent.com/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/deb7ecfa-73a7-4ef3-bc74-c89e1e606979/How%20to%20Win%20Friends%20and%20Influence%20People.jpg?w=270&h=438&auto=format&bg=%23efefef&fit=crop"}
]

function Books() {

  return (
    <div className="bookList">
      <Book title={books[0].title} image={books[0].image} author={books[0].author} />
      <Book title={books[1].title} image={books[1].image} author={books[1].author} />
      <Book title={books[2].title} image={books[2].image} author={books[2].author} />
      <Book title={books[3].title} image={books[3].image} author={books[3].author} />
      <Book title={books[4].title} image={books[4].image} author={books[4].author} /> 
     
    </div>
  )
}

function Book({title, image, author}) {

  
  const[likes, setLikes] = useState(0)

    function handleLikes() {
        setLikes((likes) => likes+1)
    }
    return (
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <small>{author}</small><br></br><br></br>
            <button className="button" onClick={handleLikes}>Likes: {likes}</button>
        </div>
    )
}

export default Books
