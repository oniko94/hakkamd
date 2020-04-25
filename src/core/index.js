const parsing = require('./parsing');
const output = require('./output.js');

function processMarkdownText(input) {
    const textlines = input.split('\n\n');
    const processedLines = textlines.map(line => parsing.processLine(line, ['#', '-', '!', '>', '`']));
    return output.generateHTMLText(processedLines);
}

module.exports = { output, parsing, processMarkdownText };
