// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

function clickHeart() {
  const heartGlyph = document.querySelectorAll(".like-glyph")
  heartGlyph.forEach(function(heartGlyph) {
    heartGlyph.addEventListener('click', function() {
      if (heartGlyph.textContent === EMPTY_HEART) {
      mimicServerCall()
      .then(function(response) {
        if(response === "Pretend remote server notified of action!") {
          heartGlyph.textContent = FULL_HEART
          heartGlyph.classList.add("activated-heart")
        }
      })
      .catch(function(error) {
        console.error('You goofed')
      })
    }   else if (heartGlyph.textContent === FULL_HEART) {
      heartGlyph.textContent = EMPTY_HEART
      heartGlyph.classList.remove("activated-heart")
    }
  })
})
}

document.addEventListener('DOMContentLoaded', function() {
  clickHeart()
})
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------


