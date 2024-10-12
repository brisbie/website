//Typing animation
document.addEventListener("DOMContentLoaded", function() {
  
  const text = "evanbrisbin@brisbie~$ me -h";
  const headerElement = document.getElementById('header');
  const aboutMe = document.getElementById('aboutme');
  let i = 0;

  function typeWriter(){
    if (i < text.length){
      headerElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
    else{
      fadeIn(aboutMe);
      addCursor();
    }
  }
  
  function fadeIn(element){
    element.style.opacity = 1;

  }

  function addCursor(){
    const cursor = document.createElement('div');
    cursor.setAttribute('id', 'cursor');
    headerElement.appendChild(cursor);
  }

  typeWriter();

});
