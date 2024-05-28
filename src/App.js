import './App.css';
import Rating from './components/Rating';

const sampleRatings = [
  {
    name: "John",
    rate: 4,
    content: "Great product! Really satisfied with my purchase."
  },
  {
    name: "Alice",
    rate: 5,
    content: "Awesome service! Will definitely recommend to friends."
  },
  {
    name: "Bob",
    rate: 3,
    content: "Good, but could be better."
  },
  {
    name: "Emily",
    rate: 2,
    content: "Not impressed. Would not buy again."
  },
  {
    name: "David",
    rate: 5,
    content: "Excellent quality! Very happy with it."
  }
];

function App() {
  return (
    <div>
      {sampleRatings.map((rating, index) => (
        <Rating
          key={index}
          name={rating.name}
          rate={rating.rate}
          content={rating.content}
        />
      ))}
    </div>
  );
}

export default App;
