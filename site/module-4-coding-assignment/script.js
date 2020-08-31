(function () {
var listNames = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < listNames.length; i++) {
  var firstLetter = listNames[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker.speak(listNames[i]);
  }
  else {
    helloSpeaker.speak(listNames[i]);
  }
}
})();
