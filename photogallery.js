(function(){
	"use strict"

	var i = 0;
	var imgs2016 = [
		["images/2016/1.jpg", "The angel puppy"], 
		["images/2016/2.jpg", "A moody princess"],
		["images/2016/3.jpg", "A curious mind"], 
		["images/2016/4.jpg", "Smelling the fresh air"],
		["images/2016/5.jpg", "Trotting to treats"], 
		["images/2016/6.jpg", "A squinty smile"],
		["images/2016/7.jpg", "The Tongue"], 
		["images/2016/8.jpg", "Happiness"],
		["images/2016/9.jpg", "Did you get my good side?"], 
		["images/2016/10.jpg", "Tongue II: Return of the Tongue"],
		["images/2016/11.jpg", "What?"], 
		["images/2016/12.jpg", "Turn your head!"],
		["images/2016/13.jpg", "Walk away"], 
		["images/2016/14.jpg", "The Collection"],
		["images/2016/15.jpg", "Serenity"], 
		["images/2016/16.jpg", "Welcome to DC"] 
	];

	var count = 0; 
	var imgs2017 = [
		["images/2017/1.jpg", "Men of stone"], 
		["images/2017/2.jpg", "Honest Abe"],
		["images/2017/3.jpg", "Straight reflection"], 
		["images/2017/4.jpg", "Dizzy"],
		["images/2017/5.jpg", "Pretty in pink"], 
		["images/2017/6.jpg", "Garden of vines"],
		["images/2017/7.jpg", "The Hill"], 
		["images/2017/8.jpg", "Shoreline"],
		["images/2017/9.jpg", "Peek-a-boo"], 
		["images/2017/10.jpg", "Book by the Pool"],
		["images/2017/11.jpg", "Poland Spring"], 
		["images/2017/12.jpg", "The Balcony"],
		["images/2017/13.jpg", "Boardwalk at night"], 
		["images/2017/14.jpg", "Let's Cuddle"],
		["images/2017/15.jpg", "The Sparklers I"], 
		["images/2017/16.jpg", "The Sparklers II"] 
	];

	var counter = 0;
	var imgs2018 = [
		["images/2018/1.jpg", "Blossom I"], 
		["images/2018/2.jpg", "Blossom II"],
		["images/2018/3.jpg", "Blossom III"], 
		["images/2018/4.jpg", "Blossom IV"],
		["images/2018/5.jpg", "Blossom V"], 
		["images/2018/6.jpg", "Clear Skies"],
		["images/2018/7.jpg", "Star"], 
		["images/2018/8.jpg", "Tinted Reflection"],
		["images/2018/9.jpg", "Glowing"], 
		["images/2018/10.jpg", "Golden Hour"],
		["images/2018/11.jpg", "Sunset"], 
		["images/2018/12.jpg", "Through the Lens"],
		["images/2018/13.jpg", "Bay View"], 
		["images/2018/14.jpg", "Lonely Sunflower"],
		["images/2018/15.jpg", "Beacon of Light"], 
		["images/2018/16.jpg", "Cotton Candy"] 
	];

	window.onload = function()
	{
		document.getElementById("prev").onclick = prevClick;
		document.getElementById("next").onclick = nextClick;
		setImg();

		document.getElementById("previous").onclick = prev;
		document.getElementById("thenext").onclick = thenext;
		setMoreImg()

		document.getElementById("prevv").onclick = prevprev
		document.getElementById("thenextnext").onclick = thenextnext;
		setLastImg();

	}

	function setImg()
	{
		console.log(imgs2016[i]);
		document.getElementById("img2016").setAttribute("src", imgs2016[i][0]);
		document.getElementById("num").textContent = i+1;
		document.getElementById("title").textContent = imgs2016[i][1];
	}

	function prevClick()
	{
		i--;
		if(i <= 0)
			document.getElementById("prev").setAttribute('disabled', true);
		else
			document.getElementById("next").disabled = false;
		setImg();
		console.log(i);
	}

	function nextClick()
	{
		i++;
		if(i >= imgs2016.length - 1)
			document.getElementById("next").disabled = true;
		else
			document.getElementById("prev").disabled = false;
		setImg();
		console.log(i);
	}

//---------------------------------------------------------------------------------------------------------

	function setMoreImg()
	{
		console.log(imgs2017[count]);
		document.getElementById("img2017").setAttribute("src", imgs2017[count][0]);
		document.getElementById("num2").textContent = count+1;
		document.getElementById("title2").textContent = imgs2017[count][1];
	}

	function prev()
	{
		count--;
		if(count <= 0)
			document.getElementById("previous").setAttribute('disabled', true);
		else
			document.getElementById("thenext").disabled = false;
		setMoreImg();
		console.log(count);
	}

	function thenext()
	{
		count++;
		if(count >= imgs2017.length - 1)
			document.getElementById("thenext").disabled = true;
		else
			document.getElementById("previous").disabled = false;
		setMoreImg();
		console.log(count);
	}
//---------------------------------------------------------------------------------------------------------

	function setLastImg()
	{
		console.log(imgs2018[counter]);
		document.getElementById("img2018").setAttribute("src", imgs2018[counter][0]);
		document.getElementById("num3").textContent = counter+1;
		document.getElementById("title3").textContent = imgs2018[counter][1];
	}

	function prevprev()
	{
		counter--;
		if(counter <= 0)
			document.getElementById("prevv").setAttribute('disabled', true);
		else
			document.getElementById("thenextnext").disabled = false;
		setLastImg();
		console.log(counter);
	}

	function thenextnext()
	{
		counter++;
		if(counter >= imgs2018.length - 1)
			document.getElementById("thenextnext").disabled = true;
		else
			document.getElementById("prevv").disabled = false;
		setLastImg();
		console.log(counter);
	}


})();














