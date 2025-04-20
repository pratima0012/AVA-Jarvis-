const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Pratima...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon Miss...")
    }

    else{
        speak("Good Evenining maam...")
    }

}

window.addEventListener('load', ()=>{
    speak("Initializing JARVIS..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Maam, How May I Help You?");
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }
    else if (message.includes("open linkedin")){
         window.open("https://www.linkedin.com","_blank");
         speak("Opening Linkedin...")
    }
    else if (message.includes("open whatsaap")){
        window.open("https://web.whatsapp.com","_blank");
        speak("Opening Linkedin...")
    }
    else if (message.includes("open pinterest")) {
        window.open("https://www.pinterest.com", "_blank");
        speak("Opening Pinterest...");
    }
    else if (message.includes("open github")) {
        window.open("https://www.github.com", "_blank");
        speak("Opening GitHub...");
    }
    else if (message.includes("open stackoverflow")) {
        window.open("https://stackoverflow.com", "_blank");
        speak("Opening Stack Overflow...");
    }
    else if (message.includes("open spotify")) {
        window.open("https://www.spotify.com", "_blank");
        speak("Opening Spotify...");
    }
    else if (message.includes("open amazon")) {
        window.open("https://www.amazon.com", "_blank");
        speak("Opening Amazon...");
    }
    else if (message.includes("open yahoo")) {
        window.open("https://www.yahoo.com", "_blank");
        speak("Opening Yahoo...");
    }
    else if (message.includes("open netflix")) {
        window.open("https://www.netflix.com", "_blank");
        speak("Opening Netflix...");
    }
    else if (message.includes("open google maps")) {
        window.open("https://www.google.com/maps", "_blank");
        speak("Opening Google Maps...");
    }
    else if (message.includes("open notes")) {
        window.open("https://www.evernote.com", "_blank");
        speak("Opening your notes...");
    }
    else if (message.includes("open discord")) {
        window.open("https://discord.com", "_blank");
        speak("Opening Discord...");
    }
    else if (message.includes("open skype")) {
        window.open("https://www.skype.com", "_blank");
        speak("Opening Skype...");
    }
    else if (message.includes("open drive")) {
        window.open("https://drive.google.com", "_blank");
        speak("Opening Google Drive...");
    }
    else if (message.includes("open trello")) {
        window.open("https://trello.com", "_blank");
        speak("Opening Trello...");
    }
    else if (message.includes("open hotstar")) {
        window.open("https://www.hotstar.com", "_blank");
        speak("Opening Disney+ Hotstar...");
    }
    else if (message.includes("open sony liv")) {
        window.open("https://www.sonyliv.com", "_blank");
        speak("Opening Sony Liv...");
    }
    
    else if (message.includes("open voot")) {
        window.open("https://www.voot.com", "_blank");
        speak("Opening Voot...");
    }
    
    else if (message.includes("open mx player")) {
        window.open("https://www.mxplayer.in", "_blank");
        speak("Opening MX Player...");
    }    

    else if (message.includes("notepad")) {
        window.open("https://www.notepad.in" ,"_blank");
        speak("Opening Notepad....");
    }

    else if (message.includes("open notepad")) {
        window.open("notepad://", "_blank");
        speak("Opening Notepad...");
    }
    
    else if (message.includes("open chatgpt")) {
        window.open("https://chat.openai.com", "_blank");
        speak("Opening ChatGPT...");
    }
    
    else if (message.includes("open vscode")) {
        window.open("vscode://", "_blank");
        speak("Opening Visual Studio Code...");
    }
    
    else if (message.includes("open python")) {
        window.open("https://www.python.org", "_blank");
        speak("Opening Python official website...");
    }
    
    else if (message.includes("open paint")) {
        window.open("ms-paint://", "_blank");
        speak("Opening Paint...");
    }
    
    

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
   }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else if(message.includes('vs code')) {
        window.open('VSCodeUserSetup-x64-1.94.2:///')
        const finalText = "Opening vs code";
        speak(finalText);
    }



    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
}