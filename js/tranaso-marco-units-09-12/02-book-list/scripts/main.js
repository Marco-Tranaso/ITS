let books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false,
      url: 'https://covers.openlibrary.org/b/id/9281234-L.jpg'
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
      url: 'https://covers.openlibrary.org/b/id/8244151-L.jpg'
    },
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      alreadyRead: true,
      url: 'https://covers.openlibrary.org/b/id/7100936-L.jpg'
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      alreadyRead: false,
      url: 'https://covers.openlibrary.org/b/id/9872471-L.jpg'
    }
  ];
  
  const ul = document.createElement("ul");
  
  books.forEach(book => {
    const li = document.createElement("li");
    const text = document.createElement("p");
    text.textContent = `${book.title} by ${book.author}`;
    const img = document.createElement("img");
    img.src = book.url;
    img.width = 100;
    if (book.alreadyRead) {
      li.style.backgroundColor = "#d4edda";
      li.className = "read";
    } else {
      li.style.backgroundColor = "#f8d7da";
      li.className = "not-read";
    }
    li.appendChild(text);
    li.appendChild(img);
    ul.appendChild(li);
  });
  
  document.body.appendChild(ul);
  
  setTimeout(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "styles.css";
    document.head.appendChild(link);
  }, 5000);
  