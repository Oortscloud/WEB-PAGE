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
        element.style.opacity = 0;
        setTimeout(function() {
            element.style.opacity = 1;
        }, 10);
        button.classList.add('active');
    } else {
        element.style.opacity = 0;
        setTimeout(function() {
            element.style.display = "none";
        }, 300);
        button.classList.remove('active');
    }
}

