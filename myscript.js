const listEl = document.getElementById("#list")

console.log("inizio ciclo")
// 1) stampare in console i numeri da 1 a 100

for (i=1; i<=100; i++){
    
    const listItemEl = document.createElement("li");
    listItemEl.classList.add("box");

    // let liClasses;

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
        listItemEl.classList.add("fizzBuzzBox")
    }

    if(i % 3 == 0){

        console.log("fizz");
        listItemEl.classList.add("fizzBox")

    } else if(i % 5 == 0){
        console.log("buzz");
        listItemEl.classList.add("buzzBox")
    } else{
        console.log(i);
        liClasses = "box"
    }

    listEl.append(listItemEl);
    
}


// 2) numeri divisibili per 3 FIZZ per 5 BUZZ e per entrambi FIZZBUZ