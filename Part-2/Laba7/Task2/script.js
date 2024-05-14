document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const addBlockButton = document.getElementById('addBlock');
  const infoDiv = document.getElementById('info');

  let blocks = [];

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateRandomText = () => {
    const words = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Consectetur', 'Adipiscing', 'Elit', 'Integer', 'Nec', 'Odio', 'Praesent', 'Libero', 'Sed', 'Cursus', 'Ante', 'Dapibus', 'Diam'];
    const randomIndex = () => Math.floor(Math.random() * words.length);
    return `${words[randomIndex()]} ${words[randomIndex()]} ${words[randomIndex()]}`;
  };

  const addBlock = () => {
    const text = generateRandomText();
    const block = document.createElement('div');
    block.className = 'block';
    block.style.backgroundColor = generateRandomColor();
    block.style.width = `${Math.floor(Math.random() * 100) + 50}px`;
    block.style.height = `${Math.floor(Math.random() * 100) + 50}px`;
    block.textContent = text;

    block.addEventListener('click', (event) => {
      if (event.button === 0) { // Left click
        showBlockInfo(block);
      }
    });

    block.addEventListener('contextmenu', (event) => { // Right click
      event.preventDefault();
      removeBlock(block);
    });

    container.appendChild(block);
    blocks.push(block);
  };

  const removeBlock = (block) => {
    container.removeChild(block);
    blocks = blocks.filter(b => b !== block);
    clearBlockInfo();
  };

  const showBlockInfo = (block) => {
    infoDiv.innerHTML = `
      <p>Block: ${block.textContent}</p>
      <p>Width: ${block.offsetWidth}px</p>
      <p>Height: ${block.offsetHeight}px</p>
      <p>Top: ${block.offsetTop}px</p>
      <p>Left: ${block.offsetLeft}px</p>
      <button onclick="changeBlockStyle(${blocks.indexOf(block)})">Change Style</button>
    `;
  };

  const clearBlockInfo = () => {
    infoDiv.innerHTML = '';
  };

  window.changeBlockStyle = (index) => {
    const block = blocks[index];
    const color = prompt('Enter new color:');
    const fontSize = prompt('Enter new font size (e.g., 16px):');
    if (color) block.style.backgroundColor = color;
    if (fontSize) block.style.fontSize = fontSize;
    showBlockInfo(block);
  };

  addBlockButton.addEventListener('click', addBlock);
});
