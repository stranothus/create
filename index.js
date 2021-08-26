function $create(node) {
	node = node.trim();
	let startingTag = node.match(/<(?:[^>\s]+)/)[0];
	startingTag = startingTag.slice(1, startingTag.length);


	let attributes = 
		node.slice(startingTag.length + 1, startingTag.length + 2) !== ">"
		?
		(node.slice(startingTag.length + 1).match(/([^>]+)/)[0]).replace(/\s/g, "").replace(/\([\"\']/g, "(#$#").replace(/[\"\']\)/g, "#$#)").replace(/\\[\"\']/g, "#$#").split(/[\"\'](?!url\()|=[\"\']/g)
		:
		"";


	let HTML = node.match(/>([^]*)</)[0];
	HTML = HTML.slice(1, HTML.length - 1);


	let element = document.createElement(startingTag);

	for(let i = 0; i < attributes.length - 1; i+=2) {
		element.setAttribute(attributes[i], attributes[i + 1].replace(/#\$#/g, "\'"));
	}

	element.innerHTML = HTML;

	return element;
}
