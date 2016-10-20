var cheerio = require('cheerio');

var chunks = [];
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function () {
	var chunk = process.stdin.read();
	if (chunk !== null) {
		chunks.push(chunk);
	}
});

process.stdin.on('end', function () {
	var $ = cheerio.load(chunks.join(''));
	var selector = process.argv.slice(2).join(' ');
	console.log(selector);
	var matches = $(selector);
	matches.each(function (i, el) {
		console.log(matches.eq(i).html());
	});
});
