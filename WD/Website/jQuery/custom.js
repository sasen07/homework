$("document").ready(function(){
	//when the document is ready below functions work
	$(".contact-us").hide();//hides the content with class contact-us
	$(".form").hide();//hides the content with class form

	$("#contact-btn").click(function(){//executes when id contact-btn is clicked
		$(".contact-us").show();//shows the content with class contact-us
		$(".form").hide();
	});
	$("#form-btn").click(function(){
		$(".contact-us").hide();
		$(".form").show();
	});

	$(".artist-detail").hide();
	$("#a1").click(function(){
		$("#artist1").show();
		$("#artist2").hide();
		$("#artist3").hide();
		$("#artist4").hide();
		$("#artist5").hide();
	});

	$("#a2").click(function(){
		$("#artist2").show();
		$("#artist1").hide();
		$("#artist3").hide();
		$("#artist4").hide();
		$("#artist5").hide();
		
	});

	$("#a3").click(function(){
		$("#artist3").show();
		$("#artist1").hide();
		$("#artist2").hide();
		$("#artist4").hide();
		$("#artist5").hide();
	});

	$("#a4").click(function(){
		$("#artist4").show();
		$("#artist1").hide();
		$("#artist2").hide();
		$("#artist3").hide();
		$("#artist5").hide();
	});

	$("#a5").click(function(){
		$("#artist5").show();
		$("#artist1").hide();
		$("#artist2").hide();
		$("#artist3").hide();
		$("#artist4").hide();
	});

	//function for adding and removing css class
	$("#btn-change").click(function(){
	    $('.canvas').addClass("myClass", "fast");//adding a new css class to html element
	});
	$("#btn-previous").click(function(){
	    $('.canvas').removeClass("myClass", "fast");//removing a css class
    });

	//functions for clint-side stogare
    function submit_btn(){
    	localStorage.names = document.getElementById('name').value;
    }
    function getLocalStorage(){
    	if (localStorage.names) {
    		document.getElementById('print').innerHTML=localStorage.names;
    	}
    }    
});