const typeText = document.querySelector("#description")
const textToBeTyped = "- Full-Stack developer and cornflakes fan;"

function displayContent(e){
  const allDivs = document.getElementsByClassName('display-div');
  for(var i=0;i<allDivs.length;i++){
    allDivs[i].style.display = 'none';
  }
  
  document.getElementById(`display-${e.id}`).style.display = 'block';
}

function playAnim(index=0,isAdding=true) {
  setTimeout(function () {
    
    typeText.innerText = textToBeTyped.slice(0, index)
    if (isAdding) {
 
      if (index > textToBeTyped.length) {
        
        isAdding = false
        
        setTimeout( function () {
          playAnim(index,isAdding)
        }, 2000)
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
  }, 120)
}

playAnim()