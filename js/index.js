const sliders = document.querySelectorAll('.slider');
let img = document.getElementById('slider-img')
let sliderTitle = document.getElementById('slider-title')
let sliderText = document.getElementById('slider-text')

sliders[0].classList.add('active')

sliders.forEach((el, index) => {
    el.addEventListener('click', (e)=> {
        e.preventDefault()
        console.log(sliders[0])
        
        if(index === 0){
            sliders[0].classList.add('active')
        }else{
            sliders[0].classList.remove('active')
        }
        if(index === 1){
            sliders[1].classList.add('active')
        }else{
            sliders[1].classList.remove('active')
        }
        if(index === 2){
            sliders[2].classList.add('active')
        }else{
            sliders[2].classList.remove('active')
        }
        switch(index){
            case 0:
                img.src = './images/illustration-features-tab-1.svg';
                sliderTitle.innerText = 'Bookmark in one click';
                sliderText.innerText = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';
                break;
            case 1:
                img.src = './images/illustration-features-tab-2.svg';
                sliderTitle.innerText = 'Intelligent search';
                sliderText.innerText = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.';
                break;
            case 2:
                img.src = './images/illustration-features-tab-3.svg';
                sliderTitle.innerText = 'Share your bookmark';
                sliderText.innerText = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.';
                break;
        }
    }) 
})

