function radar(speed, limit)
{
    let status;
    let difference = 0;
    let speedLimit = 0;
    
  if(limit === 'city')
  {
     if(speed <= 50)
     {
       console.log(`Driving ${speed} km/h in a 50 zone`);
       return;
     }
     speedLimit = 50;
  }
  else if(limit === 'residential')
  {
    if(speed <= 20)
    {
      console.log(`Driving ${speed} km/h in a 20 zone`);
      return;
    }
    speedLimit = 20;
  }
  else if(limit === 'interstate')
  {
    if(speed <= 90)
    {
      console.log(`Driving ${speed} km/h in a 90 zone`);
      return;
    }
    speedLimit = 90;
  }
  else if(limit === 'motorway')
  {
    if(speed <= 130)
    {
      console.log(`Driving ${speed} km/h in a 130 zone`);
      return;
    }
    speedLimit = 130;
  }

  difference = speed - speedLimit;
  if (difference <= 20)
    {
        status = 'speeding';
    }
    else if(difference <= 40)
    {
        status = 'excessive speeding';
    }
    else  
    {
        status = 'reckless driving';
    }

    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
}

