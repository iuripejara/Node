const args = process.argv

const namedArguments ={}

process.argv.slice(2).forEach((arg,index,array) => {
    if (arg.startsWith("--")) {
        const paramName = arg.slice(2)
        const argValue =  array[index +1]
        namedArguments[paramName] = argValue
    }
});

console.log("Argumento Inform", namedArguments)