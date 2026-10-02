// Fetch and render your index.html content
export async function renderUI(container) {
  const url = 'https://cdn.jsdelivr.net/gh/fivenightsofdiddy-pixel/unblocked@main/index.html';
  const response = await fetch(url);
  const html = await response.text();
  
  const target = typeof container === 'string' ? document.querySelector(container) : container;
  if (target) {
    target.innerHTML = html;
  }
}

export default renderUI;
