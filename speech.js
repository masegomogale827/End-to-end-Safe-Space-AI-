const transcript = document.getElementById('transcript');

function startRecording() {
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.onresult = function(event) {
    transcript.value = event.results[0][0].transcript;
  };
  recognition.start();
}

function submitReport() {
  alert("Report submitted! (Simulated)");
}
