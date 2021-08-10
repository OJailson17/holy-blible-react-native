import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { BookList } from "../../components/BookList/BookList";
import { GlobalContext } from "../../context/GlobalContext";

export const NewTestamentScreen = () => {
  const { books } = useContext(GlobalContext);
  const cartasBooks = [];
  const evangelhosBooks = [];
  const revelaçõesBooks = [];
  const historicoBooks = [];
  const dataList = [];

  const newTestamentBooks = books.filter((book) => book.testament === "NT");

  const evangelhos = newTestamentBooks.map((book) =>
    book.group === "Evangelhos" ? evangelhosBooks.push(book.name) : null
  );
  const cartas = newTestamentBooks.map((book) =>
    book.group === "Cartas" ? cartasBooks.push(book.name) : null
  );
  const revelações = newTestamentBooks.map((book) =>
    book.group === "Revelações" ? revelaçõesBooks.push(book.name) : null
  );
  const historicos = newTestamentBooks.filter((book) =>
    book.group === "Histórico" ? historicoBooks.push(book.name) : null
  );

  const booksData = [
    {
      group: "Evangelhos",
      data: evangelhosBooks,
    },
    {
      group: "Cartas",
      data: cartasBooks,
    },
    {
      group: "Revelações",
      data: revelaçõesBooks,
    },
    {
      group: "Histórico",
      data: historicoBooks,
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
