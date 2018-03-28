

matcherView = {
	updateGameView: function(){},
};

matcherController = {
	init: function(size) {},
}

$(document).ready( function() {
	$('#grid-size').focus();
	$("#grid-size-button").click( function(e){
		console.log("here");
		e.preventDefault();
		var size = $("#grid-size").val();
		$("#grid-size-form").hide();
		matcherController.init(size);
		matcherView.updateGameView();
	});
});
	