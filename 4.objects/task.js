function Student(name, gender, age) {
  this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (!(this.hasOwnProperty('marks')) || this.marks.length === 0) {
    return 0;
  } else {
		let average = 0;
		this.marks.forEach((mark) => average += mark/this.marks.length);
		return average;
  }
}

Student.prototype.exclude = function (reason) {
	delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
