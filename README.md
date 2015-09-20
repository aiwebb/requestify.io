# proxify.io

### NOTE: proxify.io is currently in testing and not open to public access.

The HTML spec doesn't allow any advanced options in anchor tags, like this:

`<a href="http://example.com?data" accept="application/json">`

[proxify.io](http://proxify.io) provides a workaround with a simple proxy for the [request](https://github.com/request/request) library.

### Usage

Hit [proxify.io](http://proxify.io) with a JSON encoded `options` query parameter to pass to the `request()` function. The result is streamed back - that's it.

Omitting the `options` query parameter will render this document instead.

### Example

```javascript
$('<a>').attr('href', 'http://proxify.io?options=' + encodeURIComponent(
	JSON.stringify({
		url: 'http://i.imgur.com/8oGNPR6.png'
	})
))
```

The above code produces this link:
	http://proxify.io/?options=%7B"url"%3A"http%3A%2F%2Fi.imgur.com%2F8oGNPR6.png"%7D

### Disclaimer

I own [proxify.io](http://proxify.io) - I built it to solve a specific problem. I log the words "request", "readme", or "error" for each request so I have some idea of usage, but I'm not logging any of the actual request URLs or options and never will. You are obviously welcome to [fork this project](http://github.com/alexwebb2/proxify.io) and host it yourself if you're more comfortable with that. If you make any improvements, pull requests are always welcome.