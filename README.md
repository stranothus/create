# create
Simple JS function to quickly create DOM elements with attributes and innerHTML content

## Usage

`$create()` is used to create a singular HTML element with attributes and innerHTML content. You can essentially write in JSX. 

## Special rules:
 - Whitespace won't show up in attributes of the parent element. Use `%20` instead
 - You can only create one parent element at a time Make sure to include proper opening and closing tags

You can use `$create()` to directly append DOM elements, or you can store it in a variable. Since it's written with raw JS, you can manipulate it's content, attributes, event listeners, etc. just like any other DOM element's
