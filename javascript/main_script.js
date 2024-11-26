// Wait for the page to load
window.addEventListener('load', function() {
    // Hide the loading animation and show the content after 2 seconds
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
    }, 2000); // You can adjust the timeout for the loading screen duration
});

var navLinks= document.getElementById("navLinks");

function showmenu(){
    navLinks.style.right="0";
}   
function hidemenu(){
    navLinks.style.right="-200px";
}

// document.addEventListener('contextmenu', event => event.preventDefault());