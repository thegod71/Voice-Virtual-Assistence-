let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
// hm abb  ya bot bolay usska liya hm javascript may ek class hoti hai 
function speak(text){
    // //const synth = window.speechSynthesis;
    // // const voices = synth.getVoices() kon se awaaz may bo rhi hai ;
    let text_speak= new SpeechSynthesisUtterance(text)//jo bhi text pass hoga wo bolay ga bot
    // text_speak.voice = voices.find(v => v.name === "Google UK English Male"); kis awwaz may bol wana hai 
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="en-IN"// kon se language 
    window.speechSynthesis.speak(text_speak)
}   
 

function wishMe(){
    let day= new Date();// give real time 
    let hours=day.getHours();
    if(hours>=0 && hours<=12)speak("Good Morning Sir");
    else if (hours>12 && hours<=16)speak("Good afternoon Sir");
    else if  (hours>16 && hours<=20)speak("Good Evening Sir");
    else speak("Good Night Sir");
}
window.addEventListener("load",wishMe())

// aab hmko jo bolna hai 
let speechRecognition =window.SpeechRecognition || window.webkitSpeechRecognition// webkit ki use for crome
let recognition= new speechRecognition()// obejct of speechRecognition
recognition.onresult=(event) => {// jb hm bona start ho to usska liya 
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript// ky bola hai ussko show kr rha  hai 
    takeCommand(transcript.toLowerCase())// answer deyna ka liya aur  ya 
    //lowercase sbko lower case may send kraa gya
    
}
btn.addEventListener("click",()=>{
recognition.start();//  yaa jb hm buttob click ho to 
btn.style.display="none"// jg hmm bolay to button may likha gayab ho jaa aa aur gif show ho  
voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    console.log(message)
    if(message.includes("hello") || message.includes("hey") ){
        speak("bol lauraa betichod")
    }
    else if (message.includes("who are you")){// agr yaa statement uss line may hai to 
        //kch bhi bolo agr yaa statement uss line  may hai to 
        speak("I am Virtual assisstant,  created  by Gaurav")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp: //")// we  can open multiple apps which are presnt in laptop in simialr way 
    }
    else {
        speak(`SThis found on google regarding :  ${message}`)
        window.open(`https://www.google.com/search?q=${message} `)// on google search 
    }
   // yaha hm jo bhi custom krwana ho krwa skta hai 
   // idea ==>yaha hm else laaga kr jo message aaya hai usko hm server pr send kraa kr answer
   // fetch kraa kr whi ouptput de do  
}


/*  flow --> first we load the page -> wishMe()run 
    2  =>   jo speechRecognition hai yaa window.SpeechRecognition || window.webkitSpeechRecognition en
            en dono ki  help se sun rha hai  jo hm input de rha hai
    3  =>   recognition= new speechRecognition() yaa object banaa rha hai     
    4  =>   when we click button the recognition start mtlb hm input de skta hai 
    5  =>   jo button hai wo gaayab aur  gif show ji dekha rha hai ki  wo suun rha hai 
    6  =>   recognition.onresult=(event) ya jb start hua uss kaa bbad ka evecnt ka liua 
    7  =>   ess usska location bata rha hai ki kha  hai wo bol hai event k under
    8  =>   takecommand --> jo hm naa bola hai usska liya 
            A  => gif remove ,button show
            B  => Multiple conditin if  and else -->
                  1  => speak function   ka under text_speak= new SpeechSynthesisUtterance(text)
                        inbulit hota hai text_speak usska object banaa liya hai
                        uss sb uss ka under inbulit hota hai  
*/