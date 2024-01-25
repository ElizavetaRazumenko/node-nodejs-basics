const parseArgs = () => {
    const args = process.argv;

    const indexes = args.map((item, index) => {
        if (item.startsWith('--')) {
            return index;
        }
    }).filter((index) => index);

    indexes.forEach((index) => console.log(`${args[index]} is ${args[index + 1]}`));
};

parseArgs();