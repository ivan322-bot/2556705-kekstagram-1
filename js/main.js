// import './util.js';
function examFoo () {
  return function () {
    return {
      name: 'Mama',
      surname: 'Kirillova',
    };
  };
}

const examArray = Array.from({length:3}, examFoo());

console.log(examArray);
