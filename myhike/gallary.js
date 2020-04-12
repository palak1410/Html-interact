function upDate(previewPic){
   document.getElementById('image').innerHTML=previewPic.alt;
    document.getElementById('image').style.background="url('"+previewPic.src+"')";
	}

	function unDo(){
    
    var oldAlt = "Hover over an image below to display here."
    document.getElementById('image').innerHTML=oldAlt;
    document.getElementById('image').style.background='#8e68ff';
    document.getElementById('image').style.backgroundImage="url('')";
	}