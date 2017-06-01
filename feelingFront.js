function xhrModule(str){
  var xhr = new XMLHttpRequest();
  xhr.open("POST", '/feeling/'+str, true);
  console.log('/feeling/'+str)
    xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {//Call a function when the state changes.
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      var res = JSON.parse(this.responseText)
      console.log(res)
      
      UIUpdate(res)
    }
  }
  var keys = {'token':'hugahuga'}
  xhr.send(JSON.stringify(keys));
}

function UIUpdate(data){
   worldfeelUpdate(data);
   gaugeUpdate(data);
   textUpdate(data);
}

function worldfeelUpdate(data){
  var worldfeelText = document.getElementById("worldfeel");
  if(data[0]>data[1]){
    worldfeelText.innerHTML="happy world!";
  }else if(data[0]==data[1]){
    worldfeelText.innerHTML="even world!";
  }else if(data[0]<data[1]){
    worldfeelText.innerHTML="unhappy world..."
  }
}

function gaugeUpdate(data){
  var wrapper = document.getElementsByClassName("gauge-inner");
  width = data[0]/(data[0]+data[1])*100;
  wrapper[0].style.width = width + "%"
}

function textUpdate(data){
  var goodText = document.getElementById("goodtext");
  var badText = document.getElementById("badtext");

  goodText.innerHTML=data[0];
  badText.innerHTML=data[1];
}
