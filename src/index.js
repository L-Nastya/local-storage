// import MovieApiService from "./api"
const gallery = document.querySelector("#gallery")
// const sdfa = document.querySelector(".fghjk")
const watchBtn = document.querySelector(".watched")
// // console.log(watchBtn)
const queueBtn = document.querySelector(".queue")
// const addwatchBtn = document.querySelector("#addwarch")
// console.log(addwatchBtn)

// const addqueBtn = document.querySelector(".addqueue")
// const input = document.querySelector("input")
// const form = document.querySelector("search-form")

// // const addw = document.createElement("button");
// // addw.classList.add("addwarch")
// // addw.innerText= "Add to watched"
// // console.log(addw)
// //    gallery.insertAdjacentHTML("afterbegin", addw.outerHTML)

// const newMovieApiService = new MovieApiService();

//  renderCard()

// async function  renderCard() {
//   try {
//     const request = await   newMovieApiService.fetchPopular();
//     ghjkl(request)
 
//   } catch (error) {
//     console.log(error)

//   }
// }

// function ju(to) {
  
// }
// // function sdfghjk(sdfg) {

// //  const markup = sdfg.map(({ original_title, poster_path }) => {
// // document.getElementById('gallery').appendChild(addw);
    
//     // gallery.insertAdjacentHTML("afterbegin", addw.outerHTML)
// //    return `<div><img class="photo" src="${poster_path}" alt="картинка;" loading="lazy" />
// //   <div class="info">
// //     <p class="info-item">
// //       <b>Title</b>
// //       ${original_title}
// //     </p></div>`

// //    }).join("")
// //      const addw = document.createElement("button");
// // addw.classList.add("addwarch")
// //   addw.innerText = "Add to watched"
// //   // document.getElementById('gallery').appendChild(addw);
// //   gallery.insertAdjacentHTML("beforeend", markup)
// //   // gallery.insertAdjacentHTML("afterbegin", addw.outerHTML)
// //   addw.after(document.querySelector(".info-item"))
 
// // const addw = document.createElement("button");
// // addw.classList.add("addwarch")
// // addw.innerText = "Add to watched"
  
// // const cont= document.createElement("div");
// // cont.classList.add("container")
// // cont.prepend(pic, info, addw)
  
// // const pic = document.createElement("img");
// // pic.classList.add("photo")
// // pic.src = `${poster_path}`;
// // image.alt = "picture";
  
// // const info = document.createElement("p");
// // info.classList.add("info")
// //   info.innerText =  `${original_title}`

// //   gallery.prepend(cont)

// //   }
// function ghjkl(hjk) {
//   // let abc = [];
//   const markup = hjk.map(({ original_title, poster_path }) => {
//     const addw = document.createElement("button");
//     // addw.classList.add("addwarch")
//     addw.innerText = "Add to watched"
 
//     const qu = document.createElement("button");
//     qu.classList.add("queue")
//     qu.innerText = "Add to queue"
  
//     const pic = document.createElement("img");
//     pic.classList.add("photo")
//     pic.src = `${poster_path}`;
//     pic.alt = "picture";
  
//     const info = document.createElement("p");
//     info.classList.add("info")
//     info.innerText = `${original_title}`

//     const cont = document.createElement("div");
//     cont.classList.add("container")
//     cont.prepend(pic, info, addw, qu)
 
//     gallery.prepend(cont)
//     addw.addEventListener("click", () => {
//       const list = localStorage.getItem("movie");
//       console.log(list)
//       try {
//         const listData = list ? JSON.parse(list) : [];
//         listData.push(hjk);
//         const updatedList = JSON.stringify(listData);
//         localStorage.setItem("movie", updatedList);
//       } catch (error) {
//         console.log("parsing error");
//       }
//       })
  

//   }).join('')
// }
// addwatchBtn.addEventListener("click",localStorage.setItem("movie", JSON.stringify(ghjkl)) )
// localStorage.setItem("movie", JSON.stringify(markup))



