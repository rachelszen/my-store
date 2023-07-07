import {initializeApp} from 'firebase/app'
import {DataSnapshot, get, getDatabase, onValue, push, ref, remove, set, update} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyA2DjVSLsIZWCkHJ-_dKk73JggxGhL4XJU",
  authDomain: "my-store-93fca.firebaseapp.com",
  databaseURL: "https://my-store-93fca-default-rtdb.firebaseio.com",
  projectId: "my-store-93fca",
  storageBucket: "my-store-93fca.appspot.com",
  messagingSenderId: "315979571028",
  appId: "1:315979571028:web:ba2a62ec04a6801f36f2c1",
  measurementId: "G-KP3RP690ZH"
  };

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)

// set(ref(db), {
//   name: 'Rachel',
//   age: 22,
//   location: {
//     city: 'Rio de Janeiro',
//     country: 'Brasil'
//   }
// }).then(() => {
//   console.log('data is saved')
// }).catch((e) => {
//   console.log('Error: ',e)
// })

// remove(ref(db, 'age')).then(() => {
//   console.log('data is deleted')
// }).catch((e) => {
//   console.log('Error: ',e)
// })

// set(ref(db, 'name'), null).then(() => {
//   console.log('data is deleted')
// }).catch((e) => {
//   console.log('Error: ',e)
// })

// update(ref(db, 'adresses/-NZbq1Ty0MuHKxUfz5rM'), {
//   bairro: 'Carlos Guinle',
//   cidade: 'Teresopolis',
//   estado: 'RJ'
// })

// onValue(ref(db), 
//     (dataSnapshot) => {
//     const val = dataSnapshot.val();
//     console.log(val)
//     }, {
//         onlyOnce: false
//     }
// )

// push(ref(db, 'products') ,{
//   qtd: 0,
//   category: 'necessarios',
//   name: 'havaiana',
//   image: 'https://images-americanas.b2w.io/produtos/3205081262/imagens/chinelo-havaianas-slim-feminina-opcao-de-cores-original/3205081692_1_xlarge.jpg',
//   description: 'Chinelo Havaianas Slim Feminina Opção de Cores Original Havaianas Slim Feminina. A Havaianas Slim é um clássico dos nossos tempos. Com tiras e solado mais fino, ela conquistou os pés de quem gosta de um visual delicado, sem abrir mã...',
//   price: 3490
// })

// push(ref(db, 'products') ,{
//   qtd: 0,
//   category: 'necessarios',
//   name: 'Bicicleta De Equilíbrio 4 Rodas',
//   image: 'https://images-americanas.b2w.io/produtos/6062369575/imagens/bicicleta-de-equilibrio-4-rodas-vermelha-10728-buba/6062369575_1_xlarge.jpg',
//   description: 'Bicicleta De Equilíbrio 4 Rodas Vermelha 10728 Buba A Bicicleta de Equilíbrio 4 Rodas da Buba estimula o equilíbrio e a coordenação motora do pequeno de forma divertida e segura. é estável, com rodas duplas na frente e atrás. A cria...',
//   price: 21060
// })

// push(ref(db, 'products') ,{
//   qtd: 0,
//   category: 'celular',
//   name: 'Smartphone Samsung Galaxy M13',
//   image: 'https://images-americanas.b2w.io/produtos/01/00/img/5242830/2/5242830242_1SZ.jpg',
//   description: 'Smartphone Samsung Galaxy M13 128GB 4G Wi-Fi Tela 6.6 Dual Chip 4GB RAM Câmera Tripla + Selfie 8MP - Azul',
//   price: 99900
// })

// push(ref(db, 'products') ,{
//   qtd: 0,
//   category: 'moveis',
//   name: 'Armário de cozinha 12 portas',
//   image: 'https://images-americanas.b2w.io/produtos/32857830/imagens/armario-de-cozinha-12-portas-1-gaveta-clara-poliman-moveis-branco/32857831_1_xlarge.jpg',
//   description: 'Que tal mobiliar o coração da casa de um jeito fácil? O armário de cozinha 12 portas 1 gaveta Clara Poliman Móveis é feito para quem quer economizar e deixar o cômodo bonito',
//   price: 55990
// })

// push(ref(db, 'products') ,{
//   qtd: 0,
//   category: 'moveis',
//   name: 'Sofá 3 Lugares Retrátil e Reclinável Cama inBox Compact 1,80m Velusoft Café',
//   image: 'https://images-americanas.b2w.io/produtos/3072707478/imagens/sofa-3-lugares-retratil-e-reclinavel-cama-inbox-compact-1-80m-velusoft-cafe/3072707486_1_xlarge.jpg',
//   description: 'Que tal mobiliar o coração da casa de um jeito fácil? O armário de cozinha 12 portas 1 gaveta Clara Poliman Móveis é feito para quem quer economizar e deixar o cômodo bonito',
//   price: 98999
// })

// push(ref(db, 'adresses') ,{
//   rua: 'Travessa 14 do Engenho',
//   numero: 6,
//   bairro: 'Jardim São Cristóvão',
//   cidade: 'São Luís',
//   estado: 'MA',
//   CEP:  65055624,
//   pais: 'Brasil'
// })

// push(ref(db, 'adresses') ,{
//   rua: 'Rua Princesa Isabel',
//   numero: 13,
//   bairro: 'Lírio do Vale',
//   cidade: 'Manaus',
//   estado: 'AM',
//   CEP:  69038220,
//   pais: 'Brasil'
// })

// push(ref(db, 'adresses') ,{
//   rua: 'Rodovia BA-526',
//   numero: 659,
//   bairro: 'CEASA',
//   cidade: 'Salvador',
//   estado: 'BA',
//   CEP:  41404000,
//   pais: 'Brasil'
// })

// onValue(ref(db, 'products'),
//   (dataSnapshot) => {
//       const products = [];
//       dataSnapshot.forEach((childSnapShot) => {
//         products.push({
//           id: childSnapShot.key,
//           ...childSnapShot.val()
//         })
//       })
//       console.log(products);
//   }, (error) => {
//       console.log('Error: ', error)
//   })

// get(ref(db))
//   .then((dataSnapshot) => console.log(dataSnapshot.val()))
  

// get(ref(db, 'products'))
//   .then((snapshot) => {
//     const products = [];
//     if (snapshot.exists) {
//       snapshot.forEach((childSnapShot) => {
//         products.push({
//           id: childSnapShot.key,
//           ...childSnapShot.val()
//         })
//       })
//       console.log(products);
//     }
//   })
//   .catch((error) => console.log(error));

