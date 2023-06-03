const btnEl=document.getElementById("btn");
const emojinameEl=document.getElementById("emoji-name");


const emoji=[];
async function getEmoji() {
    let response=await fetch("https://emoji-api.com/emojis?access_key=62034cd0088b4d684f8553444e3ff4ffe54f14d2");
    data=await response.json();
    for(let i=0;i<1500;i++)
    emoji.push({
        emojiName:data[i].character,
        emojiCode:data[i].unicodeName,
    });
    
}

getEmoji()

btnEl.addEventListener("click",()=>{
    const randomNum=Math.floor(Math.random()*emoji.length);
    console.log(randomNum);
    btnEl.innerText=emoji[randomNum].emojiName;
    emojinameEl.innerText=emoji[randomNum].emojiCode;
});