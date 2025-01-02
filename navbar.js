// Highlight the active page in the navbar
document.querySelectorAll('.navbar a').forEach(link => {
    if (link.href === window.location.href) {
        link.style.fontWeight = 'bold';
        link.style.textDecoration = 'underline';
    }
});