// function fghjkl() {
//   const ghjk = books.map(book => book.title)
//   console.log(ghjk)
// }
// fghjkl()
// const dfgha = () => {
//   for (let i = 0; i < books.length; i += 1) {
//     console.log(books[i])
//     abc.push(books[i])
//     // localStorage.setItem("watched", JSON.stringify(books[i]))
//   }
// }
// dfgha()

// let newTitle = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   }
// let newTitle = {
//     title: "asdfghjkl",
//     author: "sdfghjk",
//     rating: 5.58,
//   }

// localStorage.setItem("watched", abc);
// if(localStorage.length > 0){
//   for (i = 0; i < localStorage.length; i++){
  
// let key = localStorage.key(i);
// // let myItem = localStorage.getItem(key);
// console.log(key);
// }
// }
// else{
// console.log('false');
// }
// let keys = Object.keys(localStorage);
//  console.log(keys)
// for (let key of keys) {
//   console.log(key);
// }
// function dfghj(newTitle) {
//   let keys = Object.values(localStorage);
//   if (keys === newTitle) {
//     console.log("name already saved")
//   } else {
//     abc.push(newTitle)
//   }
// }
// function fghjkjl(newTitle) {
//     for (const book of books) {
//       abc.push(book.title);
//     }
//      console.log(abc);
//     if (abc.includes(newTitle.title)) {
//       return `Error! Potion ${newTitle.title} is already in your inventory!`;
//     } else {abc.push(newTitle)};
//   }
// console.log(abc)
// fghjkjl(newTitle)



 // "dark
// ghjkl()
// function ghjkl(books) {
//   const markup = books.map(({ title, author, rating }) => {
//     return `<div>
//      <p class="info-item">
//        <b>Title</b>
//       ${title}
//      </p>
//     <p class="info-item">
//        <b>author</b>
//        ${author}
//     </p>
//     <p class="info-item">
//       <b>rating</b>
//       ${rating}
//      </p></div>`
//   }).join("")
//   gallery.insertAdjacentHTML("beforeend", markup)
// }


const btnCom = document.querySelector(".com")
const btnComa = document.querySelector(".coma")
const btnComd = document.querySelector(".comd")
const btnDra = document.querySelector(".dra")
const btnDram = document.querySelector(".dram")
const btnDrama = document.querySelector(".drama")
const author = document.querySelector(".a")
const title = document.querySelector(".t")
const rating = document.querySelector(".r")
const deleted = document.querySelector(".b")
const deletedg = document.querySelector(".v")


let abc = [];
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    rating: 8.51,
  },
  {
    title: "Сон смешного человека",
    author: "Федор Достоевский",
    rating: 7.75,
  },
];
// fghj()  // Проблемы функции : 1. если local storage пуст то не читает свойство length
//         //                    2. не могу совместить ее с функцией которая уже есть в слушателе на кнопку
// function fghj() {
//   const q = localStorage.getItem("watched");
//   const qu = JSON.parse(q) || 0
//   const leastArr = books.length < qu.length ? books : qu;
//   console.log(leastArr)
// const biggestArr = books.length >= qu.length ? books : qu;
//   console.log(biggestArr)
// const resultArray = leastArr.filter((item) => {
//   return biggestArr.includes((item2) => {
//     if (item2.title === item.title) {
//       console.log("уже есть в списке")
//     }
//   } )
// });


// }

// ghj()
// function ghj() {
//   let matches = []
//   console.log(matches) 
//   const q = localStorage.getItem("watched");
//   const qu = JSON.parse(q)
  
//   //  console.log(qu)
//     for (let fg of qu){
//       // console.log(fg)
//       for (let i = 0; i < books.length; i += 1){
//         // console.log(books[i])
//         if (fg === books[i]) {
//           matches.push(books[i])
//            console.log(matches) 
//       //    console.log(fg) 
//       // console.log("already in the list")
//       }
//       }
      
