// Dummy data only. Not real books, not Labari content.

const dummyBooks = [
  {
    id: 1,
    title: "Notes from the Morning Bus",
    author: "Hanna Bekele",
    language: "en",
    available: true,
  },
  {
    id: 2,
    title: "Market Day in Hawassa",
    author: "Yonas Alemayehu",
    language: "en",
    available: true,
  },
  {
    id: 3,
    title: "Ye Ketema Dimts",
    author: "Mekdes Tadesse",
    language: "am",
    available: false,
  },
  {
    id: 4,
    title: "Two Rooms and a Radio",
    author: "Samuel Girma",
    language: "en",
    available: true,
  },
];

function listAvailable(books) {
  return books.filter(function (book) {
    return book.available === true;
  });
}

function listByLanguage(books, language) {
  return books.filter(function (book) {
    return book.language === language;
  });
}

function printBooks(label, books) {
  console.log(label);
  books.forEach(function (book) {
    const status = book.available ? "available" : "not available";
    console.log("- " + book.title + " / " + book.author + " / " + status);
  });
  console.log("");
}

printBooks("All dummy books", dummyBooks);
printBooks("Available only", listAvailable(dummyBooks));
printBooks("Amharic only", listByLanguage(dummyBooks, "am"));
