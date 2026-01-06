let currentBrand = 'dior';

function init() {
    const brandItems = document.querySelectorAll('.brand-item');
    
    brandItems.forEach(item => {
        item.addEventListener('click', function() {
            const brandKey = this.getAttribute('data-brand');
            switchBrand(brandKey);
        });
    });
    
    loadBrandProducts(currentBrand);
}

function switchBrand(brandKey) {
    currentBrand = brandKey;
    
    const brandItems = document.querySelectorAll('.brand-item');
    brandItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-brand') === brandKey) {
            item.classList.add('active');
        }
    });
    
    loadBrandProducts(brandKey);
}

function loadBrandProducts(brandKey) {
    const brand = brandData[brandKey];
    
    document.getElementById('brand-title').textContent = brand.name;
    document.getElementById('brand-description').textContent = brand.description;
    
    renderProducts(brand.lipsticks, 'lipstick-products');
    renderProducts(brand.perfumes, 'perfume-products');
}

function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    if (products.length === 0) {
        container.innerHTML = '<p class="no-products">暂无产品</p>';
        return;
    }
    
    products.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        container.appendChild(productCard);
    });
}

function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const currentColor = product.colors && product.colors.length > 0 ? product.colors[0] : null;
    const displayImage = currentColor ? currentColor.image : product.image;
    
    const img = document.createElement('img');
    img.className = 'product-image';
    img.src = displayImage;
    img.alt = product.name;
    img.onerror = function() {
        this.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(product.name);
    };
    
    const info = document.createElement('div');
    info.className = 'product-info';
    
    const name = document.createElement('h3');
    name.className = 'product-name';
    name.textContent = product.name;
    
    const price = document.createElement('p');
    price.className = 'product-price';
    price.textContent = product.price;
    
    const description = document.createElement('p');
    description.className = 'product-description';
    description.textContent = product.description;
    
    info.appendChild(name);
    info.appendChild(price);
    info.appendChild(description);
    
    card.appendChild(img);
    card.appendChild(info);
    
    if (product.colors && product.colors.length > 0) {
        const colorSection = document.createElement('div');
        colorSection.className = 'card-color-section';
        
        const colorTitle = document.createElement('h4');
        colorTitle.className = 'card-color-title';
        colorTitle.textContent = '选择色号';
        colorSection.appendChild(colorTitle);
        
        const colorList = document.createElement('div');
        colorList.className = 'card-color-list';
        
        product.colors.forEach((color, colorIndex) => {
            const colorItem = document.createElement('div');
            colorItem.className = `card-color-item ${colorIndex === 0 ? 'active' : ''}`;
            colorItem.dataset.index = colorIndex;
            
            const colorCircle = document.createElement('div');
            colorCircle.className = 'card-color-circle';
            colorCircle.style.backgroundColor = color.color;
            
            const colorName = document.createElement('span');
            colorName.className = 'card-color-name';
            colorName.textContent = color.name;
            
            colorItem.appendChild(colorCircle);
            colorItem.appendChild(colorName);
            colorList.appendChild(colorItem);
            
            colorItem.addEventListener('click', function(e) {
                e.stopPropagation();
                
                const allColorItems = colorList.querySelectorAll('.card-color-item');
                allColorItems.forEach(item => item.classList.remove('active'));
                this.classList.add('active');
                
                img.src = color.image;
            });
        });
        
        colorSection.appendChild(colorList);
        card.appendChild(colorSection);
    } else {
        card.addEventListener('click', function() {
            showProductDetail(product);
        });
    }
    
    return card;
}

function showProductDetail(product) {
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    
    let colorSection = '';
    if (product.colors && product.colors.length > 0) {
        const colorItems = product.colors.map((color, index) => `
            <div class="color-item ${index === 0 ? 'active' : ''}" data-index="${index}">
                <div class="color-circle" style="background-color: ${color.color}"></div>
                <span class="color-name">${color.name}</span>
            </div>
        `).join('');
        
        colorSection = `
            <div class="color-section">
                <h3 class="color-section-title">选择色号</h3>
                <div class="color-list">
                    ${colorItems}
                </div>
            </div>
        `;
    }
    
    const currentColor = product.colors && product.colors.length > 0 ? product.colors[0] : null;
    const displayImage = currentColor ? currentColor.image : product.image;
    const displayDescription = currentColor ? currentColor.description : product.description;
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img src="${displayImage}" alt="${product.name}" class="modal-image">
            <h2 class="modal-title">${product.name}</h2>
            <p class="modal-price">${product.price}</p>
            <p class="modal-description">${displayDescription}</p>
            ${colorSection}
            <button class="modal-button">加入购物车</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', function() {
        modal.remove();
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    if (product.colors && product.colors.length > 0) {
        const colorItems = modal.querySelectorAll('.color-item');
        const modalImage = modal.querySelector('.modal-image');
        const modalDescription = modal.querySelector('.modal-description');
        
        colorItems.forEach(item => {
            item.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                const selectedColor = product.colors[index];
                
                colorItems.forEach(ci => ci.classList.remove('active'));
                this.classList.add('active');
                
                modalImage.src = selectedColor.image;
                modalDescription.textContent = selectedColor.description;
            });
        });
    }
    
    const button = modal.querySelector('.modal-button');
    button.addEventListener('click', function() {
        alert('已添加到购物车！');
        modal.remove();
    });
}

document.addEventListener('DOMContentLoaded', init);
