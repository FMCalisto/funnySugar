jQuery(document).ready(function($){

	// hide messages 
	$("#error").hide();
	$("#sent-form-msg").hide();
	
	// on submit...
	$("#contactForm #submit").click(function() {
		$("#error").hide();
		
		//required:
		
		//name
		var name = $("input#name").val();
		if(name == ""){
			$("#error").fadeIn().text("Nome requirido");
			$("input#name").focus();
			return false;
		}

		//phone
		var phone = $("input#phone").val();
		if(phone == ""){
			$("#error").fadeIn().text("Telefone requirido");
			$("input#phone").focus();
			return false;
		}
		
		// email
		var email = $("input#email").val();
		if(email == ""){
			$("#error").fadeIn().text("E-Mail requirido");
			$("input#email").focus();
			return false;
		}

		//occasion
		var occasion = $("input#occasion").val();

		//theme
		var theme = $("input#theme").val();

		//people
		var people = $("input#people").val();

		//colors
		var colors = $("input#colors").val();

		//pasta
		var pasta = $("input#pasta").val();

		//filling
		var filling = $("input#filling").val();
		
		// comments
		var comments = $("#comments").val();
		
		// send mail php
		var sendMailUrl = $("#sendMailUrl").val();
		
		//to, from & subject
		var to = $("#to").val();
		var from = $("#from").val();
		var subject = $("#subject").val();
		
		// data string
		var dataString = 'name=' + name
						+ '&phone=' + phone
						+ '&email=' + email
						+ '&occasion=' + occasion
						+ '&theme=' + theme
						+ '&people=' + people
						+ '&colors=' + colors
						+ '&pasta=' + pasta
						+ '&filling=' + filling
						+ '&comments=' + comments
						+ '&to=' + to
						+ '&from=' + from
						+ '&subject=' + subject;

		// ajax
		$.ajax({
			type:"POST",
			url: sendMailUrl,
			data: dataString,
			success: success()
		});
	});  
		
		
	// on success...
	 function success(){
	 	$("#sent-form-msg").fadeIn();
	 	$("#contactForm").fadeOut();
	 }
	
    return false;
});

