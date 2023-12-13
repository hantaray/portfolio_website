(function () {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#contact-email');
    let phoneInput = document.querySelector('#contact-phone');
    let messageInput = document.querySelector('#contact-message');

    function showErrorMessage(input, message) {
        let container = input.parentElement; // The .input-wrapper

        // Remove an existing error
        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }

        // Now add the error, if the message is not empty
        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateEmail() {
        let value = emailInput.value;

        if (!value) {
            showErrorMessage(emailInput, 'E-mail is a required field.');
            return false;
        }

        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
            return false;
        }

        if (value.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    function validatePhone() {
        let value = phoneInput.value;

        if (!value.match(/[0-9]+$/)) {
            showErrorMessage(phoneInput, 'You must enter a valid phone number.');
            return false;
        }

        showErrorMessage(phoneInput, null);
        return true;
    }

    function validateMessage() {
        let value = messageInput.value;

        if (!value) {
            showErrorMessage(messageInput, 'Message is a required field.');
            return false;
        }

        showErrorMessage(messageInput, null);
        return true;
    }

    function validateForm() {
        let isValidEmail = validateEmail();
        let isValidPhone = validatePhone();
        let isValidMessage = validateMessage();
        return isValidEmail && isValidPhone && isValidMessage;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Do not submit to the server
        if (validateForm()) {
            alert('Success!');
        }
    });

    emailInput.addEventListener('input', validateEmail);
    phoneInput.addEventListener('input', validatePhone);
    messageInput.addEventListener('input', validateMessage);

    function addActive() {
        // Get the container element
        var listItemContainer = document.getElementById("navigation-list");
        console.log('listItemContainer', listItemContainer)

        // Get all listItems with class="navigation-list__list-item" inside the container
        var listItems = listItemContainer.getElementsByClassName("navigation-list__list-item");
        console.log('listItems', listItems)

        // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < listItems.length; i++) {
            var navList__item = listItems[i].getElementsByClassName("navigation-list__item")[0]; // Get the first element
            console.log('navList__item', navList__item)
            navList__item.addEventListener("click", function () {
                var current = document.getElementsByClassName("navigation-list__item--active");
                current[0].className = current[0].className.replace(" navigation-list__item--active", "");
                this.className += " navigation-list__item--active";
            });
        }
    }


})();
// Call the addActive function to activate the event listeners
addActive();