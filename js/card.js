function getfiles(file,callback){
	var ajaxCall=new XMLHttpRequest();
	ajaxCall.overrideMimeType("application/json");
	ajaxCall.open("GET",file,true);
	ajaxCall.onreadystatechange=function(){

		if(ajaxCall.readyState === 4 && ajaxCall.status=="200"){
			callback(ajaxCall.responseText);
		}
	}
	ajaxCall.send(null);
}
getfiles("json/data.json",function(text){
	var data=JSON.parse(text);
	details(data.mydata);
	
})



var body=document.querySelector("#root");


var main=document.createElement("section");
main.classList.add("container");
body.appendChild(main);

var sub1=document.createElement("card");
sub1.classList.add("card");
main.appendChild(sub1);

var image=document.createElement("img");
image.src="images/pic2.jpg";
image.alt="profile";
sub1.appendChild(image);

function details(mydetails){
	var h2=document.createElement("h2");
	h2.textContent=mydetails.name;
	sub1.appendChild(h2);

	var h5=document.createElement("h5");
	h5.textContent=mydetails.mobile;
	sub1.appendChild(h5);

	var h4=document.createElement("h4");
	h4.textContent=mydetails.email;
	sub1.appendChild(h4);


}


