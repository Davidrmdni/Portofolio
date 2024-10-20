const panels=document.querySelectorAll('.panel')
panels.forEach((panel, index) => { 
    panel.addEventListener('click', () => { 
        removeActiveClasses();
        panel.classList.add('active'); 
        playSound(sounds[index]);
    });
});

