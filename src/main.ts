import './reset.css'
import './styles.css'

let isStyleActive: boolean = false;

const body: HTMLBodyElement | null = document.querySelector('body');
const toggleButton: HTMLButtonElement | null = document.querySelector('#toggle-button');

toggleButton?.addEventListener('click', () => {
  isStyleActive = !isStyleActive;
  if (body) {
    const active = isStyleActive ? 'on' : 'off';
    body.className = active;
    toggleButton.innerText = `Toggle : ${active}`;
  }
})
