function sendMessage() {
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if (!msg) return;

  const chatbox = document.getElementById('chatbox');
  chatbox.innerHTML += `<div class='user'>${msg}</div>`;

  const reply = "Can you describe what happened?";
  chatbox.innerHTML += `<div class='bot'>${reply}</div>`;
  input.value = '';
}
