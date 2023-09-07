class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function TeacherAssistant(name, age, scheduleWeekPosts) {
  Student.call(this, name, age)
  this.scheduleWeekPosts = scheduleWeekPosts
}

// herdando os prototypes do obj Assistent
TeacherAssistant.prototype = Object.create(Student.prototype);

TeacherAssistant.prototype.giveBadge = function giveBadge({ name }) {
  return `${this.name} deu uma medalha para ${name}`
}

const me = new Student('well', 43)
const you = new TeacherAssistant('mary', 43, false)
console.log(me)
console.log(me.giveBadge(you))