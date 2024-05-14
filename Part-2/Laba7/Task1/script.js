document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const getDimensionsButton = document.getElementById('getDimensions');
    const addBlockButton = document.getElementById('addBlock');
    const infoDiv = document.getElementById('info');
  
    // Function to get dimensions and coordinates of blocks
    const getDimensions = () => {
      infoDiv.innerHTML = '';
      const blocks = document.querySelectorAll('.block');
      blocks.forEach((block, index) => {
        const rect = block.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        infoDiv.innerHTML += `
          <p>Block ${index + 1}:
            Width: ${rect.width}px, Height: ${rect.height}px,
            Window Coords: (Top: ${rect.top}px, Left: ${rect.left}px),
            Container Coords: (Top: ${rect.top - containerRect.top + container.scrollTop}px, Left: ${rect.left - containerRect.left}px),
            Scroll Position: ${container.scrollTop}px
          </p>
        `;
      });
    };
  
    // Add block functionality
    addBlockButton.addEventListener('click', () => {
      const newBlock = document.createElement('div');
      newBlock.classList.add('block');
      newBlock.style.backgroundColor = 'lightgrey';
      newBlock.innerText = `Block ${document.querySelectorAll('.block').length + 1}`;
      container.appendChild(newBlock);
      addBlockListeners(newBlock);
    });
  
    // Function to change block size
    const changeBlockSize = (block) => {
      const newSize = prompt('Enter new size (width,height) in pixels:', '100,100');
      if (newSize) {
        const [width, height] = newSize.split(',').map(Number);
        block.style.width = `${width}px`;
        block.style.height = `${height}px`;
        getDimensions();
      }
    };
  
    // Add click event listeners to existing blocks
    const addBlockListeners = (block) => {
      block.addEventListener('click', () => changeBlockSize(block));
    };
  
    document.querySelectorAll('.block').forEach(addBlockListeners);
  
    getDimensionsButton.addEventListener('click', getDimensions);
  });
  