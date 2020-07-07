
console.log( process.argv.slice(2).reduce((acc,cur) => acc+Number(cur), 0) );
