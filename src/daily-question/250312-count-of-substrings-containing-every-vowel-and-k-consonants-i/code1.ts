function countOfSubstrings(word: string, k: number): number {
  let count:number = 0;

  const vowelMap: Record<string,number> = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  } 

  const vowelSet = new Set();

  let front = 0;
  let behind = 0;
  let consonantCount = 0

  while(1) {
    console.log(word.slice(behind, front),consonantCount);
    if(vowelSet.size < 5 || consonantCount < k) {
      if(front >= word.length) break;
      const curChar = word[front];
      if(vowelMap[curChar] !== undefined) {
        if(vowelMap[curChar] === 0) vowelSet.add(curChar);
        vowelMap[curChar]++;
      } else {
        consonantCount++;
      }
      front++;
      continue;
    }

    if(vowelSet.size === 5 && consonantCount === k) {
      count++;
      if(front >= word.length) break;
      const curChar = word[front];
      if(vowelMap[curChar] !== undefined) {
        vowelMap[curChar]++;
      } else {
        consonantCount++;
      }
      front++;
      continue;
    }

    const curChar = word[behind];
    if(vowelMap[curChar] !== undefined) {
      if(vowelMap[curChar] === 1) vowelSet.delete(curChar);
      vowelMap[curChar]--;
    } else {
      consonantCount--;
    }
    behind++;
  }

  return count;
};