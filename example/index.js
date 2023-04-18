var luceneQuerySyntaxParser = require('../lib');

const querystring = 'title:"foo bar" AND body:"quick fox"';
const abstractSyntaxTree = luceneQuerySyntaxParser.parse(querystring);
const result = JSON.stringify(abstractSyntaxTree, null, 4);

console.log(result);
