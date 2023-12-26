import React, { Fragment } from "react";
import ReactDom from "react-dom/client";

//* css
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDom.createRoot(document.getElementById("root"));
//* set up all Variable
const firstBook = {
  title: "The Spanish Daughter",
  author: "Kaka Rith",
  image:
    "https://m.media-amazon.com/images/I/81Sz9ssnZZL._AC_UL480_FMwebp_QL65_.jpg",
};

const secondBook = {
  title: "Hitler Supremcy",
  author: "Homie from Ol' Town",
  image:
    "https://m.media-amazon.com/images/I/71NtQzFmfrL._AC_UL480_FMwebp_QL65_.jpg",
};

function Booklists() {
  return (
    <Fragment>
      <h5 className="bg-dark text-center">WELCOME TO MY BOOKSTORE</h5>

      <section className="d-flex row booklist justify-content-center w-100">
        <Book
          img={firstBook.image}
          author={firstBook.author}
          title={firstBook.title}
        />
        <Book
          img={secondBook.image}
          author={secondBook.author}
          title={secondBook.title}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            eaque maiores, natus consequatur saepe placeat rem impedit
            reprehenderit asperiores commodi.
          </p>
        </Book>
      </section>
    </Fragment>
  );
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className="col-2 p-3 book">
      <img className="img-fluid rounded image-book" src={img} alt="" />
      {children}
      <h2 className="text-start">{title}</h2>
      <h5>{author.toUpperCase()}</h5>
    </article>
  );
};

root.render(<Booklists />);
