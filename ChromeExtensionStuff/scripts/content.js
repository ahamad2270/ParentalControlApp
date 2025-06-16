(async function () {
  // Wait a bit in case the video hasn't loaded
  console.log("ABOUT TO WAIT")
  await new Promise(res => setTimeout(res, 4000));
  let video = null
for(let i = 0; i<30; i++){
    console.log("Looking for video")
video = document.querySelector('video');

if (!video || video.readyState < 2) {
    console.warn("No video found or not ready.");
    console.log("ABOUT TO WAIT")
await new Promise(res => setTimeout(res, 2000));
}
else{
    
    break;
}
}
let title = document.querySelector('.style-scope ytd-watch-metadata');

document.addEventListener('keydown',  async function(event) {
   if (event.key === 'h') {
    console.log('Enter key was pressed!');
  
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0);
  console.log("ABOUT TO CREATE BLOB")

  try {
    const blob = await new Promise((resolve, reject) =>
      canvas.toBlob(blob => blob ? resolve(blob) : reject("Blob creation failed"), "image/png")
    );

    const url = URL.createObjectURL(blob);

    // Replace YouTube page with the image
    title.innerHTML = `<img src="${url}" alt="Descriptive text">`;
    // const img = document.createElement('img');
    // img.src = url;
    // img.style.width = '100%';
    // img.style.maxWidth = '100vw';
    // document.body.appendChild(img);

    console.log("Frame extracted and displayed.");
  } catch (err) {
    console.error("Error generating blob:", err);
  }
}})
}
)();