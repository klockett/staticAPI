var chalk = require('chalk');
exports.debug = (title, obj, status)=> {
  const seperator = '\n========================================\n';
  const output = seperator + title + seperator;

var error = chalk.bold.red;
console.log(error('Error'));  
  if (!status){
     status = "";
     chalk.red('error');
  }
  if (process.env.DEBUG) {
    console.log(output, obj, status);
  }
};
