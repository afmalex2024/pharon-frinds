// توليد رقم طلبية فريد باستخدام تاريخ ووقت الطلبية
function generateOrderNumber() {
    const date = new Date();
    return 'ORD-' + date.getFullYear() + (date.getMonth() + 1) + date.getDate() +
        '-' + date.getHours() + date.getMinutes() + date.getSeconds();
}

// عرض رقم الطلبية في الصفحة
document.getElementById('orderNumber').textContent = generateOrderNumber();

// عرض المنتجات الموجودة في سلة التسوق
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cartItemsContainer.innerHTML = ''; // مسح المحتويات القديمة

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name} - $${item.price}</span>
            <button onclick="removeFromCart(${index})">حذف</button>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    document.getElementById('cart-total').textContent = `المجموع الكلي: $${total}`;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>السلة فارغة.</p>';
    }
}

// دالة لحذف منتج من السلة
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems(); // تحديث عرض السلة بعد الحذف
}

// دالة للرجوع إلى الصفحة الرئيسية
function goBack() {
    window.location.href = 'index.html';
}

// عرض سلة التسوق عند تحميل الصفحة
window.onload = displayCartItems;
