window.onload = function() {
const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

canvas.width = 1600
canvas.height = 900
    
    let frameTime = {
        previous: 0,
        secondsPassed: 0
    }

    function mainUpdateCall(time) {
        window.requestAnimationFrame(mainUpdateCall)
        
        context.clearRect(0,0,canvas.width,canvas.height)
        
      frameTime = {
          secondsPassed : (time - frameTime.previous) / 1000,
          previous : time
      }  
        
        
    }
    window.requestAnimationFrame(mainUpdateCall)
}

//se for usar o time como parâmetro das funcões individuais de update, não use o frameTime.previous para fazer as comparações, use o proprio time