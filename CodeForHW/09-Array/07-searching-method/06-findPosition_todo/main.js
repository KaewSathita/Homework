// 09-07-06 findPosition_todo

const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];
// expexted result: 1

let foundObj = tasks.filter(item => item.id <= 1)
console.log(foundObj)