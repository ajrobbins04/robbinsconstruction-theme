import "../scss/style.scss";

document.addEventListener('DOMContentLoaded', () => {
  // Prove TS ran
  console.log('TS is alive!');

  // Add some text into the page
  const out = document.getElementById('ts-output');
  if (out) {
    out.textContent = 'TypeScript wrote this at ' + new Date().toLocaleTimeString();
  }

  // Wire up a button
  const btn = document.getElementById('hello-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      alert('Hello from TypeScript!');
    });
  }
});
