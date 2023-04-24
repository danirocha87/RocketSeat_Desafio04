const students = [{
  name: "Daniela",
  firstNote: 5,
  secondNote: 7,
},
{
  name: "Daniel",
  firstNote: 4,
  secondNote: 3,
},
{
  name: "Antonia",
  firstNote: 8,
  secondNote: 9,
},
{
  name: "Rocha",
  firstNote: 10,
  secondNote: 2,
}]

function average(firstNote, secondNote) {
  return Number((firstNote + secondNote) / 2).toFixed(2)
}

function printStudentsAverage(student) {
  if (average(student.firstNote, student.secondNote) >= 7) {
    alert(`
     A média do Aluno ${student.name} é: ${average(student.firstNote, student.secondNote)} \n
     Parabéns, ${student.name}! Você foi aprovado(a) no concurso!   
    `)
  } else {
    alert(`
     A média do Aluno ${student.name} é: ${average(student.firstNote, student.secondNote)} \n
     Não foi dessa vez, ${student.name}! Tente novamente!
    `)
  }
}

for (let student of students) {
  printStudentsAverage(student)
}

