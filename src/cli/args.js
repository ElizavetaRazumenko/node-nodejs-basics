const parseArgs = () => {
  const args = process.argv.slice(2);

  const indexes = args
    .map((item, index) => {
      if (item.startsWith("--")) {
        return index;
      }
    })
    .filter((index) => index);
    
    const resultArr = indexes.map((index) => `${args[index].slice(2)} is ${args[index + 1]}`);
    console.log(resultArr.join(', '));
};

parseArgs();
