import React from "react";

// BOOK COMPONENT - this will be passed down to the BookList component at the top
const Book = ({ img, title, author }) => {
  // you can destructure each prop so you don't have to write props.title, etc
  // const { img, title, author } = props;
  const clickHandler = () => {
    alert("BOOM");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="Book Cover for If Animals Kissed Goodnight " />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference exmaple
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
