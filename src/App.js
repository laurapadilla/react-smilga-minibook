import "./base.css";
import "./index.css";

// BOOK LIST COMPONENT
function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

// set up variables
const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg",
  title: "If Animals Kissed Goodnight",
  author: "Ann Paul",
};

const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81LYYbsEPeL._AC_UL200_SR200,200_.jpg",
  title: "The Vanishing Half",
  author: "Brit Bennett",
};

// BOOK COMPONENT - this will be passed down to the BookList component at the top
const Book = ({ img, title, author }) => {
  // you can destructure each prop so you don't have to write props.title, etc
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="Book Cover for If Animals Kissed Goodnight " />
      <h1>{title}</h1>
      <p>{author}</p>
    </article>
  );
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
