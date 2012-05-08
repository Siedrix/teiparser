var fs = require('fs'),
	util = require('util'),
	Parser = require("./parser").Parser,
	tei = fs.readFileSync('./62.xml').toString();

Parser.setStructure({
	header : ['title','author','publisher','distributor','bibl'],
    front  : ['pb','docTitle'],
    tags   : ['name','term','abbr','cit','q','foreign']	
});

var parser = new Parser(tei);

//console.log( util.inspect( parser.getFolios(), false, 4 ) );

var folios = parser.getFolios();

folios.forEach(function(folio){
	if(folio){
		console.log(folio.pb);
		console.log(folio.lines, folio.startLine);
	}
})
