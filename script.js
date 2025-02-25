function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.add('hidden');
    });
    document.getElementById(tabName).classList.remove('hidden');

    const tabLinks = document.querySelectorAll('.tab');
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(tabName + '-tab').classList.add('active');
}

function toggleProducts(productId) {
    const productModal = document.getElementById(productId);
    productModal.classList.toggle('hidden');
}
