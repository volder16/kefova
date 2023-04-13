// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var imgs = document.getElementsByClassName("photo");
var modalImg = document.getElementById("modalImg");
for (var i = 0; i < imgs.length; i++) {
  var img = imgs[i];
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
var minimizeBtn = document.getElementById("minimizeBtn");

// When the user clicks on the minimize button, close the modal
minimizeBtn.onclick = function() {
  modal.style.display = "none";
}
function openFullscreen(imgSrc) {
  var newWindow = window.open('', '', 'fullscreen=yes'); // open a new window in full screen mode
  newWindow.document.write('<img src="' + imgSrc + '" style="max-width:100%;max-height:100%;">'); // write the image to the new window
  newWindow.document.write('<button onclick="window.close()">Close</button>'); // add a close button to the new window
}
