# Ukey1: an unified sign-in button

This is the version for parallel login. [Here](https://github.com/asaritech/ukey1-signin-button/) is the version for direct login. 
Learn more about button versions on our [demo page](http://ukey.one/demo/).

![Ukey1 button](https://github.com/asaritech/ukey1-signin-button2/blob/master/example/button_scr.jpg)

## Usage

If you want to use our unified Ukey1 sign-in button on your website, it's very simple. 
First, link our stylesheets in your html code (i.e. add the following line between `<header></header>` elements):

```html
<link rel="stylesheet" type="text/css" href="https://code.ukey1cdn.com/ukey1-signin-button2/master/css/ukey1-button2.min.css" media="screen">
```

Then, add our javascript to the end of your html code (i.e. append the following line to `<body></body>` elements):

```html
<script src="https://code.ukey1cdn.com/ukey1-signin-button2/master/js/ukey1-button2.min.js"></script>
```

And finally, you can simply add class `ukey1-button2` or `ukey1-button2 x2` to the clickable element you use. For example:

```html
<a href="#" class="ukey1-button2">Sign in with your favourite method</a>
<a href="#" class="ukey1-button2 x2">Sign in (bigger icons)</a>
```

## License

This code is released under the MIT license. Please see [LICENSE](https://github.com/asaritech/ukey1-signin-button2/blob/master/LICENSE) file for details.