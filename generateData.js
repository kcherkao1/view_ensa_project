const fs = require('fs');
const faker = require('faker');

function generateBooks() {
  let books = [];
  for (let id = 1; id <= 1000; id++) {
    let title = faker.random.words(5);
    let author = faker.name.findName();
    let image = faker.image.imageUrl();

    books.push({
      "id": id,
      "title": title,
      "author": author,
      "image": image,
    });
  }

  return { "data": books };
}

let dataObj = generateBooks();

fs.writeFileSync('books.json', JSON.stringify(dataObj, null, '\t'));
