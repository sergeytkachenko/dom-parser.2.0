let cheerio = require('cheerio');

class Proxy {

	getDomFromHtml(html, baseUrl) {
		this.baseUrl = baseUrl;
		this.dom = cheerio.load(html);
		this.appendBase();
		this.replaceAttributes();
		return this.dom;
	}

	appendBase() {
		this.dom('head').prepend(`<base href="${this.baseUrl}" />`);
	}

	replaceAttributes() {
		let elements = this.dom('[href],[src],[url]');
		debugger;
		elements.forEach(el => {
			console.log(el);
			debugger
		});
	}

	replaceUrl() {}

}

module.exports = new Proxy();