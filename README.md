Please note that these instructions are online at www.smileysoftware.co.uk/projects/gmapper

# About gMapper

gMapper is a jQuery plugin that embeds a Google Map in seconds. gMapper is built so that you can add as many maps as you need to one page.
The plugin speaks for itself. Visit www.smileysoftware.co.uk/projects/gmapper to look at it. 

## Version
Currently gMapper is version 1.0, this is the very first release I have made.

## Support
Very shortly I'll have a support section on the site. Should there be any issues I'll tackle them there. But in the mean time please feel free to raise issues on github.


##Installation

gMapper is a jQuery plugin and so requires jQuery to function.

### 1. Download the package and place on your server
Download gMapper.js or gMapper.min.js and place it on your server. 
In this case I have put the script in the /js folder.

Now copy the two lines below and paste them into the header of your document. Alternatively you can place them near the bottom of the document. Just above the closing body tag.

<br/>
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" type="text/javascript" &gt;&lt;/script&gt;
<br/>
&lt;script src="js/gMapper.js" type="text/javascript"&gt;&lt;/script&gt;
						
### 2. The HTML
The HTML required is really, really simple. 

&lt;div id="gmapper"&gt;&lt;/div&gt;

I have chosen to create a div with an ID of gmapper but it could be anything. For your own sanity it's probably better to use a block level element such as a DIV or a SECTION, but other than that. Anything.


### 3. The JavaScript
gMapper will work as many times as you need on a page. Just call the plugin multiple times.

&lt;script&gt;<br/>
$(document).ready(function() {<br/>
&nbsp;&nbsp;$('div#gmapper').gMapper({<br/>
&nbsp;&nbsp;&nbsp;'width':'800',<br/>
&nbsp;&nbsp;&nbsp;'height': '400',<br/>
&nbsp;&nbsp;&nbsp;'area': 'Bullring Shopping Centre, Birmingham, United Kingdom'
				});<br/>}); 
<br/>&lt;/script&gt;<br/>

The plugin accepts three parameters.<br/>
* width -> This expects a number in pixels. This is the size that the map will be shown
* height -> This expects a number in pixels. Again this is the height that the map will display
* area -> This is the place you want to center the map on.

My advice would be to test the area you pass in Google maps (maps.google.com) before you use it within the plugin, just to make sure you get it spot on accurate.

To add a second map to your site just create the HTML again but this time give it a different ID. In my case I chose "anotherMap". Now tell the plugin where to find it.

$('div#gmapper').gMapper();

$('div#anotherMap').gMapper();								
						
And now both elements will be gMapper.
