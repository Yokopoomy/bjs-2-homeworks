// Задание №1

class PrintEditionItem{
 constructor(name, releaseDate, pagesCount){
  this.name = name;
  this.releaseDate = releaseDate;
  this.pagesCount = pagesCount;
  this._state = 100;
  this.type = null;
 }
 
 set state(value){
  if(value <= 0){
   this._state = 0;
  }else if(value >= 100){
   this._state = 100;
  }else{
   this._state = value;
  }
 }

 get state(){
  return this._state;
 }

 fix(){
  let newState = this._state * 1.5;
  this.state = newState;
 }
}

class Magazine extends PrintEditionItem{
 constructor(name, releaseDate, pagesCount){
  super(name, releaseDate, pagesCount);
  this.type = "magazine";
 }
}

class Book extends PrintEditionItem{
 constructor(author, name, releaseDate, pagesCount){
  super(name, releaseDate, pagesCount);
  this.author = author;
  this.type = "book";
 }
}

class NovelBook extends Book{
 constructor(author, name, releaseDate, pagesCount){
  super(author, name, releaseDate, pagesCount);
  this.type = "novel";
 }
}

class FantasticBook extends Book{
 constructor(author, name, releaseDate, pagesCount){
  super(author, name, releaseDate, pagesCount);
  this.type = "fantastic";
 }
}

class DetectiveBook extends Book{
 constructor(author, name, releaseDate, pagesCount){
  super(author, name, releaseDate, pagesCount);
  this.type = "detective";
 }
}

// Задание №2

class Library{
 constructor(name){
  this.name = name;
  this.books = [];
 }

 addBook(book){
  if(book.state > 30){
   this.books.push(book);
  }
 }

 findBookBy(type, value){
  for(let i = 0; i < this.books.length; i++){
   if(this.books[i][type] === value){
    return this.books[i];
   }
  }
  return null;
 }

 giveBookByName(bookName){
  for(let i = 0; i < this.books.length; i++){
   if(this.books[i].name === bookName){
    let currentBook = this.books[i];
    this.books.splice(i, 1);
    return currentBook;
   }
  }
  return null;
 }
}

// Задание №3 *

class Student{
 constructor(name){
  this.name = name;
  this.marks = {};
 }

 addMark(value, subjName){
  if(value >=2 || value <= 5){
   if(this.marks[subjName]){
    this.marks[subjName].push(value);
   }else{
    this.marks[subjName] = [value];
   }
  }
 }

 getAverageBySubject(subjName){
  if(this.marks[subjName]){
   let result = this.marks[subjName].reduce(function(sum, current) {
    return sum + current;
   });
   return result/this.marks[subjName].length;
  }else{
   return 0;
  }
 }

 getAverage(){
  let subjName = Object.values(this.marks);
  console.log(subjName);
  let summ = 0;
  let counter = 0;
  for (let i = 0; i < subjName.length; i++) {
   for (let k = 0; k < subjName[i].length; k++){
    summ += subjName[i][k];
    counter++;
   }
  }
  let average = summ/counter;
  return average;
 }
}