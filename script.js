// التحقق من أن سلة التسوق تكون فارغة عند فتح الموقع لأول مرة
if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify([]));
}

// دالة لإضافة المنتجات إلى سلة التسوق
function addToCart(productName, imagePath, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, image: imagePath, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} تمت إضافته إلى السلة!`);
}

function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    // هنا يمكنك إضافة منطق البحث عن المنتجات بناءً على الاستعلام
    alert(`البحث عن: ${query}`);
    
    // مثال بسيط لعمل البحث: يمكنك استبدال هذا بالمنطق الحقيقي للبحث
    const products = ['شنط ', ' مرايا', 'منتج 3']; // قائمة المنتجات
    const results = products.filter(product => product.toLowerCase().includes(query));

    if (results.length > 0) {
        alert(`نتائج البحث: ${results.join(', ')}`);
    } else {
        alert('لا توجد نتائج');
    }
}




// عداد الزيارات
let visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) : 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);
document.getElementById('visitCount').textContent = `عدد الزيارات: ${visitCount}`;

// دالة لفتح صفحة سلة التسوق لعرض المنتجات
function viewCart() {
    window.open('cart.html', '_blank');
}

// دالة لحذف منتج من السلة باستخدام فهرس العنصر
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems(); // تحديث عرض السلة بعد الحذف
}
