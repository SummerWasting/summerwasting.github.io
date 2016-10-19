$(function(){

			// ----home page muse background swap-----
	
	var museOriginal = true;

	$('#museButton1').click(museSwitch);

	function museSwitch(){

		if(museOriginal==true){
			$('#muse1 h1').text('"The more you see');
			$('#muse1 p').text('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.');
			$('#muse').css('background', 'url(images/2016/13534090_613995872107818_1510439815_n.jpg) no-repeat center center fixed');
			$('#muse').css('background-size', 'cover');
			museOriginal = false;
			

		}else{
			
			museOriginal = true;
			console.log(museOriginal);
			$('#muse1 h1').text('"The ghosts are in the furniture"');
			$('#muse1 p').text('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.');			
			$('#muse').css('background', 'url(images/youarebackground.jpg) no-repeat center center fixed');
			$('#muse').css('background-size', 'cover');
		};
	};

					// ----About Collapse------

var showAboutPic = false;

	$("#aboutTitle").click(showAbout);

function showAbout(){

if(showAboutPic==true){
		$("#aboutPics").hide();
		$("#aboutPics").slideToggle(1000);
		$("#aboutTitle h1").html('About Mark <span class="glyphicon glyphicon-chevron-up"></span>');
		$(".glyphicon-chevron-up").css('float', 'right');
		 showAboutPic = false;

	}else{

	if(showAboutPic = true){
		$("#aboutPics").show()
		$("#aboutPics").slideToggle(1000);
		$("#aboutTitle h1").html('About Mark <span class="glyphicon glyphicon-chevron-down"></span>');
		$(".glyphicon-chevron-down").css('float', 'right');

	

  		};

	};

 };


 				//------events list scroll----
 var events = [
 	{
 		'what': '"Meet Mark"',
 		'when': 'Thursday 25 April 2017',
 		'where': 'Clam Town',
 		'address': '1 Dickson Street, Newtown',
 		'duration': 'All of April!',
 		'directions': '1+Dickson+Street+Newtown+NSW'
 	},
 	{
 		'what': '"Apes A Poppin"',
 		'when': 'Saturday 5th May 2017',
 		'where': 'Chimps Gallery',
 		'address': '44 Palace Street, Petersham',
 		'duration': 'All Day!',
 		'directions': '44+Palace+Street+Petersham+NSW'
 	},
 	{
 		'what': '"Texture? I dont know anyone called Texture"',
 		'when': 'Friday 10th June 2017',
 		'where': 'Waterhouse House',
 		'address': '166 Halsey St, Brooklyn',
 		'duration': 'Always and Forever',
 		'directions': '166+Halsey+street+Brooklyn+NY'
 	},
 	 	{
 		'what': '"New Paintings and Drawings"',
 		'when': 'Sunday 23 October',
 		'where': '583 Projects',
 		'address': 'Damien Minton Projects - 583 Elizabeth St, Redfern',
 		'duration': 'One day only!',
 		'directions': '583+Elizabeth+St,Redfern+NSW'
 	},
 	 	{
 		'what': '"Ghost Ghouls and Cat Ghouls"',
 		'when': 'Monday 31 October',
 		'where': 'Cat House',
 		'address': '35 Addison Rd, Marrickville',
 		'duration': 'One day only!',
 		'directions': '35+Addison+Rd,Marrickville+NSW'
 	},
 	 	{
 		'what': '"Farewell To False Housemates"',
 		'when': 'Tuesday 9 November',
 		'where': 'New Brunswick House',
 		'address': '1600 Pennsylvania Ave, DC',
 		'duration': '4 More Years!',
 		'directions': '1600+Pennsylvania+Ave,Washington+DC'
 	}
 ];
 
 function template(data) {
 	return `<li> 
				<span class='glyphicon glyphicon-pencil' aria-hidden='true'></span>  
					WHAT:  
				<span class='italic'>  ${data.what}  </span> 
				<br> 
					WHERE: 
				<span class='italic'>  ${data.where}  </span> 
				<br> 
					WHEN:  
				<span class='italic'> ${data.when}  </span> 
				<br> 
					ADDRESS: 
				<a href='https://www.google.com/maps/embed/v1/place?key=AIzaSyDttRyJ59Ftx5gA7sbKBA_NH7VljB06w9s&amp;q=  
				${data.directions}
				' 
				target='googleMap'> 
					<span class='italic' id='redfern'> 
						${data.address} 
					</span> 
				</a> 
				<br> 
				<strong> 
					<span class='oneDay'>  ${data.duration}  </span> 
				</strong> 
			</li>`
 }

 var pageNum = 1;



 $("#eventPage").click(eventScroll);

 	function eventScroll(){	
 		
 		if(pageNum==1){
			var templatedHtml1 = template(events[0]);
			var templatedHtml2 = template(events[1]);
			var templatedHtml3 = template(events[2]);
				$('#event1').html(templatedHtml1);
				$('#event2').html(templatedHtml2);
				$('#event3').html(templatedHtml3);
					pageNum=2;
 		
 		}else if (pageNum==2){

			var templatedHtml1 = template(events[3]);
			var templatedHtml2 = template(events[4]);
			var templatedHtml3 = template(events[5]);
				$('#event1').html(templatedHtml1);
				$('#event2').html(templatedHtml2);
				$('#event3').html(templatedHtml3);
					pageNum=1;
 		};
 	};

 						// ---------event button page swap --------

var eventButton = true;

 $('#eventPage').click(eventButtonSwitch);

 	function eventButtonSwitch(){

 		if(eventButton==true){
 			$('#eventPage').html('Page 2');
 			$('#eventPage').css('background-color', '#F99E0E');
 			eventButton = false;
 		
 		}else{
			$('#eventPage').html('Page 1');
 			$('#eventPage').css('background-color', 'rgba(141, 179, 255, 1)');
 				eventButton = true;

 		};

 	};	
 
 				// -----contact send button alert------

$("#send").click(submitForm);

function submitForm(){
	alert("Thank You But Your Princess Is In Another Castle!");


};



});
	
