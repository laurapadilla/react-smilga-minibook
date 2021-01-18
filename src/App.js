import "./App.css";

// book list component
function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

// book component
const Book = () => {
  return <article>this is a book</article>;
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
