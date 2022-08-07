// จงเขียนฟังก์ชันในการแปลงคำที่อยู่ในรูปแบบ dash-separated เช่น background-color ให้อยู่ในรูปแบบ camelCase เช่น backgroundColor

const str = 'background-color'
const camelCased = str
  .replace(/-([a-z])/g, (g) => {
    return g[1].toUpperCase();
  });
console.log(camelCased)