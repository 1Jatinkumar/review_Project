import { useState } from "react";
import people from "./data";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const nextReview = () => {
    setIndex((index + 1) % people.length);
  };

  const previousReview = () => {
    setIndex((index + (people.length - 1)) % people.length);
  };

  const randomPerson=()=>{
    const randomNumber= Math.floor(Math.random() * people.length );
    if(randomNumber===index){
      setIndex((randomNumber+1)%people.length);
    }else{
      setIndex(randomNumber);
    }
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button onClick={previousReview} className="prev-btn">
            <FaChevronLeft />
          </button>
          <button onClick={nextReview} className="next-btn">
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson} >random</button>
      </article>
    </main>
  );
};
export default App;
