function minimumTime(time: number[], totalTrips: number): number {
  time.sort((a, b) => a - b);
  let resTime = time[0];
  let curTrip = 0;
  while (curTrip < totalTrips) {
    curTrip = 0;
    time.forEach((val) => {
      curTrip += Math.floor(resTime / val);
    });
    resTime++;
  }

  return resTime;
}
