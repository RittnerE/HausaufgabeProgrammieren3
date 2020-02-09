
const messageForm = document.querySelector('#messageForm');

messageForm.addEventListener('submit', event => {
    const messageText = document.querySelector('#messageText');
    const messageAuthor = document.querySelector('#messageAuthor');
    const errorText = document.querySelector('#validationErrorText');
    const text = messageText.value;
    const author = messageAuthor.value;
    const Author = document.querySelector('#Author');

    const error = document.querySelector('#validationError');

    if (Author){
        event.preventDefault();
        console.log('klappt fast');
        console.log(messageAuthor.innerHTML);
    }


    if(!author){
        event.preventDefault();// stop form submission to server
        error.style.display = 'block';
    } else {
        error.style.display = 'none';

    } if(!text && Author){
        event.preventDefault();// stop form submission to server
        errorText.style.display = 'block';
    } else {
        errorText.style.display = 'none';
    }
});
