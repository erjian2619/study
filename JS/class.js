// 私有变量  ---- 闭包
class Course{
  constructor(teacher, course){
    this.teacher = teacher;
    let _course = course;

     this.getCourse = () => _course
  }
}

const course = new Course('zs', 100)
console.log(course.getCourse());


class F extends Course{
  constructor(){
    super()
  }
}