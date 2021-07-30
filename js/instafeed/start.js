$(document).ready(function() {
var feed = new Instafeed({
        accessToken: InstagramToken,
    	limit:12,
    	template: '<div class="gallery"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
    });
    feed.run();

});
