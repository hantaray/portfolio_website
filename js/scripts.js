// Function to update content based on selected language
function setLanguage(language) {
    document.querySelectorAll('[lang]').forEach(element => {
        if (element.getAttribute('lang') == language) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}
// Initial language
window.addEventListener('DOMContentLoaded', async () => {
    setLanguage('de');
});
