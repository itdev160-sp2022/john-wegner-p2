//welcome message
var today = new Date(),
    hourNow = today.getHours(),
    salutation;
    if (hourNow > 18){
        salutation = 'Good evening';
    }else if (hourNow > 12){
        salutation = "Good afternoon";
    } else if (hourNow > 0){
        salutation = "Good morning";
    } else{
        salutation = "Welcome";
    }
    
var user = ', fellow pet lovers',
    greeting = salutation + user + '! You will find some basic information on some dog breeds here.',
    greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// Utility Functions
function get(element){
    return document.getElementById(element);
}

// Application functions
function openModal(){
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add("visible");
    backdrop.classList.add("visible");
}

function closeModal(){
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    // Clear text
    title.value = '';
    text.value = '';

    // Hide Modal
    modal.classList.remove("visible");
    backdrop.classList.remove("visible");
}

function saveContent(){
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');

    // Create content elements
    var newTitle = document.createElement('h4');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    // Add elements
    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

// Wire up event handlers
window.addEventListener('load', function(){
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
});