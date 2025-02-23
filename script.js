function showTab(tab) {
    document.getElementById('flights').classList.add('hidden');
    document.getElementById('bus').classList.add('hidden');
    document.getElementById('trains').classList.add('hidden');
    document.getElementById('intl-flights').classList.add('hidden');
    document.getElementById(tab).classList.remove('hidden');

    document.getElementById('flights-tab').classList.remove('border-b-2', 'border-blue-500');
    document.getElementById('bus-tab').classList.remove('border-b-2', 'border-blue-500');
    document.getElementById('trains-tab').classList.remove('border-b-2', 'border-blue-500');
    document.getElementById('intl-flights-tab').classList.remove('border-b-2', 'border-blue-500');
    document.getElementById(tab + '-tab').classList.add('border-b-2', 'border-blue-500');
}

function toggleProducts(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

