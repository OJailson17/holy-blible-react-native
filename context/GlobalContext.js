import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { REACT_APP_API_TOKEN } from "@env";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState("gn");
  const [bookName, setBookName] = useState("");
  const [chapter, setChapter] = useState("1");
  const [qtdChapters, setQtdChapters] = useState("");
  const [verseNum, setVerseNum] = useState("1");
  const [newTestament, setNewTestament] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const getBooks = async () => {
    try {
      const response = await fetch(
        "https://www.abibliadigital.com.br/api/books",
        {
          headers: {
            Authorization: `Bearer ${REACT_APP_API_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        books,
        setBooks,
        book,
        setBook,
        bookName,
        setBookName,
        chapter,
        setChapter,
        verseNum,
        setVerseNum,
        newTestament,
        setNewTestament,
        qtdChapters,
        setQtdChapters,
        isFavorite,
        setIsFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
