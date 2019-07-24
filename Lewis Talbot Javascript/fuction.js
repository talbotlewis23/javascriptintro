let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if(coffeeIsGrinding) {
        console.log("stopping the grond");
        coffeeIsGrinding = false;
} else {
    console.log("Grinding is about to begin")
    coffeeIsGrinding = true;
}
}

pressGrindBeans();

const coffeeOrder = (size, drinkType) => {
    console.log(`order confirmed ${size} ${drinkType}`);
    }

    coffeeOrder("Regular","Black Coffee");

    const addUp = (num1, num2) => {
        return num1 + num2;
       }
       addUp(7,3);
       console.log(addUp(2,5)); 

       const multiplyByNineFifths = (celsius) => {
        return celsius * (9/5);
       };
       const getFahrenheit = (celsius) => {
        return multiplyByNineFifths(celsius) + 32;
       };
       
       console.log("The temperature is " + getFahrenheit(15) + "°F"); 

       let orderCount = 1 ;

       const takeOrder = (topping,topping2,topping3) => {
           console.log(`pizza with ${topping} with ${topping2} and ${topping3}`);
           orderCount++;
       }

       takeOrder("pineapple","Ham","Stuffed crust");



       let accBal = 400;
       let accPin = 1234;
       const cashMachine = (pinNum, cash) => {
           if (pinNum == accPin && cash <= accBal) {
               console.log(`Your PIN is correct and the ${cash} you requested is being dispensed!`)    
           } else if (pinNum != accPin) {
               console.log(`PIN number is incorrect!. Please try again.`);
           } else {
               console.log(`Insufficient funds in your account! Please check and try again.`);
           }
       }
       cashMachine(1234, 300);
       cashMachine(1235, 300);
       cashMachine(1234, 410);
       cashMachine(1235, 500);


       let countOrders = 0 ;

       const orderSpecifics = (topping,topping2,topping3,topping4,topping5) => {
           console.log(`A subsandwich with ${topping} with ${topping2} and ${topping3} with a little ${topping4} and some ${topping5}`);
           orderCount++;
       }

       takeOrder("pepperoni","Ham","Garlic cheese bread","cheese","iceburg lettice");
           

