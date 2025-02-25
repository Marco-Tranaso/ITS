function helloWorld(language){
    let message;
    switch (language){
        case 'en':
        message = 'Hello World';
        break;
        case 'de':
        message = 'Hallo Welt';
        break;
        case 'fr':
        message = 'Bonjour le monde';
        break;
    }
    console.log(message);
}
helloWorld("fr");