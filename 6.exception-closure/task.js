// Задание №1

function parseCount(string){
 let value = parseFloat(string);
 if (isNaN(value)) {
  throw new Error('Невалидное значение');
 } else {
  return value;
 }
}

function validateCount(value){
 try {
  return parseCount(value);
 } catch(err) {
  throw new Error(err);
 }
}

// Задание №2

class Triangle{
 constructor(a, b, c){
  if(a + b < c || a + c < b || b + c < a){
   throw new Error('Треугольник с такими сторонами не существует');
  } else {
   this.a = a;
   this.b = b;
   this.c = c;
  }
 }

 get perimeter(){
  return this.a + this.b + this.c;
 }

 get area(){
  let p = this.perimeter/2;
  return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
 }
}

function getTriangle(a, b, c){
 try {
  return new Triangle(a, b, c);
 } catch(err) {
  return {
   get perimeter(){
    return 'Ошибка! Треугольник не существует';
   },
   get area(){
    return 'Ошибка! Треугольник не существует';
   }
  }
 }
}