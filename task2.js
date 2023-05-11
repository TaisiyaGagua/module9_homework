// Первое решение (простое и очевидное)
const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`;

const data = JSON.parse(jsonString);

console.log(data);

// Проблема первого решения - value age не преобразуется в number, поэтому второе решение: 

const jsonStr = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`;

const dataStr = JSON.parse(jsonStr);

dataStr.list.forEach((element) => {
    element.age = Number(element.age);
});

console.log(dataStr);
