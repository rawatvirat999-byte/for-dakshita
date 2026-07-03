const env=document.getElementById('env');
const letter=document.getElementById('letter');
const end=document.getElementById('end');
env.onclick=()=>{letter.classList.remove('hidden');env.style.display='none';document.querySelector('.hint').style.display='none';window.scrollTo({top:500,behavior:'smooth'});}
document.getElementById('endBtn').onclick=()=>{letter.classList.add('hidden');end.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});}
