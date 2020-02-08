const replace = require('replace-in-file');
const path = require('path');

// Website zum Erstellen von Regulären Ausdrücken (RegEx):
// https://ibnuhx.com/regex-generator/?ref=madewithvuejs.com

const performReplacements = ({files, from, to, countMatches}) => {
    const options = {files, from, to, countMatches};
    const results = replace.sync(options);
    console.log('Replace result: ', results);
};

// HTML Files
performReplacements({
    files: path.join(__dirname, 'dist/*.html'),
    from: [
        /href="\//g,
        /href=\//g,
        /src="\//g,
        /src=\//g,
        /<base href="/g,
        /<base href=/g
    ],
    to: [
        'href="',
        'href=',
        'src="',
        'src=',
        '<base href="/',
        '<base href=/',
    ],
    countMatches: true,
});

// CSS Files
performReplacements({
    files: path.join(__dirname, 'dist/*.css'),
    from: [
        /url\(\//g,
        /url\(\'\//g,
        /url\("\//g
    ],
    to: [
        'url(',
        'url(\'',
        'url("/'
    ],
    countMatches: true,
});
