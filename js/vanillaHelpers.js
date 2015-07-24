/*
 vanillaHelpers v0.1
 (c) Dimitri Mikadze
 https://github.com/DimitriMikadze/vanilla-helpers
 License: MIT
*/
vanillaHelpers = {

	/**
	* Ajax GET request
	*
	* @param url
	* @param callback function
	* @return response
	*/
	ajaxGet: function(url, callback) {

		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
		xhr.open('GET', url);
		xhr.onreadystatechange = function() {
			if (xhr.readyState > 3 && xhr.status === 200) {
				callback(xhr.responseText);
			}
		};
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		xhr.send();

		return xhr;
	},

	/**
	* Ajax POST request
	*
	* @param url post to
	* @param data send to
	* @param callback function
	* @return response
	*/
	ajaxPost: function(url, data, callback) {

		var params = typeof data == 'string' ? data : Object.keys(data).map(
				function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
			).join('&');

		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		xhr.open('POST', url);
		xhr.onreadystatechange = function() {
			if (xhr.readyState > 3 && xhr.status === 200) {
				callback(xhr.responseText);
			}
		};
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(params);

		return xhr;
	},

	/**
	* Find next element
	*
	* @param element
	* @return next element
	*/
	nextElement: function(element) {

		do {
			element = element.nextSibling;
		} while (element && element.nodeType !== 1);

		return element;
	},

	/**
	* Find previous element
	*
	* @param element
	* @return next element
	*/
	previousElement: function(element) {

		do {
			element = element.previousSibling;
		} while (element && element.nodeType !== 1);

		return element;
	},

	/**
	* Fade in animation
	*
	* @param element 
	* @param animation speed
	* @param callback function
	*/
	fadeIn: function(element, speed, callback) {

		( ! element.style.opacity) ? element.style.opacity = 0 : '';

		var changeOpacity = setInterval(function() {
			
			element.style.opacity = Number(element.style.opacity) + 0.02;
			if (element.style.opacity >= 1) {
				clearInterval(changeOpacity);
				if (callback && typeof(callback) === "function") {
					callback();
				}
			}
		}, speed / 50);
	},

	/**
	* Fade Out animation
	*
	* @param element 
	* @param animation speed
	* @param callback function
	*/
	fadeOut: function(element, speed, callback) {

		( ! element.style.opacity) ? element.style.opacity = 1 : '';

		var changeOpacity = setInterval(function() {

			element.style.opacity -= 0.02;
			if (element.style.opacity <= 0) {
				clearInterval(changeOpacity);
				if (callback && typeof(callback) === "function") {
					callback();
				}
			}

		}, speed / 50);
	},

	/**
	* set browser vendor properties
	*
	* @param element 
	* @param property CSS3 set of specifications e.g Transition
	* @param value CSS3 set of specifications e.g Transition speed '1s'
	*/
	setVendor: function(element, property, value) {

		element.style["webkit" + property] = value;
		element.style["Moz" + property] = value;
		element.style["ms" + property] = value;
		element.style["o" + property] = value;
	},

	/**
	* Generate Random Integer
	*
	* @param min value of integer
	* @param max value of integer
	* @return integer
	*/
	randomInt: function(min, max) {

		return Math.floor(Math.random() * (max - min + 1) + min);
	},

	/**
	* Get current url segment
	*
	* @param index of url integer
	* @return string url segment
	*/
	urlSegment: function(index) {
		
		var url = window.location.pathname.split( '/' );
		return url[index];
	},

	/**
	* Check if element contains class
	*
	* @param element
	* @param class
	* @return boolean
	*/
	hasCls: function(element, className) {
		
		return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > - 1;
	},

	/**
	* Add Class
	*
	* @param element
	* @param className to add
	*/
	addCls: function(element, className) {

		if (element.classList) {
			element.classList.add(className);
		} else {
			element.className += ' ' + className;
		}
	},

	/**
	* Remove Class
	*
	* @param element
	* @param className to remove
	*/
	removeCls: function(element, className) {
		
		if (element.classList) {
			element.classList.remove(className);
		} else {
			element.className = element.className.replace(new RegExp(className, "g"), "");
		}

	},

	/**
	* Toggle class
	*
	* @param element
	* @param className to toggle
	*/
	toggleCls: function(element, className) {
		
		if (element.classList) {
			element.classList.toggle(className);
		} else {
			var classes = element.className.split(' ');
			var existingIndex = classes.indexOf(className);

			if (existingIndex >= 0) {
				classes.splice(existingIndex, 1);
			} else {
				classes.push(className);
			}

			el.className = classes.join(' ');
		}	
		
	},

	/**
	* Matches
	*
	* @param element
	* @param selector
	* @return boolean
	* e.g matches(document.getElementById('selector'), '#selector')
	*/
	matches: function(element, selector) {

		return (element.matches ||
				element.matchesSelector ||
				element.msMatchesSelector ||
				element.mozMatchesSelector ||
				element.webkitMatchesSelector ||
				element.oMatchesSelector).call(element, selector);
	},

	/**
	* String starts with
	*
	* @param string
	* @param string suffix
	* @return boolean
	*/
	startsWith: function(string, suffix) {

		return (string.substring(0, suffix.length) === suffix);

	},

	/**
	* String ends with
	*
	* @param string
	* @param string suffix
	* @return boolean
	*/
	endsWith: function(string, suffix) {

		return string.indexOf(suffix, string.length - suffix.length) !== -1;
	},

	/**
	* String between two characters
	*
	* @param string
	* @param start first character
	* @param end second character
	* @return string
	*/
	stringBetween: function(string, start, end) {

		return string.substring(string.lastIndexOf(start) + 1, string.lastIndexOf(end));
	},

	/**
	* In Array
	*
	* @param array
	* @param value check to
	* @return boolean
	*/
	inArray: function(array, value) {

		for(var i = 0; i < array.length; i++) {
			if (array[i] === value) {
				return true;
			}
		}
		return false;
	}

}
