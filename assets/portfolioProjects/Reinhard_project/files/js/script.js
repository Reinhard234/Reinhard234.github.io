	init_pointer({
              pointerColor: "orange",
			  ringSize: 21,
			  ringClickSize: 10
			  
        })

	var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid white}";
        document.body.appendChild(css);
    };


	var rellax = new Rellax('.rellax');

	var glasses = document.getElementById('glasses');
	var body = document.getElementById('body');
	var face = document.getElementById('face');
	var text = document.getElementById('text');
	var galaxy = document.getElementById('galaxy');
	var distant_galaxy = document.getElementById('distant-galaxy');
	var big_galaxy = document.getElementById('big-galaxy');
	var hidden_text = document.getElementById('hidden-text');
	var left_hair = document.getElementById("left-hair");
	var right_hair = document.getElementById("right-hair");
	var lineOne = document.getElementById("line-one");
	var lineTwo = document.getElementById("line-two");
	var lineThree = document.getElementById("line-three");
	var rocket = document.getElementById("rocket");
	var section_one = document.getElementById("sec1");
	var section_two = document.getElementById("sec2");
	var section_three = document.getElementById("sec3");
	var section_four = document.getElementById("sec4");
	var section_five = document.getElementById("sec5");
	var section_six = document.getElementById("sec6");
	var section_seven = document.getElementById("sec7");
	var section_eight = document.getElementById("sec8");
	var section_nine = document.getElementById("sec9");
	var section_ten = document.getElementById("sec10");
	var face_container = document.getElementById("face-container");
	var home_button = document.getElementById("home-button");
	var info_button = document.getElementById("info-button");
	var UFO = document.getElementById("ufo");
	var panel = document.getElementById("panel");
	var dropdown = document.getElementById("dropdown");
	var dropup = document.getElementById("dropup");
	var interior = document.getElementById("interior");
	var asteroid_one = document.getElementById("asteroid-one");
	var asteroid_two = document.getElementById("asteroid-two");
	var asteroid_three = document.getElementById("asteroid-three");
	var asteroid_four = document.getElementById("asteroid-four");
	var planet_2 = document.getElementById("planet-2");
	var planet_3 = document.getElementById("planet-3");
	var astronaut = document.getElementById("astronaut");
	var lighthouse = document.getElementById("lighthouse");
	var light_beam = document.getElementById("light-beam");

	rocket.style.opacity = '0';
	lineOne.style.opacity = '0';
	lineTwo.style.opacity = '0';
	lineThree.style.opacity = '0';
	galaxy.style.display = 'none';
	big_galaxy.opacity = '0';


	lighthouse.addEventListener('click', lighthouse_click)
	lighthouse.addEventListener('mouseover', lighthouse_mouseover)
	// lighthouse.addEventListener('mouseout', lighthouse_mouseout)


	glasses.addEventListener('mouseover', move_over_glasses)
	glasses.addEventListener('mouseout', move_out_glasses)

	distant_galaxy.addEventListener('mouseover', distant_galaxy_mouseover)
	distant_galaxy.addEventListener('mouseout', distant_galaxy_mouseout)

	ufo.addEventListener('mouseover', ufo_mouseover)
	ufo.addEventListener('mouseout', ufo_mouseout)

	home_button.addEventListener('mouseover', home_mouseover)
	home_button.addEventListener('mouseout', home_mouseout)

	info_button.addEventListener('mouseover', info_mouseover)
	info_button.addEventListener('mouseout', info_mouseout)

	dropdown.addEventListener('click', dropdown_click)
	dropup.addEventListener('click', dropup_click)

	asteroid_one.addEventListener('mouseover', A1_hover)
	asteroid_two.addEventListener('mouseover', A2_hover)
	asteroid_three.addEventListener('mouseover', A3_hover)
	asteroid_four.addEventListener('mouseover', A4_hover)

	asteroid_one.addEventListener('mouseout', A1_out)
	asteroid_two.addEventListener('mouseout', A2_out)
	asteroid_three.addEventListener('mouseout', A3_out)
	asteroid_four.addEventListener('mouseout', A4_out)

	planet_2.addEventListener('mouseover', P2_hover)
	planet_3.addEventListener('mouseover', P3_hover)

	planet_2.addEventListener('mouseout', P2_out)
	planet_3.addEventListener('mouseout', P3_out)

	astronaut.addEventListener('mouseover', astronaut_hover)
	astronaut.addEventListener('mouseout', astronaut_out)




	function lighthouse_click()
	{
		// alert('ok');
		// light_beam.style.opacity = '0';
		// var toggle = false;
		if (light_beam.style.display === "block") 
		{
			// light_beam.style.animationPlayState = "paused";	
			// $('#lighthouse').css()
			lighthouse.style.backgroundImage = "url('media/lighthouse2.svg')";
			light_beam.style.display = "none";
			// toggle = true;
		}
		else
		{
			lighthouse.style.backgroundImage = "url('media/lighthouse.svg')";
			// light_beam.style.animationPlayState = "running";	
			light_beam.style.display = "block";
			// toggle = false;
		}
	}


	function lighthouse_mouseover()
	{
		beach_ambience.play();
		beach_ambience.volume = 0.2;
		
	}

	// function lighthouse_mouseout()
	// {
	// 	document.getElementsByClassName('tooltiptext')[0].style.visibility = 'hidden';
	// 	document.getElementsByClassName('tooltiptext')[0].style.opacity = 0;
	// }



	function move_over_glasses()
	{
		face.style.opacity = '0.7';
		face.style.background = " url('media/face.svg') 50% 20% no-repeat";
		body.style.backgroundColor = '#111D35';
		text.style.color = 'white';
		face_container.style.display = "none";
		face.style.display = "block";
		glasses.style.animation = 'stars 2s infinite';
		glasses.style.animationPlayState = 'running';
		hidden_text.style.display = 'block';
		text.style.display = 'none' ;


		galaxy.style.display = 'block';

		glasses.addEventListener('click', click_glasses)


	}
	function move_out_glasses()
	{
		face.style.opacity = '1';
		body.style.backgroundColor = '#D9E3E7';
		face.style.background = " url('media/face-hair.svg') 50% 20% no-repeat";
		glasses.style.width = 10 + '%';
		face_container.style.display = "block";

		glasses.style.height = 9 + '%';
		glasses.style.animation = 'adad 2s infinite';
		text.style.color = 'black';
		hidden_text.style.display = 'none';
		text.style.display = 'block' ;
		galaxy.style.display = 'none';
		// left_hair.style.opacity = 1;
		// right_hair.style.opacity = 1;

	}

	function click_glasses()
	{
		glasses.removeEventListener('mouseout', move_out_glasses);
		face_container.style.display = "none";
		// alert('nice')
		// document.getElementsByTagName('body').style.backgroundColor = '#111D35'
		body.style.backgroundColor = '#111D35'
		face.style.top = 100 + '%';
		setTimeout(function(){
			face.style.display = 'none'; 
			glasses.style.display = 'none';  
		}, 300);
		
		rocket.style.opacity = '1';

		// left_hair.style.left = -70 + "%"
		// right_hair.style.left = 100 + '%'
		glasses.style.top = 100 + '%';
		hidden_text.style.left = 100 + '%';
		// galaxy.style.height =  55 + '%';
		// galaxy.style.width =  55 + '%';
		// galaxy.style.animation = "galaxy 102s infinite linear";
		galaxy.style.display = "none";
		big_galaxy.style.display = "block";
		lineOne.style.opacity = "1";
		lineOne.style.animationPlayState = "running";
		lineTwo.style.opacity = "1";
		lineTwo.style.animationPlayState = "running";
		lineThree.style.opacity = "1";
		lineThree.style.animationPlayState = "running";	
		section_one.style.display = "block";	
		section_two.style.display = "block";
		section_three.style.display = "block";
		section_four.style.display = "block";
		section_five.style.display = "block";
		section_six.style.display = "block";
		section_seven.style.display = "block";
		section_eight.style.display = "block";
		section_nine.style.display = "block";
		section_ten.style.display = "block";

		// document.getElementsByClassName('tooltiptext')[0].innerHTML = "poes!";
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'visible';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 1;

		// setTimeout(function()
		// { alert("Hello"); }, 3000);

		setTimeout(function() 
		{
        document.getElementsByClassName('tooltiptext')[0].style.visibility = 'hidden';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 0;
        }, 9000);

		start_music();


	}

	function distant_galaxy_mouseover()
	{
		document.getElementsByClassName('tooltiptext')[0].innerHTML = "my knowledge does not stretch that far yet!";
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'visible';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 1;
	// visibility: visible;
 //  opacity: 1;
	}

	function distant_galaxy_mouseout()
	{
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'hidden';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 0;
	}

	function ufo_mouseover()
	{
		// popup.play();
		// var vol = 0.20;
		alien.volume = 0.10;
		alien.play();
		$("#interior").css('background-image','url("media/interior2.svg")')
		// var vol = 0;
		// var interval = 100; // 200ms interval

		// var fadein = setInterval(
		//   function() 
		//   {
		//     // Reduce volume by 0.05 as long as it is above 0
		//     // This works as long as you start with a multiple of 0.05!
		//     if (vol < 0.15) {
		//       vol += 0.02;
		//       alien.volume = vol;
		//     }
		//     else {
		     
		//       clearInterval(fadein);
		//     }
		//   }, interval);

		setTimeout(function() 
		{
		document.getElementsByClassName('tooltiptext')[0].innerHTML = "There were a lot of uncertainties in the beginning";
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'visible';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 1;   
		popup.play();  
        }, 0);
		
	}

	function ufo_mouseout()
	{
		// var vol = 0.15;
		// // var interval = 100; // 200ms interval
		// // var stop = false;

		// // // var fadeout = setInterval(
		// // //   function() 
		// // //   {
		// // //     // Reduce volume by 0.05 as long as it is above 0
		// // //     // This works as long as you start with a multiple of 0.05!
		// // //     if (vol > 0.02) {
		// // //       vol -= 0.02;
		// // //       alien.volume = vol;
		// // //     }
		// // //     else {
		// // //      stop = true;
		// // //       clearInterval(fadeout);
		// // //     }
		// // //   }, interval);

		// // // if (stop == true) 
		// // // {
		// // // 	alien.stop();
		// // // }
		alien.pause();

		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'hidden';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 0;
	}




	function A1_hover()
	{
	

		setTimeout(function() 
		{
		document.getElementsByClassName('tooltiptext')[0].innerHTML = "There were a lot of obstacles on the way";
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'visible';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 1;
		popup.play();  
        }, 600);

        $("#interior").css('background-image','url("media/interior3.svg")')

		//popup.play();	
	}

	function A2_hover()
	{
		setTimeout(function() 
		{
		document.getElementsByClassName('tooltiptext')[0].innerHTML = "There were a lot of obstacles on the way";
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'visible';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 1;
		popup.play();  
        }, 600);	
        $("#interior").css('background-image','url("media/interior3.svg")')	
	}

	function A3_hover()
	{
		setTimeout(function() 
		{
		document.getElementsByClassName('tooltiptext')[0].innerHTML = "There were a lot of obstacles on the way";
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'visible';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 1;
		popup.play();  
        }, 600);		
		$("#interior").css('background-image','url("media/interior3.svg")')
	}

	function A4_hover()
	{
		setTimeout(function() 
		{
		document.getElementsByClassName('tooltiptext')[0].innerHTML = "There were a lot of obstacles on the way";
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'visible';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 1;
		popup.play();  
        }, 600);	
        $("#interior").css('background-image','url("media/interior3.svg")')
	}

	function A1_out()
	{
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'hidden';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 0;
	}

	function A2_out()
	{
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'hidden';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 0;
	}

	function A3_out()
	{
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'hidden';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 0;
	}

	function A4_out()
	{
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'hidden';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 0;
	}

	function P2_hover()
	{
	

		setTimeout(function() 
		{
		document.getElementsByClassName('tooltiptext')[0].innerHTML = "Things were starting to look promising!";
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'visible';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 1;
		popup.play();  
        }, 600);

		$("#interior").css('background-image','url("media/interior.svg")')

	}

	function P3_hover()
	{
		setTimeout(function() 
		{
		document.getElementsByClassName('tooltiptext')[0].innerHTML = "Things were starting to look promising!";
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'visible';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 1;
		popup.play();  
        }, 600);
        $("#interior").css('background-image','url("media/interior.svg")')			
	}

	function P2_out()
	{
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'hidden';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 0;		
	}

	function P3_out()
	{
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'hidden';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 0;		
	}




	function home_mouseover()
	{
		panel.innerHTML = "Go Home";
	}

	function home_mouseout()
	{
		panel.innerHTML = "<b>- - - -</b>";
	}

	function info_mouseover()
	{
		panel.innerHTML = "More info";
	
		document.getElementsByClassName('tooltiptext')[0].innerHTML = "Use your <b>scroll</b> wheel. <hr style = 'border-bottom: 1px solid black;'> Don't forget to <b>hover</b> over things.<hr style = 'border-bottom: 1px solid black;'>  <b>Click</b> on me to return to the top!"
        document.getElementsByClassName('tooltiptext')[0].style.visibility = 'visible';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 1;
		popup.play(); 
       
	}

	function info_mouseout()
	{
		panel.innerHTML = "<b>- - - -</b>";
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'hidden';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 0;
	}

	function dropdown_click()
	{
		interior.style.bottom = -25 + "%";
		panel.style.bottom = -5 + "%";
		dropdown.style.display = 'none';
		dropup.style.display = 'block';
		info_button.style.bottom = -16 + "%";
		home_button.style.bottom = -16 + "%";
	}
	function dropup_click()
	{
		interior.style.bottom = -5 + "%";
		panel.style.bottom = 14 + "%";
		dropdown.style.display = 'block';
		dropup.style.display = 'none';
		info_button.style.bottom = 3 + "%";
		home_button.style.bottom = 3 + "%";
	}


	function astronaut_hover()
	{
		setTimeout(function() 
		{
		document.getElementsByClassName('tooltiptext')[0].innerHTML = "Sometimes it felt like I was going in circles";
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'visible';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 1; 
		popup.play();      
        }, 600);
         	
			
	}

	function astronaut_out()
	{
		document.getElementsByClassName('tooltiptext')[0].style.visibility = 'hidden';
		document.getElementsByClassName('tooltiptext')[0].style.opacity = 0;
	}



	//SOUNDDDDDDDDD

	var space_ambience = new Audio("audio/space.mp3");
	var city_ambience = new Audio("audio/city.mp3");
	var traffic_ambience = new Audio("audio/traffic.mp3");
	var beach_ambience = new Audio("audio/beach.mp3");
	var popup = new Audio("audio/pop.mp3");
	var beep = new Audio("audio/beep.mp3");
	var alien = new Audio("audio/alien.mp3");
	popup.volume = 0.2;


	// alien.volume = 0.15;
	alien.loop = true;
	space_ambience.volume = 0.05;
	city_ambience.volume = 0.5;
	beep.volume = 0.1;
	beep.loop = true;
	traffic_ambience.volume = 0.1;
	traffic_ambience.loop = true;
	beach_ambience.loop = true;
	// beach_ambience.volume = 0.2;

	function start_music()
	{

	$('#pre-sec').hover(function()
	{
	    	    city_ambience.pause();
	    traffic_ambience.pause(); 
	    beach_ambience.pause(); 
	});

	// ,function(){
	//     // space_ambience.pause();
	// }

	  $('#sec1').hover(function()
	  {
	    space_ambience.play();

	    // alert('hello there');

	});

	    $('#sec2').hover(function()
	    {
	    	
	    	space_ambience.play();
	    		    beep.pause();
	    city_ambience.pause();
	    traffic_ambience.pause();
	    beach_ambience.pause();
	    
	
	     
	    
	});

	  $('#sec3').hover(function(){
	  	alien.pause();
	    space_ambience.play();
	    beep.pause();
	    city_ambience.pause();
	    traffic_ambience.pause();
	    beach_ambience.pause();
	    // $("#interior").css('background-image','url("media/interior.svg")')
	});

	$('#sec4').hover(function(){
	    space_ambience.play();
	    beep.pause();
	    city_ambience.pause();
	    traffic_ambience.pause();
	    beach_ambience.pause();
	    // $("#interior").css('background-image','url("media/interior.svg")')
	});

	  $('#sec5').hover(function(){
	    space_ambience.play();
	    beep.pause();
	    city_ambience.pause();
	    traffic_ambience.pause();
	    beach_ambience.pause();
	});

	  $('#sec6').hover(function()
	  {
	  	// city_ambience.pause();
	  	// traffic_ambience.pause();
	    space_ambience.play();
	    beep.play();
	    city_ambience.pause();
	    traffic_ambience.pause();
	    beach_ambience.pause();
	    $("#interior").css('background-image','url("media/interior4.svg")')

	});		

	  $('#sec7').hover(function(){

	    space_ambience.pause();
	    beep.pause();
	   	beach_ambience.play();
	   	beach_ambience.volume = 0.2;


	   	// beach_ambience.volume = 0.2;
	    city_ambience.pause();
	    traffic_ambience.pause();
	});

	  $('#sec8').hover(function(){
	  	// city_ambience.pause();
	  	// traffic_ambience.pause();
	   //  space_ambience.play();
	    // space_ambience.volume = 0.05;
	    beep.pause();
	    space_ambience.pause();
	    beach_ambience.play();
	    city_ambience.pause();
	    beach_ambience.volume = 0.2;
	    traffic_ambience.pause();
	    $("#interior").css('background-image','url("media/interior5.svg")')	
	});

	  $('#sec9').hover(function(){
	  	// city_ambience.pause();
	  	// traffic_ambience.pause();
	   //  space_ambience.play();
	    // space_ambience.volume = 0;
	    beep.pause();
	    space_ambience.pause();
	    city_ambience.pause();
	    traffic_ambience.pause();
	});

	  $('#sec10').hover(function(){
	  	// space_ambience.pause();
	  	// space_ambience.volume = 0;
	  	// beach_ambience.volume = ;
	  	 $("#interior").css('background-image','url("media/interior6.svg")')	
	  	beep.pause();
	  	space_ambience.pause();
	  	beach_ambience.pause();
	    city_ambience.play();
	    traffic_ambience.play();
	});

	}









	// var length = $("li").length/2;
	// var p = 0;
	// var u = 0;
	// while(u<10000) {
	// for(i=0;i<3;i++){
	//   $( "ul" ).animate({
	//     marginTop: "-"+(i*2)+".55em"
	//   }, 3000 );
	//   p = i+1;
	// }

	// if(p==3){
	// for(j=p-1;j>=0;j--){
	//   $( "ul" ).animate({
	//     marginTop: "-"+(j*2)+".55em"
	//   }, 2000 );
	// }
	// 	}
	// 	u++;
	// 	}
let spaceship = document.querySelector('#spaceship');

spaceship.addEventListener('mousemove', (e) => {
  // let eyes = document.querySelector('.eyes');
  let man = document.querySelector('#astronaut');
  let mouseX = (man.getBoundingClientRect().left); 
  let mouseY = (man.getBoundingClientRect().top);
  let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
  let rotationDegrees = (radianDegrees * (180/ Math.PI) * -1) + 180;
  // eyes.style.transform = `rotate(${rotationDegrees}deg)`
  
  man.style.transform = `rotate(${rotationDegrees}deg)`
});

