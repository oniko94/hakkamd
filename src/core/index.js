const parsing = require('./parsing');
const output = require('./output.js');

function processCompleteLine(line) {
    line = parsing.processLine(line, ['#', '-', '!', '>', '`']);
    if (line.startsWith('<')) {
        return line;
    }
    return output.toHTML('default', line);
}

function processMarkdownText(input) {
    const textlines = input.split('\n\n');
    const processedLines = textlines.map(line => processCompleteLine(line));
    return output.generateHTMLText(processedLines);
}

module.exports = { output, parsing, processMarkdownText };
