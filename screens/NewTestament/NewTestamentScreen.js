import React from "react";
import { useContext } from "react";
import { BookList } from "../../components/BookList/BookList";
import { GlobalContext } from "../../context/GlobalContext";

export const NewTestamentScreen = ({ navigation }) => {
  const { books, book, setBook } = useContext(GlobalContext);
  const cartasBooks = [];
  const evangelhosBooks = [];
  const revelaçõesBooks = [];
  const historicoBooks = [];
  const dataList = [];

  const newTestamentBooks = books.filter((book) => book.testament === "NT");

  const evangelhos = newTestamentBooks.map((book) =>
    book.group === "Evangelhos"
      ? evangelhosBooks.push({ name: book.name, abbrev: book.abbrev.pt })
      : null
  );
  const cartas = newTestamentBooks.map((book) =>
    book.group === "Cartas"
      ? cartasBooks.push({ name: book.name, abbrev: book.abbrev.pt })
      : null
  );
  const revelações = newTestamentBooks.map((book) =>
    book.group === "Revelações"
      ? revelaçõesBooks.push({ name: book.name, abbrev: book.abbrev.pt })
      : null
  );
  const historicos = newTestamentBooks.filter((book) =>
    book.group === "Histórico"
      ? historicoBooks.push({ name: book.name, abbrev: book.abbrev.pt })
      : null
  );

  const booksData = [
    {
      group: "Evangelhos",
      data: evangelhosBooks.map((el) => el.name),
      abbrev: evangelhosBooks.map((el) => el.abbrev),
    },
    {
      group: "Cartas",
      data: cartasBooks.map((el) => el.name),
      abbrev: cartasBooks.map((el) => el.abbrev),
    },
    {
      group: "Revelações",
      data: revelaçõesBooks.map((el) => el.name),
      abbrev: revelaçõesBooks.map((el) => el.abbrev),
    },
    {
      group: "Histórico",
      data: historicoBooks.map((el) => el.name),
      abbrev: historicoBooks.map((el) => el.abbrev),
    },
  ];

  for (let i = 0; i < booksData.length; i++) {
    dataList.push({
      title: booksData[i].group,
      data: booksData[i].data,
      abbrev: booksData[i].abbrev,
    });
  }

  return (
    <>
      <BookList books={dataList} navigation={navigation} />
    </>
  );
};
