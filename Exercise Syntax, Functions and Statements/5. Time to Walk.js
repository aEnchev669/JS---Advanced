function walk(steps, footprint, speed)
{
    const totalMeters = steps * footprint;
    const speedInMetersInSec = speed / 3.6;
    const bonusMins = totalMeters % 500 / 100;
    const time = totalMeters / speedInMetersInSec;

   
    const timeInH = Math.floor(time / 3600);
    const timeInMin = Math.floor(time / 60);
    const timeInSec = Math.floor(time % 60);
    const totalMins = Math.round(timeInMin + bonusMins);
    console.log(`0${timeInH}:${totalMins}:${timeInSec}`);
    

}

walk(9000, 0.60, 5);