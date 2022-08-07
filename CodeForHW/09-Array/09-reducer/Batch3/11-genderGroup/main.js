
// จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน



const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' }
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

let result = {
    M: [],
    F: []
}

for (var i = 0; i<persons.length; i++){
    if (persons[i].sex === 'M'){
        result.M.push(persons[i].name);
    } else if (persons[i].sex === 'F'){
        result.F.push(persons[i].name)
    } else {
        
    }
}

console.log(result)