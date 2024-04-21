// Switcher State
// ----------------------------------------------------
let visible = 'Canvas'	// or 'refimg'
let invisible = 'Refimg'
const canvasSel = '#myCanvas'
const refimgSel = '#refImg'
const sels = {
  Canvas: canvasSel,
  Refimg: refimgSel,
}
const icons = {
  Canvas: 'wallet',
  Refimg: 'image',
}
const saveFunctions = {
  Canvas: saveCanvas,
  Refimg: saveRefimg,
}



function main() {

  //setInterval(main, 53000);


  const experiment = new Experiment()


  // Update Candidate Details
  updateCandidateDetails(Experiment)

  // Set up refimg
  setupRefimg(Experiment)

  // Set up canvas
  flipVisible('Canvas')

  // --------------------------------------------------
  // Canvas Setup
  // --------------------------------------------------
  canvasReset(canvasSel)
  const { canvas, ctx, bb } = getCanvas(canvasSel)


  // --------------------------------------------------
  // Geometry
  // --------------------------------------------------
  var c = 0.8;


  //sound effect
  // this.paddleSound = new Audio("deep.mp3");

  // let audioFile = new Audio('deep.mp3');
  // audioFile.play()

  // Create an Image object for the water
  const waterImg = new Image();
  waterImg.src = 'water.png';
  const sunImg = new Image();
  sunImg.src = 'sun-1.png';
  const skyImg = new Image();
  skyImg.src = 'sky.png';
  const landImg = new Image();
  landImg.src = 'beach-2.png';
  const birdImg=new Image();
  birdImg.src='fly-0.png'
  const walk_Img=new Image();
  walk_Img.src='walk_0.png'
  
  // const gif = new GIF({
  //   workers: 2,
  //   quality: 10
  // });

  // // Add frames to the GIF
  // gif.addFrame('bird.gif', { copy: true });




  // Create an Image object for the boat
  const boatImg = new Image();
  boatImg.src = 'boat-1.png';



  const flippedImg = new Image();
  flippedImg.src = 'flipped.png';
  // Call the draw function here or use flippedBoatImg as needed


  // Initial positions
  var boatX = 800; // Initial position of the boat along the x-axis (starting from right)
  var waterX = 0; // Initial position of the water along the x-axis
  const waterY = 425;
  var sunX = -50;
  var sunY = 50;// Fixed position of the water along the y-axis

  var boatVisible = true; // Flag to track boat visibility
  var boatDirection = 'left';
  var sunvisible = true;
  var moonvisible = false;
  var a = 0.05;
  i=1;
  j=1;

  const frameUrls = ['fly-0.png','fly-1.png','fly-2.png','fly-3.png','fly-4.png',
  'fly-5.png','fly-6.png','fly-7.png', ]; // Add URLs for your frames
  birdX=30;
  birdY=120;

  const frame2Urls = ['walk_0.png','walk_1.png','walk_2.png','walk_3.png','walk_4.png',
  'walk_5.png','walk_6.png','walk_7.png' ]; // Add URLs for your frames
  walk_X=-80;
  walk_Y=300;



  ctx.save()

  // Initial direction of the boat (starting from right)

  // Function to draw the scene
  function draw() {

    ctx.save();

    // Clear the canvas

    ctx.drawImage(skyImg, -10, 0, skyImg.width, skyImg.height / 1.5);
  
    
    ctx.drawImage(landImg, 0, -135);
    
  
      ctx.drawImage(birdImg, birdX, birdY, birdImg.width/2, birdImg.height/2);
      
     
       // Draw the current frame at position (0, 0)
    
    ctx.drawImage(waterImg, waterX, waterY);
    
    if (sunvisible === true) {
      
      ctx.drawImage(sunImg, sunX, sunY, sunImg.width / 30, sunImg.height / 30);
    
    }

    if (moonvisible === true) {
      
      ctx.drawImage(walk_Img, walk_X, walk_Y, walk_Img.width/2, walk_Img.height/2);
  
      if (a < 0.8) {
        darkenImages(a)
        a += 0.001
      }
      else {
        darkenImages(c)
        c -= 0.001
      }




    }



    // Draw the boat on top of the water if it's visible
    if (boatVisible) {

     ctx.save()
      // Scale the boat image horizontally if it's moving from right to left
      if (boatDirection === 'left') {

        // Flip horizontally

        ctx.drawImage(boatImg, boatX, 400, boatImg.width / 3, boatImg.height / 3);
        ctx.restore();
      } else {
        ctx.drawImage(flippedImg, boatX, 400, boatImg.width / 3, boatImg.height / 3);
        ctx.restore();
      }
    }
  }

  // Function to animate the boat and water
  function animate() {
    draw()


    // Update current frame index for next frame
    // Call animate again after 0.03 seconds


    // Update the positions
    if (boatDirection === 'left' && boatVisible === true) {
      boatX -= 3.5; // Move the boat 2 pixels to the left on each animation frame
      // Move the water 2 pixels to the right to simulate the boat's movement
    } else if (boatDirection === 'right' && boatVisible === true) {
      boatX += 3.5; // Move the boat 2 pixels to the right on each animation frame
      // Move the water 2 pixels to the left to simulate the boat's movement
    }
    waterX -= 1.5;
    sunX += 2;
    birdX+=3
    birdY-=2
    if(moonvisible==true)
    {
    walk_X+=3
    setTimeout(()=> {
      walk_Img.src=frame2Urls[j]
      j=(j+1)%8;
    },1000)
    }



    if (sunY <= 0) {
      sunY = 0;
    }

    if (sunX >= 600) {
      sunY += 1;

    }
    else {
      sunY -= 1
    }


    if (sunX > canvas.width) {
      sunvisible = false;
      moonvisible = true;
    }
    //If the boat moves off the canvas, hide it and reset its position after 10 seconds
    if (boatX > canvas.width + 150 || boatX < -canvas.width / 4) {
      boatVisible = false;
      setTimeout(() => {

        if (boatDirection === 'left') {
          boatX = -canvas.width / 4; // Reset the boat's x-coordinate to the left side of the canvas
          boatDirection = 'right';


          // Change direction to right
        }


        boatVisible = true;

      }, 8000); // Set timeout for 10 seconds
    }

    setTimeout(()=> {
      birdImg.src=frameUrls[i]
      i=(i+1)%8;
    },500)


    
    
    // If the water moves off the canvas, reset its position
    if (waterX < -waterImg.width / 4) {
      waterX = 0; // Reset the water's x-coordinate to the right side of the canvas
    }

    // Draw the scene
    draw();

    // Request the next animation frame
    setTimeout(()=>{
      requestAnimationFrame(animate);
    },60)
      
    
  }




  function darkenImages(a) {
    // Get the canvas width and height
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Apply a dark overlay using globalCompositeOperation
    ctx.globalCompositeOperation = 'multiply'; // Blend mode to darken the canvas
    ctx.fillStyle = `rgba(0, 0, 0, ${a})`; // Adjust transparency level as needed
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Reset globalCompositeOperation to default
    ctx.globalCompositeOperation = 'source-over';
  }
  // Start the animation when both images are loaded
  Promise.all([
    new Promise((resolve, reject) => {
      waterImg.onload = resolve;
    }),
    new Promise((resolve, reject) => {
      boatImg.onload = resolve;
    }),

    new Promise((resolve, reject) => {
      sunImg.onload = resolve;
    }),




  ]).then(() => {
    // Once both images are loaded, start the animation
    animate();
  });


}

