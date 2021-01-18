import "./base.css";
import "./index.css";

// CSS

// book list component
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

// book component
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg"
      alt="Book Cover for If Animals Kissed Goodnight "
    />
  );
};

const Title = () => {
  return <h1>If Animals Kissed Goodnight</h1>;
};

const Author = () => {
  return <p>Ann Paul</p>;
};

// main app component
function App() {
  return (
    <div>
      <BookList />
    </div>
  );
}

export default App;
