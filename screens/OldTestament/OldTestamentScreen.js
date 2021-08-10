import React from "react";
import { useContext } from "react";
import { BookList } from "../../components/BookList/BookList";
import { GlobalContext } from "../../context/GlobalContext";

export const OldTestamentScreen = () => {
  const { books } = useContext(GlobalContext);
  const pentateucoBooks = [];
  const historicosBooks = [];
  const poeticosBooks = [];
  const pMaioresBooks = [];
  const pMenoresBooks = [];
  const dataList = [];

  const oldTestamentBooks = books.filter((book) => book.testament === "VT");

  const pentateuco = oldTestamentBooks.map((book) =>
    book.group === "Pentateuco" ? pentateucoBooks.push(book.name) : null
  );

  const historicos = oldTestamentBooks.map((book) =>
    book.group === "Históricos" ? historicosBooks.push(book.name) : null
  );
  const poeticos = oldTestamentBooks.map((book) =>
    book.group === "Poéticos" ? poeticosBooks.push(book.name) : null
  );
  const pMaiores = oldTestamentBooks.map((book) =>
    book.group === "Profetas maiores" ? pMaioresBooks.push(book.name) : null
  );
  const pMenores = oldTestamentBooks.map((book) =>
    book.group === "Profetas menores" ? pMenoresBooks.push(book.name) : null
  );

  const booksData = [
    {
      group: "Pentateuco",
      data: pentateucoBooks,
    },
    {
      group: "Históricos",
      data: historicosBooks,
    },
    {
      group: "Poéticos",
      data: poeticosBooks,
    },
    {
      group: "Profetas Maiores",
      data: pMaioresBooks,
    },
    {
      group: "Profetas Menores",
      data: pMenoresBooks,
    },
  ];

  for (let i = 0; i < booksData.length; i++) {
    dataList.push({
      title: booksData[i].group,
      data: booksData[i].data,
    });
  }

  return (
    <>
      <BookList books={dataList} />
    </>
  );
};
