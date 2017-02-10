var slaying = true;
var youHit = Math.floor(Math.random() * 2);
//sets youHit to a random number that's either 0 (false) or 1 (true)
var damageThisRound = Math.floor(Math.random()*5 + 1);
//random number between 1 and 5 (up to and including 5)
// Math.random is number between 0 and 1
// Math.floor rounds down to a whole number ex: 2.5 === 2
var totalDamage = 0;

while(slaying){
    if(youHit === 1){
        var total = totalDamage += damageThisRound;
        console.log('Dragon damaged' + total);
        if(totalDamage >= 4){
            console.log('You are a Dragon Slayer!');
            slaying = false;
        }
    } else {
        console.log('The dragon, he ate you')
    }
    slaying = false;
}
