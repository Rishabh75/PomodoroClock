$(document).ready(function(){

	var sCount=parseInt($('#sessionCount').html());
	var bCount=parseInt($('#breakCount').html());
	var count;
	var breakCount;
	var counter;
	var bCounter;

	// To play Audio

	 var wav = 'http://www.codingtutorials360.com/14244764.mp3';
     var audio = new Audio(wav);

	// Increment and Decrement buttons

	$('#sessionDec').click(function(){
		if(sCount>1){ 
			sCount--;
			$('#sessionCount').html(sCount);
		
		}
	});

	$('#sessionInc').click(function(){
		sCount++;
		$('#sessionCount').html(sCount);
	});

	$('#breakDec').click(function(){
		if(bCount>1){ 
			bCount--;
			$('#breakCount').html(bCount);
		}
	});

	$('#breakInc').click(function(){
		bCount++;
		$('#breakCount').html(bCount);
	});

	// Start Function

	$('#start').click(function(){
		count=sCount;
		count*=60;
		counter=setInterval(timer,1000);
		
		function timer(){
			if((count/60)>0){ 
				$('#start').hide();
				$('#timerName').html('Session Time');
			
				count--;
				if((count%60)>9){
					$('#timer').html(Math.floor(count/60)+' : '+count%60);
				}
				else{
					$('#timer').html(Math.floor(count/60)+' : 0'+count%60);
				}
			}
			else{
				clearInterval(counter);
				audio.play();
				bCounter=setInterval(bTimer,1000);
				
			}

		}

		breakCount=bCount;
		breakCount*=60;
		function bTimer(){

			if((breakCount/60)>0){ 
				$('#timerName').html('Break Time');
			
				breakCount--;
				if((breakCount%60)>9){
					$('#timer').html(Math.floor(breakCount/60)+' : '+breakCount%60);
				}
				else{
					$('#timer').html(Math.floor(breakCount/60)+' : 0'+breakCount%60);
				}
			}
			else{
				clearInterval(bCounter);
				audio.play();
				$('#timerName').html("Time's up .........!!!!!!!!");
				$('#start').show();
			}
		}
		
	});


	// Reset button Function

	$('#reset').click(function(){

		clearInterval(bCounter);
		clearInterval(counter);
		$('#timerName').html('');
		$('#timer').html('0 : 00');
		$('#sessionCount').html('25');
		$('#breakCount').html('25');
		sCount=parseInt($('#sessionCount').html());
		bCount=parseInt($('#breakCount').html());
		$('#start').show();
	});

});