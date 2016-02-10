# simpleParallax
plugin for jQuery

## connection after jquery
`<script src="jquery.simpleparallax.js"></script>`

## use
```javascript
$(document).ready(function () {
    $(youSelectorBlock).simpleParallax();
});
```

## option
```javascript
parallaxArea: 60, /* def: '60', parallax area of image */
parallaxStart: 20, /* def: '20', start parallax area image */
/* parallaxArea + parallaxStart = not large 100 percent */
parallaxRun: 'up', /* def: 'up', variant: ('up'/'down') */
parallaxZoom: '' /* def: none, zoomin: '+', zoomout: '-' */
```