function updateCandidateDetails({ rollNo, name }) {
  let isValidRollNo, isValidName
  isValidRollNo = (isValidName = false)

  // Validate RollNo
  rollNo = Number(rollNo)
  isValidRollNo = !isNaN(rollNo) && 9999999 < rollNo
  if (!isValidRollNo) {
    console.warn({ invalidRollNo: rollNo })
  }

  // Validate Name
  const titleCasePat = /^[A-Z][a-z]+( [A-Z][a-z]+)*$/
  name = String(name).trim()
  isValidName = titleCasePat.test(name)
  if (!isValidName) {
    console.warn({ invalidName: name })
  }

  if (isValidRollNo && isValidName) {
    document.querySelector('#by')
      .textContent = `By: ${name} (${rollNo})`
  }
}

function saveCanvas() {
  const link = document.createElement('a');
  const { canvas, ctx, bb } = getCanvas(canvasSel)
  link.download = `${rollNo}-${slug(document.title)}-canvas.png`;
  link.href = canvas.toDataURL()
  link.click();
}

function saveRefimg() {
  console.warn({ saveRefimg: 'Not Implemented.' })
}

function saveVisible() {
  return saveFunctions[visible]()
}

function flipVisible(name) {
  if (name != visible) {
    // Swap
    [visible, invisible] = [invisible, visible]
  }

  document.querySelector(sels[visible])
    .classList.remove('hidden')
  document.querySelector(sels[invisible])
    .classList.add('hidden')

  document.querySelector('#switchButtonIcon')
    .name = icons[invisible]
  document.querySelector('#switchButtonText')
    .textContent = `Show ${invisible}`
}

function setupRefimg({ rollNo }) {
  document.querySelector(refimgSel)
    .src = `./assets/${rollNo}-${slug(document.title)}-refimg.png`
}
