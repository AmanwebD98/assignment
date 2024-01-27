const student={
    name:'aman',
    age:23,
    job:"dev"
}
Object.defineProperties(student,{
    age:{
        value:23,
        enumerable:false
    }
})
student.age=24
console.log(student)
