document.addEventListener('DOMContentLoaded', function () {
  const productList = document.getElementById('productList');
  const filterInput = document.getElementById('filterInput');
  const totalCostElement = document.getElementById('totalCost');
  const modal = document.getElementById('modal');
  const closeModal = document.querySelector('.close');
  const saveChangesButton = document.getElementById('saveChanges');
  const addProductButton = document.getElementById('addProduct');
  const productNameInput = document.getElementById('productName');
  const productPriceInput = document.getElementById('productPrice');
  const productImageInput = document.getElementById('productImage');
  const editProductNameInput = document.getElementById('editProductName');
  const editProductPriceInput = document.getElementById('editProductPrice');

  let products = [];

  function renderProducts(productsToRender) {
    productList.innerHTML = '';
    productsToRender.forEach((product, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div>
          <span class="productName">${product.name}</span>
          <span class="productPrice">${product.price}</span>
        </div>
        <button class="deleteBtn">Delete</button>
      `;
      productList.appendChild(li);

      const deleteBtn = li.querySelector('.deleteBtn');
      deleteBtn.addEventListener('click', () => {
        products.splice(index, 1);
        renderProducts(filterProducts());
        updateTotalCost();
      });

      const productName = li.querySelector('.productName');
      const productPrice = li.querySelector('.productPrice');
      productName.addEventListener('click', () => openModal(index, 'name'));
      productPrice.addEventListener('click', () => openModal(index, 'price'));
    });
    updateTotalCost();
  }

  function addProduct() {
    const name = productNameInput.value.trim();
    const price = productPriceInput.value.trim();
    const image = productImageInput.value.trim();
    if (name && price && image) {
      products.push({ name, price, image });
      renderProducts(filterProducts());
      clearInputs();
    } else {
      alert('Please fill in all fields.');
    }
  }

  function clearInputs() {
    productNameInput.value = '';
    productPriceInput.value = '';
    productImageInput.value = '';
  }

  function openModal(index, field) {
    const product = products[index];
    modal.style.display = 'block';
    editProductNameInput.value = product.name;
    editProductPriceInput.value = product.price;
    saveChangesButton.onclick = () => {
      product.name = editProductNameInput.value;
      product.price = editProductPriceInput.value;
      renderProducts(filterProducts());
      closeModal.click();
    };
  }

  closeModal.onclick = () => {
    modal.style.display = 'none';
  }

  function updateTotalCost() {
    const totalCost = products.reduce((acc, curr) => acc + parseFloat(curr.price), 0);
    totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
  }

  function filterProducts() {
    const filterText = filterInput.value.toLowerCase();
    return products.filter(product => product.name.toLowerCase().includes(filterText));
  }

  filterInput.addEventListener('input', function () {
    renderProducts(filterProducts());
  });

  addProductButton.addEventListener('click', addProduct);

  renderProducts(products);
});
