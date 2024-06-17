function toggleTab(tabId) {
    var tabs = document.querySelectorAll('.tab');
    var tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    
    tabContents.forEach(function(content) {
        content.classList.remove('active');
    });
    
    document.getElementById(tabId).classList.add('active');
    document.querySelector('[data-tab="' + tabId + '"]').classList.add('active');
}

function toggleVisibility(id) {
    var element = document.getElementById(id);
    var button = document.querySelector('button[onclick="toggleVisibility(\'' + id + '\')"]');
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
        button.classList.add('active');
    } else {
        element.style.display = "none";
        button.classList.remove('active');
    }
}

function openModal(img) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = "none";
}