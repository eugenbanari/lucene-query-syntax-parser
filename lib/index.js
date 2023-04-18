var luceneQuerySyntaxParser = require('../lib/lucene-query-syntax-parser.js');

function isObjectLike(value) {
    return value != null && typeof value == 'object';
}

module.exports = {
    ...luceneQuerySyntaxParser,
    parse: function(text) {
        return luceneQuerySyntaxParser.parse(text).flat(Infinity).filter(isObjectLike);
    }
};