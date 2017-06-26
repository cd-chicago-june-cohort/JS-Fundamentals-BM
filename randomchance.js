function slotMachine (Quarters) {

while (Quarters>0) {
    var num1=(Math.floor(Math.random()*100)+1);
    var num2=(Math.floor(Math.random()*100)+1);
    var win=(Math.floor(Math.random()*50)+51);
    if (num1===num2){
        console.log("WINNER! WINNER! CHICKEN DINNER! You won " + win + " quarters!")
        Quarters+=win;
    } else {
        console.log("LOSER!! You have " + Quarters + " quarters left, you LOSER."); 
        Quarters-=1;
    }
    if (Quarters==0) {
        console.log("You are all out of money, go home to your family.");
    }

}
}

// test with 1000 quarters
slotMachine(1000);