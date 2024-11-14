const typeText = document.querySelector("#description")
const textToBeTyped = "- Full-Stack Engineer and coffee addict;"

function displayContent(e){
  const allDivs = document.getElementsByClassName('display-div');
  const activeDivs = document.getElementsByClassName('active');

  for(let i=0;i<activeDivs.length;i++){
    activeDivs[i].classList.remove('active');
  }

  for(let i=0;i<allDivs.length;i++){
    allDivs[i].style.display = 'none';
  }
  
  const displayDiv = document.getElementById(`display-${e.id}`)
  displayDiv.style.display = 'block';
  e.classList.add('active')
}

function playAnim(index=0,isAdding=true) {
  setTimeout(function () {
    
    typeText.innerText = textToBeTyped.slice(0, index)
    if (isAdding) {
 
      if (index > textToBeTyped.length) {
        
        isAdding = false
        
        setTimeout( function () {
          playAnim(index,isAdding)
        }, 4000)
        return
      } else {
      
        index++
      }
    } else {
      
      if (index === 0) {
        
        isAdding = true
      } else {
        
        index--
      }
    }
    
    playAnim(index,isAdding)
  }, 50)
}

playAnim()