//     }
  
//   }

// ghj()
// function ghj() {
//   let matches =[]
//   const lista = localStorage.getItem("watched");
//   const listDatas = JSON.parse(lista)
//   console.log(listDatas)
//   for (let i = 0; i < books.length; i += 1){
//     // console.log(books[i])
//     for (let listDatam of listDatas) {
//       if (listDatam === books[i]) {
//            console.log(listDatam)
//         //  matches.push(books[i])
//         //  console.log(matches)
//        }
//       //  else {
//   //        abc.push(books[i])
//   // localStorage.setItem("watched", JSON.stringify(abc))

//       }
//       }
      
//     }
  
  

// btnCom.addEventListener("click", () => {
//   let q = localStorage.getItem("watched");
//   let qu = JSON.parse(q)
//   const leastArr = books.length < qu.length ? books : qu;
//   console.log(leastArr)
//   const biggestArr = books.length >= qu.length ? books : qu;
//   console.log(biggestArr)
//   const resultArray = leastArr.filter((item) => {
//     return biggestArr.some((item2) => {
//       if (item2.title === item.title) {
//         console.log("уже есть в списке")
//       } else {
//          q = localStorage.getItem("watched");
//     try {
//        qu = q ? JSON.parse(q) : [];
//       // console.log( listData )
//       qu.push(books[0]);
//       const updatedList = JSON.stringify(qu);
//       localStorage.setItem("watched", updatedList);
//     } catch (error) {
//       console.log("parsing error");
//     }
//       }
//     })
//   });

// // console.log(resultArray);
// }
  
