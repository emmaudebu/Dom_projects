let paragraph = document.getElementsByTagName('p')
for (let i = 0; i < paragraph.length; i++) {


    // level 1  Answers

    paragraph[0].textContent='First Paragphy'
    paragraph[1].textContent='Second Paragphy'
    paragraph[2].textContent='Third Paragphy'
    paragraph[3].textContent='Fourth Paragphy'
    paragraph[i].setAttribute("Id", "Paragraph")      //level 2 answers
    paragraph[i].setAttribute("Class", "Para")

    // end of level 1 answers


    
    // level 2  Answers

paragraph[i].style.color='red'
paragraph[i].style.background='#94d72f'
paragraph[i].style.padding='20px'
paragraph[i].style.fontSize='20px'
paragraph[i].style.fontFamily="'Courier New', Courier, monospace"
paragraph[1].style.color='green'
paragraph[3].style.color='green'


    // level 2  Answers







}