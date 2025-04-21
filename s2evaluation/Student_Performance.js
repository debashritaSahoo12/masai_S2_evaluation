function createStudentManager() {
  let students = [];
  return {
    addStudent(name, sub, score) {
      students.push({ s_name: name, marks: [{ sub: sub, score: score }] });
    },
    updateScore(name, sub, score) {
      let student = students.find((student) => student.s_name == name);
      if (student) {
        let subject = student.marks.find((subs) => subs.sub == sub);
        if (subject) {
           subject.score=score
        }
      }
    },
    getStudentDetail(name) {
      let student = students.find((student) => student.s_name == name);
      if (student) {
        console.log(student);
      } else {
        console.log("Student Not Found");
      }
    },addSubject(name,sub,score){
        let student = students.find((student) => student.s_name == name);
        if(student){
            student.marks.push({sub:sub,score:score})
        }
    },getAllStudents(){
        return JSON.stringify(students)
    },getSorted(by){
        if(by=="name"){
            students= students.sort((a,b)=>a.s_name.localeCompare(b.s_name))
        }
    }
  };
}
let performance=createStudentManager();
performance.addStudent("Miki","Math",90)
performance.addStudent("Deba", "Eng", 97);
performance.addStudent("Debu", "Math", 95);
//console.log(performance.getAllStudents())
performance.updateScore("Miki","Math",99)
console.log(performance.getAllStudents())
performance.getStudentDetail("Debu")
performance.addSubject("Miki", "Eng", 90);
performance.getStudentDetail("Miki");
(performance.getSorted("name"));
console.log(performance.getAllStudents());
