(function () {
    // Function to update content based on selected language
    function updateContent(langData) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = langData[key];
        });
    }

    // Function to fetch language data
    async function fetchLanguageData(lang) {
        const response = await fetch(`languages/${lang}.json`);
        return response.json();
    }

    // Function to change language
    async function changeLanguage(lang) {
        console.log('lang', lang)
        const langData = await fetchLanguageData(lang);
        updateContent(langData);
    }

    window.addEventListener('DOMContentLoaded', async () => {
        changeLanguage();
    });
})();