const names = ['Ewa', 'Adam', 'Iwona', 'Paweł'];
const surnames = ['Mazur', 'Nowak', 'Wójcik', 'Ziółko'];
const email = ['EwaMazur@mail.pl', 'AdamNowak@mail.pl','IwonaWojcik@mail.pl','PawelZiolko@mail.pl'];
const age = [];
const phoneNumber = '1234567890';
const country = ['PL',' UK', 'USA', 'IT'];
const id = ['0', '1', '2', '4'];


const randomAge = (min, max)=> {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

const calcIndex = (number) => Math.floor(Math.random()*number.length);

const randomNumber = ()=> {
    let number = '';
    for(let i=0; i<9; i++) {
        const index = calcIndex(phoneNumber);
        number += phoneNumber[index];
    }
    return number;
}


// 1) Wersja z Obj{}:
class Person {
    constructor(names, surnames, email, country, id, phoneNumber, age) {
        this.names = names;
        this.surnames = surnames;
        this.email = email;
        this.country = country;
        this.id = id;
        this.phoneNumber = phoneNumber;
        this.age = age;
    }
}

const generateHuman = ()=> {
    return console.log(new Person(names[calcIndex(names)], 
    surnames[calcIndex(names)], 
    email[calcIndex(email)], 
    country[calcIndex(country)], 
    id[calcIndex(id)], 
    phoneNumber[randomNumber()],
    age[randomAge(18, 85)]));
}

generateHuman()



// 2) WERSJA BEZ OBIEKTU:
// const generateHuman = ()=> {
//     const indexName = calcIndex(names);
//     const indexSurname = calcIndex(surnames);
//     const indexEmail = calcIndex(email);
//     const indexCountry = calcIndex(country);
//     const indexId = calcIndex(id);
    

//     console.log(indexName);
//     console.log(indexSurname);
//     console.log(indexEmail);
//     console.log(randomAge(18, 85));
//     console.log(indexCountry);
//     console.log(indexId);
//     console.log(randomNumber());
// }

// generateHuman();



//*** API ***

// class Human {
//     constructor() {
//       this.url = 'https://randomuser.me/api/?results';
//       this.results = [];
//     }
  
//     //wywołanie
//     initializeData() {
//       this.pullData();
//     }
  
//     //zaciąganie danych
//     async pullData() {
//       const {results} = await this.fetchData(this.url);
//       this.results = [...results]
//     }
  
//     async fetchData(url) {
//       const response = await fetch(url);
//       const data = await response.json();
      
//       // console.log(data);
//       console.log(data.results[0].name.first);
//       console.log(data.results[0].name.last);
//       console.log(data.results[0].email);
//       console.log(data.results[0].dob.age);
//       console.log(data.results[0].location.country);
//       console.log(data.results[0].id.value);
//       console.log(data.results[0].phone);
  
//       return data;
//     }
//   }
  
//   const generateHuman = new Human();
//   generateHuman.initializeData();
  
  
  
  // 2 Wersja: fetch API bez Class:
//   (async ()=> {
//       const users = await fetch("https://randomuser.me/api/?users")
//       const data = await users.json();
//           console.log(data);
//           console.log(data.results[0].name.first);
//           console.log(data.results[0].name.last);
//           console.log(data.results[0].email);
//           console.log(data.results[0].dob.age);
//           console.log(data.results[0].location.country);
//           console.log(data.results[0].id.value);
//           console.log(data.results[0].phone);
//     })();