// ==UserScript==
// @name         Google- remove w3schools resultes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make to Google a better place
// @author       Elad Sivan
// @match        https://www.google.co.il/search?*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';
	// Blacklist search results
	const blackLinstSites = ["www.w3schools.com", "www.any-site-you-hate.com"];

	function isBlackListed(link) {
		return blackLinstSites.some(black => link.includes(black));
	}

	function filterResultes() {
		for (const result of document.getElementsByClassName('g')) {
			let link = result.querySelector('a').getAttribute('href');
			if (isBlackListed(link)) {
				result.remove();
			}
		}
	}
    
	window.addEventListener("load", filterResultes, false);
})();