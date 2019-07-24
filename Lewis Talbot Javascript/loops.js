for(i = 9 ; i > -1 ; i-- )
{

console.log(i);
}



let Drinks = [
    "Fanta",
    "Tango",
    "Dr.Pepper",
];

console.log(Drinks);



//let favFilms= [
    "Porco Rosso",
    "007:Casino Royal",
    "Star Wars"
//]
//favFilms.push("Transformer '86");
//favFilms.push("Akira")

//for(filmIndex = 0; filmIndex < favFilms.length; filmIndex++){
    //console.log(favFilms[filmIndex])
//}//


let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "";
while(currentCard != "Spade"){
 console.log(currentCard);
 currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);


let films= [
    "Porco Rosso",
    "007:Casino Royal",
    "Transformers '86"
]
    const filmCheck = () => {
            if (films[2] == "Ghostbusters") {
                console.log("Yay it's Ghostbusters");
            } else {
                console.log("Booo, we want Ghostbusters");
            }
        };
        filmCheck();




