var fs = require('fs'),
	util = require('util'),
	Parser = require("./parser").Parser,
	tei = fs.readFileSync('./65.xml').toString(),
	_ = require('underscore');

Parser.setStructure({
	header : ['title','author','publisher','distributor','bibl'],
    front  : ['pb','docTitle'],
    tags   : ['name','term','abbr','cit','q','foreign']
});

var parser = new Parser(tei);

console.log( util.inspect( _.chain( parser.getFolios() )
 .map(function(item){
	return item.tags
}).value() , false, 2 ) );


