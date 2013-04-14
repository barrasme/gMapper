(function($){
    $.fn.extend({ 
        gMapper: function(options) {
        	
        	var defaults = {
                width: 		'600',
                height : 	'600',
                area : 		'Bullring Shopping Centre, Birmingham, United Kingdom'
            }
                 
            var opt =  $.extend(defaults, options);
        	            
            return this.each(function() {
                var obj = $(this);                
                if(opt.width > '' && opt.height > ''){
                	var frame = buildIframe(opt.area, opt.width, opt.height);
                	obj.html(frame);
                } else {
                	obj.html('Sizes are not defined');
                }
                
				return this;
            });
        }
    });
     
})(jQuery);

function buildIframe(area, width, height){
	area = area.replace(" ", "+");
	var frame = '<iframe width="'+width+'" height="'+height+'" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"src="https://maps.google.co.uk/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q='+area+'&amp;aq=&amp;t=h&amp;ie=UTF8&amp;hq=&amp;hnear='+area+',+United+Kingdom&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe>';
	return frame;
}
