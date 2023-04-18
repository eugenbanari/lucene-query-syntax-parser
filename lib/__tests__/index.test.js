var luceneQuerySyntaxParser = require('../../lib');

describe('Lucene query syntax parser', function() {
    it('should parse query', function() {
        expect(luceneQuerySyntaxParser.parse('title:"foo bar" AND body:"quick fox"')).toEqual([
            {
                "end": {
                    "column": 6,
                    "line": 1,
                    "offset": 5
                },
                "start": {
                    "column": 1,
                    "line": 1,
                    "offset": 0
                },
                "text": "title",
                "type": "field"
            },
            {
                "end": {
                    "column": 7,
                    "line": 1,
                    "offset": 6
                },
                "start": {
                    "column": 6,
                    "line": 1,
                    "offset": 5
                },
                "text": ":",
                "type": "operator"
            },
            {
                "end": {
                    "column": 16,
                    "line": 1,
                    "offset": 15
                },
                "start": {
                    "column": 7,
                    "line": 1,
                    "offset": 6
                },
                "text": "\"foo bar\"",
                "type": "value"
            },
            {
                "end": {
                    "column": 17,
                    "line": 1,
                    "offset": 16
                },
                "start": {
                    "column": 16,
                    "line": 1,
                    "offset": 15
                },
                "text": " ",
                "type": "whitespace"
            },
            {
                "end": {
                    "column": 20,
                    "line": 1,
                    "offset": 19
                },
                "start": {
                    "column": 17,
                    "line": 1,
                    "offset": 16
                },
                "text": "AND",
                "type": "conjunction"
            },
            {
                "end": {
                    "column": 21,
                    "line": 1,
                    "offset": 20
                },
                "start": {
                    "column": 20,
                    "line": 1,
                    "offset": 19
                },
                "text": " ",
                "type": "whitespace"
            },
            {
                "end": {
                    "column": 25,
                    "line": 1,
                    "offset": 24
                },
                "start": {
                    "column": 21,
                    "line": 1,
                    "offset": 20
                },
                "text": "body",
                "type": "field"
            },
            {
                "end": {
                    "column": 26,
                    "line": 1,
                    "offset": 25
                },
                "start": {
                    "column": 25,
                    "line": 1,
                    "offset": 24
                },
                "text": ":",
                "type": "operator"
            },
            {
                "end": {
                    "column": 37,
                    "line": 1,
                    "offset": 36
                },
                "start": {
                    "column": 26,
                    "line": 1,
                    "offset": 25
                },
                "text": "\"quick fox\"",
                "type": "value"
            },
            {
                "end": {
                    "column": 38,
                    "line": 1,
                    "offset": 37
                },
                "start": {
                    "column": 38,
                    "line": 1,
                    "offset": 37
                },
                "text": "",
                "type": "eof"
            }
        ])
    });
});