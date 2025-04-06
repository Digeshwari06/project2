// let jsonRes
// '{"fct":"Approxmately 1/3 of cat owners thonk their pets are able to read their minds.","length":78}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student = {
//     name : "shradha",
//     marks: 95
// };

// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breads/image/random";


// btn.addEventListener("click", async () => {
//     let link = getImage();
//     // console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
//     console.log(link);
// });



// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     } catch (e) {
//         console.log("error - ",e);
//         return "No image found";
//     }
// }

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";


// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e) {
//         console.log("error - ",e);
//         return "No fact found";
//     }
// }


// const url = "htpps://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = { headers: { Accept: "application/json" } };
//         let res = await axios.get(url,config);
//         console.log(res);
//     } catch (err) {
//         console.log(err);
//     }
// }

let url = "https://cors-anywhere.herokuapp.com/http://universities.hipolabs.com/search?country=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    console.log(colArr);
    show(colArr); // Display the colleges
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for (let col of colArr) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        // Fix axios call
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log("error : ", e);
        return [];
    }
}










































// async function getFact() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     }
//  catch (e) {
//     console.log("error - ", e);
//  }
//  console.log("bye")
// }

//first api request
// fetch(url)
// .then((res) => {
//     return res.json();
//     })
//     .then((data) => {
//         console.log("data1 = ", data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((res) => {
//         console.log("data2 = ", data2.fact);
//     })
// .catch((err)=>{
//     console.log("ERROR - ", err);
// });

