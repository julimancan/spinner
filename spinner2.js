const spinner = () => {
  const spinnerArr = ["|", "\\", "-", "/"];
  const timeBetween = 200
  for (const i in spinnerArr) {
    const startTime = 0;
    setTimeout(() => {
      process.stdout.write('\r' + spinnerArr[i] + '       ')
    }, startTime + (timeBetween * i));
  }
  const totalTime = timeBetween * spinnerArr.length;
  setTimeout(() => {
    process.stdout.write('\n');
  }, totalTime)
}


spinner()
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\|   '); 
// }, 900);



// setTimeout(() => {
//   process.stdout.write("\n")

// }, 950)

