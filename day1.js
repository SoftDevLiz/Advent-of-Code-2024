
                                                        // PART ONE

const AOC_INPUT_URL = 'https://adventofcode.com/2024/day/1/input'
const SESSION_COOKIE = ' _ga_MHSNPJKWC7=GS1.2.1733577242.2.1.1733577654.0.0.0; _ga=GA1.2.1881347255.1733341621; _gid=GA1.2.1357194549.1733577241; session=53616c7465645f5f4c2513f97581014187dbcc7e0a1dea4ef6559215ecf84845c0c7b24f2fc2745095a0af31a9661ae9a97749362abb1c64bcccabdd3e8c58a5'

async function fetchPuzzleInput() {
  
    try {
      const response = await fetch(AOC_INPUT_URL, {
        method: 'GET',
        headers: {
          'Cookie': `session=${SESSION_COOKIE}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const input = await response.text(); // Get plain text
  
      // Split input into lines
      const lines = input.split('\n').filter(line => line.trim() !== '');
  
      // Split each line into two parts (based on spaces) and convert to integers
      const firstList = [];
      const secondList = [];
  
      lines.forEach(line => {
        const [first, second] = line.split('  ').map(Number); // Convert each part to a number
        firstList.push(first);
        secondList.push(second);
      });

      console.log("UNSORTED FIRST LIST:", firstList);
      console.log("UNSORTED SECOND LIST:", secondList);
  
      return { firstList, secondList };
    } catch (error) {
      console.error('Error fetching Advent of Code input:', error);
    }
  }
  
  // Use the function
  (async () => {
    const { firstList, secondList } = await fetchPuzzleInput();

    firstList.sort((a, b) => a - b)
    secondList.sort((a, b) => a - b)

    console.log("SORTED FIRST LIST", firstList)
    console.log("SORTED SECOND LIST", secondList)

    const compareArrays = (currentValue, index) => {

        if (currentValue > secondList[index]) {
            return currentValue - secondList[index]
        } else {
            return secondList[index] - currentValue
        }

    }

    const distances = firstList.map(compareArrays)

    console.log("DISTANCES:", distances)

    const getSum = (total, num) => {
        return total + num
    }

    const answer = distances.reduce(getSum, 0)

    console.log(answer)
    })();

                                                    // PART TWO


