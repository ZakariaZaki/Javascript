let count = 0;

let increase = function() {
  count++;
  console.log(count);
  if(count< 10) {
    increase();
  }
}

increase();
