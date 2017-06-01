function xhrModule(str){
  var xhr = new XMLHttpRequest();
  xhr.open("POST", '/feeling/'+str, true);
  console.log('/feeling/'+str)
    xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {//Call a function when the state changes.
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      console.log(this.responseText);
      gaugeUpdate(JSON.parse(this.responseText))
    }
  }
  var keys = {'token':'hugahuga'}
  xhr.send(JSON.stringify(keys));
}

function gaugeUpdate(data){
  var wrapper = document.getElementsByClassName("gauge-inner");
  width = data[0]/(data[0]+data[1])*100;
  wrapper[0].style.width = width + "%"
}
