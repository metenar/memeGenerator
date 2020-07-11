const form=document.querySelector('form');
const urlInput=document.querySelector('input[name="urlInput"]');
const topText=document.querySelector('input[name="topText"]');
const bottomText=document.querySelector('input[name="bottomText"]');
const createButton=document.querySelector('#createButton');
const memeElement=document.querySelector('.memeElement');

//creating Meme

form.addEventListener('submit',function(e){
    e.preventDefault();
    
    const memeContainer=document.createElement('div');
    memeContainer.classList.add('memeContainer');
    const newDiv=document.createElement('div');
    newDiv.classList.add('memeImageDiv');
    const newMeme=document.createElement('img');
    newMeme.setAttribute('src',urlInput.value);
    newDiv.appendChild(newMeme);   
    const topTextDiv=document.createElement('div');
    topTextDiv.classList.add('topTextDiv');
    const newTopText=document.createElement('h1');
    newTopText.innerText=topText.value;
    topTextDiv.appendChild(newTopText);
    const bottomTextDiv=document.createElement('div');
    bottomTextDiv.classList.add('bottomTextDiv');
    const newBottomText=document.createElement('h1');
    newBottomText.innerText=bottomText.value;
    bottomTextDiv.appendChild(newBottomText);  
    const btnDiv=document.createElement('div');
    btnDiv.classList.add('newButton');
    const newButton=document.createElement('button');
    newButton.innerText='X';
    btnDiv.appendChild(newButton);
    memeContainer.append(newDiv,topTextDiv,bottomTextDiv,btnDiv);
    memeElement.append(memeContainer);
    form.reset()
    newButton.addEventListener('click',function(e){
        e.target.parentElement.parentElement.remove();
    })
    //const newMeme=document.createElement('h1');
    //newMeme.innerText=urlInput.value;
    //newMeme.append(memeElement);
    
})