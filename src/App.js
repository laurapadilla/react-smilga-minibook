import "./base.css";
import "./index.css";

// books array
const books = [
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg",
    title: "If Animals Kissed Goodnight",
    author: "Ann Paul",
    id: 1,
  },

  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81LYYbsEPeL._AC_UL200_SR200,200_.jpg",
    title: "The Vanishing Half",
    author: "Brit Bennett",
    id: 2,
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81y4MVuGEvL._AC_UL200_SR200,200_.jpg",
    title: "I am smart, I am Blessed, I can do anything!",
    author: "Alissa Holder",
    id: 3,
  },
];

// BOOK LIST COMPONENT
function BookList() {
  return (
    <section className="booklist">
      {/* iterate over the books array/objects */}
      {books.map((book, index) => {
        return <Book {...book} key={book.id}></Book>;
      })}
    </section>
  );
}

// BOOK COMPONENT - this will be passed down to the BookList component at the top
const Book = ({ img, title, author }) => {
  // you can destructure each prop so you don't have to write props.title, etc
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="Book Cover for If Animals Kissed Goodnight " />
      <h1>{title}</h1>
      <h4>{author}</h4>
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
