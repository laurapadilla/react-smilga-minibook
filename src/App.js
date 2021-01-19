import "./base.css";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

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

// main app component
function App() {
  return (
    <div>
      <BookList />
    </div>
  );
}

export default App;
