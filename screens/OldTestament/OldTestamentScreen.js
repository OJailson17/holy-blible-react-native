import React from "react";
import { useContext } from "react";
import { BookList } from "../../components/BookList/BookList";
import { GlobalContext } from "../../context/GlobalContext";

export const OldTestamentScreen = ({ navigation }) => {
  const { books } = useContext(GlobalContext);
  const pentateucoBooks = [];
  const historicosBooks = [];
  const poeticosBooks = [];
  const pMaioresBooks = [];
  const pMenoresBooks = [];
  const dataList = [];

  const oldTestamentBooks = books.filter((book) => book.testament === "VT");

  const pentateuco = oldTestamentBooks.map((book) =>
    book.group === "Pentateuco"
      ? pentateucoBooks.push({ name: book.name, abbrev: book.abbrev.pt })
      : null
  );

  const historicos = oldTestamentBooks.map((book) =>
    book.group === "Históricos"
      ? historicosBooks.push({ name: book.name, abbrev: book.abbrev.pt })
      : null
  );
  const poeticos = oldTestamentBooks.map((book) =>
    book.group === "Poéticos"
      ? poeticosBooks.push({ name: book.name, abbrev: book.abbrev.pt })
      : null
  );
  const pMaiores = oldTestamentBooks.map((book) =>
    book.group === "Profetas maiores"
      ? pMaioresBooks.push({ name: book.name, abbrev: book.abbrev.pt })
      : null
  );
  const pMenores = oldTestamentBooks.map((book) =>
    book.group === "Profetas menores"
      ? pMenoresBooks.push({ name: book.name, abbrev: book.abbrev.pt })
      : null
  );

  const booksData = [
    {
      group: "Pentateuco",
      data: pentateucoBooks.map((el) => el.name),
      abbrev: pentateucoBooks.map((el) => el.abbrev),
    },
    {
      group: "Históricos",
      data: historicosBooks.map((el) => el.name),
      abbrev: historicosBooks.map((el) => el.abbrev),
    },
    {
      group: "Poéticos",
      data: poeticosBooks.map((el) => el.name),
      abbrev: poeticosBooks.map((el) => el.abbrev),
    },
    {
      group: "Profetas Maiores",
      data: pMaioresBooks.map((el) => el.name),
      abbrev: pMaioresBooks.map((el) => el.abbrev),
    },
    {
      group: "Profetas Menores",
      data: pMenoresBooks.map((el) => el.name),
      abbrev: pMenoresBooks.map((el) => el.abbrev),
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
