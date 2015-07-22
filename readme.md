# Vanilla Javascript Helper Functions, Ajax, Effects, DOM manipulation, Styles, Utilities, Without jQuery. 

Easy to use Vanilla Javascript Helper Functions Collection, Ajax, Effects, DOM manipulation, Styles, Utilities ...

## Features

- Lightweight, No libraries required
- Ajax
- Effects
- DOM manipulation 
- Styles
- Utilities

## Bower

````
bower install vanilla-helpers
````

## Getting Started

include js/vanillaHelpers.js OR js/vanillaHelpers.min.js


## Some Examples


## Example Ajax GET

````
vanillaHelpers.ajaxGet('http://example.com/fa=foo&foo=faa', function(data) {
	console.log(data);
});
````

If server returns json, parse it in callback function

````
vanillaHelpers.ajaxGet('http://example.com/fa=foo&foo=faa', function(data) {
	console.log(JSON.parse(data));
});
````

## Example Ajax Post

````
vanillaHelpers.ajaxPost('http://example.com/', 'a=b&b=c', function(data) {
	console.log(data);
});
````

You can also pass object as data

````
vanillaHelpers.ajaxPost('http://example.com/', { a: 'b', b: 'c' }, function(data) {
	console.log(data);
});
````

## Fade In

````
vanillaHelpers.fadeIn(document.getElementById('test'), 3000);

````

With Callback

````
vanillaHelpers.fadeIn(document.getElementById('test'), 3000, function() {
	console.log('animation stopped');
});

````

## Fade Out

````
vanillaHelpers.fadeOut(document.getElementById('test'), 3000);

````

With Callback

````
vanillaHelpers.fadeOut(document.getElementById('test'), 3000, function() {
	console.log('animation stopped');
});

````

## Next Element

````
vanillaHelpers.nextElement(document.getElementById('test'));
````

## Previous Element

````
vanillaHelpers.previousElement(document.getElementById('test'));
````

## Browser Vendor Properties

````
vanillaHelpers.setVendor(document.getElementById('test'), 'Transition', '1s');

````

Will add next styles

````
-webkit-transition: 1s;
   -moz-transition: 1s;
    -ms-transition: 1s;
     -o-transition: 1s;
        transition: 1s;
````

## Generate random integer

````
vanillaHelpers.randomInt(1, 10);
````

## Get Current url segment

if url is: http://example.com/faa/foo/boo

````
vanillaHelpers.urlSegment(2);
````

Will return foo

## Check if element hass specific class

````
vanillaHelpers.hasClass(document.getElementById('test'), 'foo');
````

## Add Class

````
vanillaHelpers.addCls(document.getElementById('test'), 'foo');
````

## Remove Class

````
vanillaHelpers.removeCls(document.getElementById('test'), 'foo');
````

## Toggle Class

````
vanillaHelpers.toggleCls(document.getElementById('test'), 'foo');
````

## Matches

````
vanillaHelpers.matches(document.getElementById('selector'), '#selector');
````

## String Starts With

````
vanillaHelpers.startsWith('SomeRandomText', 'Some');
````

## String Ends With

````
vanillaHelpers.endsWith('SomeRandomText', 'Some');
````

## String Between two characters

````
vanillaHelpers.stringBetween('SomeRandomText', 'R', 'T');
````

## In Array

````
vanillaHelpers.inArray(['a', 'b', 'c', 'd'], 'c');
````

## Contributing

contributions are more than welcome!

## License

See license.txt