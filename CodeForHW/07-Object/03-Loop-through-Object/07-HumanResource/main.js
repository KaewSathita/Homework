// 07-03-07 Human Resource
// Name: john, salary: 1000, address: Ratchathewi, Bangkok หากไม่มีชื่อแสดงข้อความว่า Not Found

const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
  };



let yourName = prompt("Enter name");


if (yourName in employees) {
    alert(`Name: ${yourName} Salary: ${employees[yourName].salary} Address: ${employees[yourName].address.district}, ${employees[yourName].address.province}`);
} else {
    alert("Not Found");
}