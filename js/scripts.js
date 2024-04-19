
// Function to update content based on selected language
function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = langData[key];
    });
}

// Function to fetch language data
async function fetchLanguageData(lang) {
    try {
        const myRequest = new Request(`languages/${lang}.json`);
        const response = await fetch(myRequest);

        console.log('response', response);

        if (!response.ok) {
            throw new Error(`Failed to fetch language data for ${lang}`);
        }

        const data = await response.json();
        console.log('data', data);
        return data;
    } catch (error) {
        console.error('Error fetching language data:', error);
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
}


// Function to change language
async function changeLanguage(lang) {
    console.log('lang', lang)
    const langData = await fetchLanguageData(lang);
    console.log('langData', langData)
    updateContent(langData);
}

window.addEventListener('DOMContentLoaded', async () => {
    changeLanguage('de');
});
