import * as output from "./output";
import * as parsing from './parsing';

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

export { output, parsing, processMarkdownText };
