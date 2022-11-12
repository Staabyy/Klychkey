


var myAudio = document.getElementById("audio");
	var isPlaying = false;

	function togglePlay() {
	  if (isPlaying) {
	    myAudio.pause()
     $('.play').removeClass('fa-pause')
        $('.play').addClass('fa-play')
        $('#blur1').removeClass('blur')
	  } else {
	    myAudio.play();
     $('.play').addClass('fa-pause')
        $('.play').removeClass('fa-play')
         $('#blur1').addClass('blur')
	  }
	};
	myAudio.onplaying = function() {
	  isPlaying = true;
	};
	myAudio.onpause = function() {
	  isPlaying = false;
	};

	var myAudio1 = document.getElementById("audio1");
	var isPlaying1 = false;

	function togglePlay1() {
	  if (isPlaying1) {
	    myAudio1.pause()
     $('.play1').removeClass('fa-pause')
        $('.play1').addClass('fa-play')
        $('#blur2').removeClass('blur')
	  } else {
	    myAudio1.play();
     $('.play1').addClass('fa-pause')
        $('.play1').removeClass('fa-play')
        $('#blur2').addClass('blur')
	  }
	};
	myAudio1.onplaying = function() {
	  isPlaying1 = true;
	};
	myAudio1.onpause = function() {
	  isPlaying1 = false;
	};