import React, { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState("sl");
  const [chapter, setChapter] = useState("1");
  const [verseNum, setVerseNum] = useState("1");

  return (
    <GlobalContext.Provider
      value={{
        books,
        setBooks,
        book,
        setBook,
        chapter,
        setChapter,
        verseNum,
        setVerseNum,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
