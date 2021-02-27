const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select a media stream - pass to vid element & play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error
    console.error('Brys Error:' + error);
  }
}

button.addEventListener('click', async () => {
  // Disable button when clicked
  button.disabled = true;
  // Start pic in pic
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disabled = false;
});
// on load
selectMediaStream();
