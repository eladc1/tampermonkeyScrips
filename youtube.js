// ==UserScript==
// @name         remove all unwanted partss from youtube video player
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Lets spent less time in youtube
// @author       Elad sivan
// @match        https://www.youtube.com/watch?*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	function removeElementId(id) {
		var elem = document.getElementById(id);
		elem.parentNode.removeChild(elem);
	}

	function removeRelatedVideos() {
		removeElementId("related");
	}

	function cancelAutoPlay() {
		const toggle = document.getElementById("toggle");
		if (toggle.getAttribute("aria-pressed")) {
			toggle.click();
		}
	}

	function removeCommentsSection() {
		removeElementId("comments");
	}

	function cleanThePage() {
		setTimeout(() => {
			cancelAutoPlay();
			removeRelatedVideos();
			removeCommentsSection();
		}, 1000);
	}


	window.addEventListener("load", cleanThePage(), false);
})();