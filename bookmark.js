$(document).ready(function(){
	$("#grid-view").click(function(){
		$("#grid-view-card").hide();
		$("#list-view").show();
		$("#list-view-card").show();
		$("#grid-view").hide();
	});

});
$(document).ready(function(){
	$("#list-view").click(function(){
	    $("#grid-view-card").show();
		$("#list-view").hide();
		$("#list-view-card").hide();
		$("#grid-view").show();
	});
});


