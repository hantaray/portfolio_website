let siteLanguage = 'de';

// Function to update content based on selected language
function toggleLanguage() {
    if (siteLanguage == 'de') {
        document.querySelectorAll('[lang]').forEach(element => {
            if (element.getAttribute('lang') == 'en') {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        });
        siteLanguage = 'en';
    } else {
        document.querySelectorAll('[lang]').forEach(element => {
            if (element.getAttribute('lang') == 'de') {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        });
        siteLanguage = 'de';
    }

}
// Initial language
window.addEventListener('DOMContentLoaded', async () => {
    toggleLanguage();
});
