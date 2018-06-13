/*
 * There are 100 closed lockers in a hallway. A man begins by
 * opening all 100 lockers. Next, he closes every second locker.
 * Then, on his third pass, he toggles every third locker (closes
 * it if it's open, opens it if it's closed). This process
 * continues for 100 passes, such that on each pass i, the man
 * toggles every ith locker. After his 100th pass in the hallway,
 * in which he toggles only the 100th locker, how many lockers
 * are open?
*/

const findOpenLockers = () => {
  const lockers = new Array(100).fill(false);

  for (let i = 1; i <= lockers.length; i += 1) {
    let curIndex = i - 1;
    while (curIndex < lockers.length) {
      lockers[curIndex] = !lockers[curIndex];
      curIndex += i;
    }
  }

  let open = 0;
  for (let i = 0; i < lockers.length; i += 1) {
    if (lockers[i]) {
      open += 1;
    }
  }
  return open;
};

/*
 * Notes from Solution:
 *
 * Doors will be toggled on rounds that are a factor of the door number.
 * EX: Door 15 will be toggled on rounds 1, 3, 5, and 15.
 *
 * A door will remain open only if the number of times it has been toggled
 * is odd.
 *
 * A number will have an odd number of factorials when it is a perfect square:
 * EX: 16 -->  1, 2, 4, 8, 16.
 *
 * Count the number of square numbers between 1 and 100 -- there are 10.
*/
