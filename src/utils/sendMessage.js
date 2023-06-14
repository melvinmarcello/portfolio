const scriptURL = 'https://script.google.com/macros/s/AKfycbxac9yFPaytTxvZ0_Zll7eMB2hwyYKvmE_yEGllGW6gUjxKaX6-cooK_7lO6_rPQWk12w/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
