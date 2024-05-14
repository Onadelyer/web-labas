document.addEventListener('DOMContentLoaded', () => {
    const tree = document.querySelector('.tree');
  
    tree.addEventListener('click', (event) => {
      if (event.target.classList.contains('node')) {
        const parentLi = event.target.parentElement;
        const childUl = parentLi.querySelector('ul');
  
        if (childUl) {
          childUl.classList.toggle('active');
        }
      }
    });
  });
  