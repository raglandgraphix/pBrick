$(function(){

	$.getJSON("js/json/indiana.json",function(data){








		
		const manufacturerInformation = data.distriubutorInformation;
		const numberOfCompanies = Object.keys(manufacturerInformation).length;
		for(let manufacturerInput=0;manufacturerInput<numberOfCompanies;manufacturerInput++){
			$("#dropdownPL").append(
				`
				<div class="manufacturer" id="${manufacturerInformation[manufacturerInput].companyName}">
      				<img src="${manufacturerInformation[manufacturerInput].companyLogo}"/>
      			</div>
      			`	
			);
		};

		const buttonState = {value:0};
	
		$("#dropdownPL").on("click",function(){
			
			if(buttonState.value==0){

				$(this).animate({height:"425px"},500);
				buttonState.value=1;
			}else{
				$(this).animate({height:"50px"},500);
				buttonState.value=0;
			}
			
		});
		window.onunload = function(){
			$("#dropdownPL").css({height:"50px"});
			buttonState.value=0;
		}		
		$(".manufacturer").on("click",function(){
			let clickedCompany = $(this).attr("id");
			$.each(manufacturerInformation, function(key1, val1){
 				if(clickedCompany==val1.companyName){
 					window.open(val1.companyWebsite, '_blank');
 				};
 			});
		});


		const menuState = {value:0};
	$("#myMenu").on("click",function(){
		if(menuState.value==0){
			$("#menu").animate({height:"600px"},500);
			menuState.value=1;
		}else{
			$("#menu").animate({height:"0px"},500);
			menuState.value=0;
			$("#dropdownPL").animate({height:"50px"},500);
			buttonState.value=0;
		};

	});






	});
	$("#premierLogo").on("click",function(){
		window.open("/","_self");
	});

	$(".navigationClass").on("click",function(){
		let locationLink = $(this).attr("id");
		switch(locationLink){
		case "contacts" : window.open("contacts.html","_self");
			break;
		case "projects": window.open("projects.html","_self");
			break;
		case "location": window.open("location.html","_self");
			break;
		}

	});

});