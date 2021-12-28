// get header rgb
let headerRGB=document.querySelector('header h2');
// get easy btn
let easyBtn=document.querySelector('#easy');
// get easy section
let easySection=document.querySelector('#easy-section');
// get hard btn
let hardBtn=document.querySelector('#hard');
// get hard section
let hardSection=document.querySelector('#hard-section');
// get game result text
let result=document.querySelector('#result');
// get new game btv
let newGameBtn=document.querySelector('#new-game');
// easy cards
let easyCards=document.querySelectorAll('#easy-section .cards');
// hard cards
let hardCards=document.querySelectorAll('#hard-section .cards');

// play Default with easy level
startPlaying(easyCards);

// Choose Easy level
easyBtn.addEventListener('click',function(){
    startPlaying(easyCards);
});

// Choose Hard level
hardBtn.addEventListener('click',function(){
    startPlaying(hardCards);
});

// Choose a New Game
newGameBtn.addEventListener('click',function(){
    if(easySection.style.display=='block'){
        startPlaying(easyCards);
    }
    else if(hardSection.style.display=='block'){
        startPlaying(hardCards);
    }
});

function startPlaying(sectionCards){
    result.textContent='';
    if(sectionCards.length==3){
        easySection.style.display='block';
        hardSection.style.display='none';
    }
    else{   
        easySection.style.display='none';
        hardSection.style.display='block';
    }
    randomeR=Math.floor(Math.random() * 255);
    randomeG=Math.floor(Math.random() * 255);
    randomeB=Math.floor(Math.random() * 255);
    rightColorID=Math.floor(Math.random() * sectionCards.length)+1;
    headerRGB.textContent='rgb('+randomeR+', '+randomeG+', '+randomeB+')';
    sectionCards[rightColorID-1].style.background=headerRGB.textContent;
    for(let i=0;i<sectionCards.length;i++){
        if(i!=rightColorID-1){
            let randomeR1=Math.floor(Math.random() * 255);
            let randomeG1=Math.floor(Math.random() * 255);
            let randomeB1=Math.floor(Math.random() * 255);
            sectionCards[i].style.background='rgb('+randomeR1+', '+randomeG1+', '+randomeB1+')';
        }
    }
    for(let i=0;i<sectionCards.length;i++){
        sectionCards[i].addEventListener('click',function(){
            if(sectionCards[i].style.background!=headerRGB.textContent){
                sectionCards[i].style.background='none';
                sectionCards[i].style.border='none';
                result.textContent='TRY AGAIN';
            }
            else{
                result.textContent='WILL DONE';
                for(let j=0;j<sectionCards.length;j++){
                    sectionCards[j].style.background=headerRGB.textContent;
                    sectionCards[j].style.border='solid 1px whitesmoke';
                }
            }
        });
    }
}
