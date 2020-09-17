// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдем по всем элементам коллекции и прибавим значения свойства likes
// // к аккумулятору, начальное значаение которого укажем 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// // Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// // для подсчета лайков из коллекции
// const countLikes = (tweets) =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(countLikes(tweets)); // 32

// const countLikes = (tweets) =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(countLikes(tweets));

// ----------------------------------------------------

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // Пройдем по всем элементам коллекции и добавим значения свойства tags
// // к аккумулятору, начальное значение которого укажем пустым массивом [].
// // На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// const tags = tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
// }, []);

// console.log(tags);

// // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// // для сбора тегов из коллекции
// const getTags = tweets =>
//     tweets.reduce((allTags, tweet) => {
//         allTags.push(...tweet.tags);

//         return allTags;
//     }, []);

// console.log(getTags(tweets));

// ----------------------------------------------------
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = (tags) => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// ----------------------------------------------------
// ======================Palindrom=====================
// let word = "ANNA";

// let result = word.toLowerCase().split("").reverse().join("");
// console.log(word.toLowerCase() === result);

// const isPalindrom = function (word) {
//   return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
// };

// console.log(isPalindrom(word));
// ----------------------------------------------------
// 9. Цепочки методов массива
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// /*
//  * Фильтруем четные числа. Далее, на результате метода filter,
//  * вызываем map и множим на 2. После чего на результате
//  * метода map вызываем reverse.
//  */

// const result = numbers
//   .filter((x) => x % 2 === 0)
//   .map((y) => y * 2)
//   .reverse();

// console.log(result);
// ----------------------------------------------------

// =====================PRACTICE========================

// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

//=====users.forEach=====
// const array = [];
// users.forEach((elem) => array.push(elem.name));
// console.log(array);

//======users.map=======
// const names = users.map((user) => user.name);
// console.log(names);

// ====== users.filter =======
// const usersEyes = users.filter((user) => user.eyeColor === "blue");
// console.log(usersEyes);

// const findUserEyes = (user, eyeColor) =>
//   user.find((eyes) => eyes.eyeColor === eyeColor);
// console.log(findUserEyes(users, "blue"));

// ====== users.find =======
// const userEmail = users.find(
//   (user) => user.email === "blackburndotson@furnigeer.com"
// );
// console.log(userEmail);

// const findUserByEmail = (user, email) =>
//   user.find((mail) => mail.email === email);
// console.log(findUserByEmail(users, "blackburndotson@furnigeer.com"));

// ------------------------------------------------
// const getSortedUniqueSkills = (users) =>
//   users
//     .reduce((acc, { skills }) => acc.concat(skills), [])
//     .filter((skill, index, skills) => index == skills.indexOf(skill))
//     .sort();

// console.log(getSortedUniqueSkills(users));