//   //   abc.push(books[0])
//   // localStorage.setItem("watched", JSON.stringify(abc))
// )
btnCom.addEventListener("click", (e) => {
  const list = localStorage.getItem("watched");
  try {
    const listData = list ? JSON.parse(list) : [];
    listData.push(books[0]);
    console.log(listData)
    const updatedList = JSON.stringify(listData);
    localStorage.setItem("watched", updatedList);
  } catch (error) {
    console.log("parsing error");
  }
//    btnCom.innerHTML = 'удалить'
//   btnCom.addEventListener("click", () => {
//     const wa = JSON.parse(localStorage.getItem('watched'));
//     console.log(wa)
   
//    const gf = wa.splice(0, 1)
//      console.log(wa)
//     // for (w of wa) {
//     //    console.log(w)
//     //    w.splice(0, 1) 
//     // }
  
//     // localStorage.removeItem("watched")
//  btnCom.innerHTML = 'добавить в хранилище'
// })
  
  
//   // abc.push(books[1])
//   // localStorage.setItem("watched", JSON.stringify(abc))
})
deleted.addEventListener("click", () => {
  let matches = [];
  const wa = JSON.parse(localStorage.getItem('watched'));
  console.log(wa)
  //   wa.forEach((item) => {
  //     // console.log(item)
  //     books.forEach((item2) => {
  //               //  console.log(item2)
  //       if (item.title === item2.title) {
  //         console.log(item.title) 
  //          console.log(item2.title)
  //                 const g = wa.indexOf(item)
  //                 console.log(g)
  //                 const gh =  wa.splice(g, 1);
  //                    console.log(gh)
  //                 //   matches.push(wa)
  //                  const updatedList = JSON.stringify(wa);
  //     localStorage.setItem("watched", updatedList);
  //                 }
  //             });
  //         });
  // console.log(matches)
  // const gf = wa.some(value => value === books[0])
  //  const ghj = Object.values(wa)
  //   //  console.log(ghj)
  //    const ghjj = Object.values(books)
  // // console.log(ghjj)
  // if (ghj === ghjj) {
  //   matches.push(ghj)
  //    console.log(matches)
  // }
  // const ghjk = books[0]
  // console.log(ghjk)

  // for (let foo of wa) {
  //   // console.log(foo)
  //   if (foo !== books[0]) {
  const ghjk = books[0]
  const yu = ghjk.title
  console.log(yu)
      const hy = wa.findIndex(option => option.title === yu)
      console.log(hy)
       const hf = wa.splice(hy, 1)
       console.log(hf)
    const updatedList = JSON.stringify(wa);
   localStorage.setItem("watched", updatedList);
  
  //     // console.log(books[0])
  //     // console.log(foo.title)
  //     // console.log(books[0])
   
  //     // const gf = wa.splice(0, 1)
  //     // console.log(index.target)
  //     // console.log(wa)
  //     // const updatedList = JSON.stringify(wa);
  //     //   localStorage.setItem("watched", updatedList);
  //   }
  // }
} 
)
deletedg.addEventListener("click", () => {
  const waa= JSON.parse(localStorage.getItem('watched'));
  console.log(waa)
  const ghjka = books[1]
  const yy = ghjka.title
  console.log(yy)
      const hya = waa.findIndex(option => option.title === yy)
      console.log(hya)
       const hfa = waa.splice(hya, 1)
       console.log(hfa)
    const updatedLista = JSON.stringify(waa);
   localStorage.setItem("watched", updatedLista);
})
btnComa.addEventListener("click", (e) => {
  const list = localStorage.getItem("watched");
   
    try {
      const listData = list ? JSON.parse(list) : [];
    
      listData.push(books[1]);
      const updatedList = JSON.stringify(listData);
      localStorage.setItem("watched", updatedList);
    } catch (error) {
      console.log("parsing error");
  }

//   // abc.push(books[1])
//   // localStorage.setItem("watched", JSON.stringify(abc))
})
btnComd.addEventListener("click", () => {
      const list = localStorage.getItem("watched");
    try {
      const listData = list ? JSON.parse(list) : [];
      listData.push(books[2]);
      const updatedList = JSON.stringify(listData);
      localStorage.setItem("watched", updatedList);
    } catch (error) {
      console.log("parsing error");
    }
  // abc.push(books[2])
  // localStorage.setItem("watched", JSON.stringify(abc))
})

// btnDra.addEventListener("click", () => {
//        const list = localStorage.getItem("qu");
//     try {
//       const listData = list ? JSON.parse(list) : [];
//       listData.push(books[0]);
//       const updatedList = JSON.stringify(listData);
//       localStorage.setItem("qu", updatedList);
//     } catch (error) {
//       console.log("parsing error");
//     }
//   // localStorage.setItem("qu", JSON.stringify(books[0]))
// })
// btnDram.addEventListener("click", () => {
//        const list = localStorage.getItem("qu");
//     try {
//       const listData = list ? JSON.parse(list) : [];
//       listData.push(books[1]);
//       const updatedList = JSON.stringify(listData);
//       localStorage.setItem("qu", updatedList);
//     } catch (error) {
//       console.log("parsing error");
//     }
//   // localStorage.setItem("qu", JSON.stringify(books[1]))
// })
// btnDrama.addEventListener("click", () => {
//        const list = localStorage.getItem("qu");
//     try {
//       const listData = list ? JSON.parse(list) : [];
//       listData.push(books[2]);
//       const updatedList = JSON.stringify(listData);
//       localStorage.setItem("qu", updatedList);
//     } catch (error) {
//       console.log("parsing error");
//     }
//   // localStorage.setItem("qu", JSON.stringify(books[2]))
// })
// watchBtn.addEventListener("click", () => {
//   const theme = localStorage.getItem("watched");
//   const fghj = JSON.parse(theme)
// console.log("watched", fghj);
// })
// queueBtn.addEventListener("click", () => {
//   const theme = localStorage.getItem("qu");
//   const fghj = JSON.parse(theme)
// console.log("qu",fghj);
// })