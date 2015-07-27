function init() {
	$('#displayDebugCSS').click(function() {
		$("link#debugCSS").remove();
		if(this.checked === true) {
			$("<link>", {
				id	: 	"debugCSS",
				rel:	"stylesheet",
				type:	"text/css",
				href:	"../css/debugStyle.css",
				media:	"screen"
			}).appendTo("head");
		}
	});

	$("#displayCodeStruct").click(function() {
		$("#sillyText, #codeStruct").toggle("fast");
	});

	if(true) {
		$("#displayDebugCSS").trigger("click");
	}
}
