function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function hitOrMiss(){
    let x = getRandomInt(10);
    if (x <= 4){
        console.log('Miss')
    }if (x >= 5){
        console.log('Hit')
    }
    console.log(x)
}

hitOrMiss()