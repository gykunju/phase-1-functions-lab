// Code your solution in this fi
function distanceFromHqInBlocks(location){
    const hq = 42;
    return Math.abs(location - hq);
}

function distanceFromHqInFeet(location){
    const blockInFeet = 264;
    return distanceFromHqInBlocks(location) * blockInFeet;
}


function distanceTravelledInFeet(start, destination) {
    const blockInFeet = 264; // 1 block = 264 feet
    return Math.abs(destination - start) * blockInFeet;
  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let price;
    if(distance <= 400){
        price = 0;
    }else if( distance > 400 && distance <= 2000){
        price = (distance - 400) * 0.02;
    }else if(distance > 2000 && distance <= 2500){
        price = 25;
    }else {
        price = 'cannot travel that far';
      }
    
      return price;
    }
  