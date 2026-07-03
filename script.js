const letter=`baby im really sorry for how i reacted today on the call i know i got angry and i shouldnt have because after thinking about everything you said i realized that most of it was true you have told me so many times that you love long paragraphs because they make you feel loved safe and reassured especially after we fight you always tell me that you dont want to have to ask for love you want me to show it on my own and ive still failed to do that so many times and im genuinely sorry for making you feel like you have to keep reminding me of something that should come naturally i know you deserve better than that

when you mentioned nikita and vansh i wont lie in that moment i felt like you were comparing me to him and thats why i got defensive and angry but after thinking about it i understand that you werent trying to tell me to become someone else you were trying to explain what you wish i would do for you baby and because thats what makes you feel loved and i should have listened instead of getting upset and mad at you im sorry for making you feel unheard when all you wanted was for me to understand you

i never want you to think that you have to beg me for love or attention because you deserve all of it without asking you mean so much to me dakshita more than i can ever explain and i know i dont always show it the way you deserve but that doesnt mean i love you any less

i want to be the boyfriend who makes you smile without you asking who comforts you before you even have to say youre hurting who reassures you without waiting for you to ask because i know thats what youve wanted from me for so long and i promise ill try harder because i love you and i want to become better for you

also my dad switched off the wifi and i literally turned it back on just so i could write this to you because i didnt want to sleep without telling you how sorry i am and how much i love you

i love you so much baby and im really sorry for hurting you i know words alone arent enough anymore so ill show you through my actions too i just hope you can forgive your idiot boyfriend because no matter how much we fight or argue my heart will always choose you

love
viratt ❤️
xoxo`;
const env=document.getElementById('envelope');
const msg=document.getElementById('msg');
env.onclick=()=>{
 document.getElementById('letter').classList.remove('hidden');
 env.style.display='none';
 let i=0;
 const t=setInterval(()=>{msg.textContent+=letter[i]||'';i++;if(i>letter.length)clearInterval(t);},15);
 for(let i=0;i<80;i++)setTimeout(spawn,i*25);
};
document.getElementById('finish').onclick=()=>{
 document.getElementById('letter').classList.add('hidden');
 document.getElementById('end').classList.remove('hidden');
};
function spawn(){
 const e=document.createElement('div');
 e.className='float';
 const arr=['❤️','💌','🧸','🌸'];
 e.textContent=arr[Math.floor(Math.random()*arr.length)];
 e.style.left=Math.random()*100+'vw';
 e.style.fontSize=(22+Math.random()*26)+'px';
 e.style.animationDuration=(4+Math.random()*4)+'s';
 document.body.appendChild(e);
 setTimeout(()=>e.remove(),8000);
}
setInterval(spawn,250);
