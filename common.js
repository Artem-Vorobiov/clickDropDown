
function toggleNavPanel(x){
    var panel = document.getElementById(x), navarrow = document.getElementById("navarrow"); 
    if(panel.style.height == '0px'){
        panel.style.height = "300px";
        navarrow.innerHTML = "&#9662;";
        //panel.style.display = 'none'
        
    } else {
        panel.style.height = '0px';
        navarrow.innerHTML = "&#9652;";
        //panel.style.display = 'block';

    }
}



window.addEventListener('mousedown', function(event){
	var box = document.getElementById('sections_panel');
    var boxx = document.getElementsByTagName('button');
	if (event.target !== box && event.target.parentNode !== box ){
        box.style.height = '0px';
    }

})

