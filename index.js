// Your code goes here:
let handleImageClick = function(event) {
  // let theImage = jQuery(this)
  let theImage = jQuery(event.target)
  console.log("Got a click event:", event)
  let srcValue = theImage.attr("src")
  console.log(srcValue)
}


jQuery("img").on("click", handleImageClick)
