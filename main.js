// Switcher State
// ----------------------------------------------------
let visible = 'Canvas'	// or 'refimg'
let invisible = 'Refimg'
const canvasSel = '#myCanvas'
const { canvas, ctx, bb } = getCanvas(canvasSel)
// const sels = {
//   Canvas: canvasSel,
//   Refimg: refimgSel,
// }
// const icons = {
//   Canvas: 'wallet',
//   Refimg: 'image',
// }
// const saveFunctions = {
//   Canvas: saveCanvas,
//   Refimg: saveRefimg,
// }


function main() {

  // setInterval(main, 80000);


  const experiment = new Experiment()


  // Update Candidate Details
  updateCandidateDetails(Experiment)

  // Set up refimg
  // setupRefimg(Experiment)

  // Set up canvas
  //flipVisible('Canvas')

  // --------------------------------------------------
  // Canvas Setup
  // --------------------------------------------------
  canvasReset(canvasSel)
  const { canvas, ctx, bb } = getCanvas(canvasSel)


  // --------------------------------------------------
  // Geometry
  // --------------------------------------------------
  var c = 0.9;

  // Create an Image object for the water
  const waterImg = new Image();
  waterImg.src = 'water.png';
  const sunImg = new Image();
  sunImg.src = 'sun-1.png';
  const skyImg = new Image();
  skyImg.src = 'sky.png';
  const landImg = new Image();
  landImg.src = 'land-3.png';
  const birdImg = new Image();
  birdImg.src = 'fly-0.png'
  const walk_Img = new Image();
  walk_Img.src = 'walking-0.png'


 


  // Create an Image object for the boat
  const boatImg = new Image();
  boatImg.src = 'boat-1.png';
  const moonImg = new Image();
  moonImg.src = 'moon-2.png';
  const flowerImg = new Image();
  flowerImg.src = 'ezgif-frame-001.png'
  const potImg = new Image();
  potImg.src = 'pot-1.png';



  const flippedImg = new Image();
  flippedImg.src = 'flipped.png';
  // Call the draw function here or use flippedBoatImg as needed


  // Initial positions
  var boatX = 800; // Initial position of the boat along the x-axis (starting from right)
  var waterX = 0; // Initial position of the water along the x-axis
  const waterY = 425;
  var sunX = -50;
  var sunY = 50;// Fixed position of the water along the y-axis
  var night=0;
  var boatVisible = true; // Flag to track boat visibility
  var boatDirection = 'left';
  var sunvisible = true;
  var moonvisible = false;
  var open=1;
  var a = 0.05;
  i = 1;
  j = 1;
  k=1;
  var dawn=true;
  b=0.4
var dark=false;
  const frameUrls = ['fly-0.png', 'fly-1.png', 'fly-2.png', 'fly-3.png', 'fly-4.png',
    'fly-5.png', 'fly-6.png', 'fly-7.png',]; // Add URLs for your frames
  birdX = 30;
  birdY = 120;
 

  const frame2Urls = ['walking-0.png','walking-1.png','walking-2.png','walking-3.png','walking-4.png','walking-5.png',
  'walking-6.png','walking-7.png','walking-8.png','walking-9.png','walking-10.png',
  'walking-11.png','walking-12.png','walking-13.png','walking-14.png','walking-15.png','walking-16.png',
  'walking-17.png','walking-18.png','walking-19.png','walking-20.png','walking-21.png',
  'walking-22.png','walking-23.png',
  'walking-24.png','walking-25.png','walking-26.png','walking-27.png','walking-28.png','walking-29.png',
  'walking-30.png','walking-31.png','walking-32.png','walking-33.png','walking-34.png',
  'walking-35.png','walking-36.png','walking-37.png','walking-38.png','walking-39.png','walking-40.png',
  'walking-41.png','walking-42.png','walking-43.png','walking-44.png','walking-45.png',
  'walking-46.png','walking-47.png',
  'walking-48.png','walking-49.png','walking-50.png','walking-51.png','walking-52.png','walking-53.png',
  'walking-54.png','walking-55.png','walking-56.png','walking-57.png','walking-58.png',
  'walking-59.png','walking-60.png','walking-61.png','walking-62.png','walking-63.png','walking-64.png',
  'walking-65.png','walking-66.png','walking-67.png','walking-68.png','walking-69.png',
  'walking-70.png','walking-71.png','walking-72.png','walking-73.png',
  'walking-74.png','walking-75.png','walking-76.png','walking-77.png','walking-78.png','walking-79.png',
  'walking-80.png','walking-81.png','walking-82.png','walking-83.png','walking-84.png',
  'walking-85.png','walking-86.png','walking-87.png','walking-88.png','walking-89.png','walking-90.png',
  'walking-91.png','walking-92.png','walking-93.png','walking-94.png','walking-95.png',
]; // Add URLs for your frames
// const frame3Urls = ['sunflower-0.png','sunflower-1.png','sunflower-2.png','sunflower-3.png','sunflower-4.png','sunflower-5.png',
//   'sunflower-6.png','sunflower-7.png','sunflower-8.png','sunflower-9.png','sunflower-10.png',
//   'sunflower-11.png','sunflower-12.png','sunflower-13.png','sunflower-14.png','sunflower-15.png','sunflower-16.png',
//   'sunflower-17.png','sunflower-18.png','sunflower-19.png','sunflower-20.png','sunflower-21.png'
// ]; 
const frame3Urls=['ezgif-frame-001.png', 'ezgif-frame-002.png', 'ezgif-frame-003.png', 'ezgif-frame-004.png', 'ezgif-frame-005.png', 'ezgif-frame-006.png', 'ezgif-frame-007.png', 
'ezgif-frame-008.png', 'ezgif-frame-009.png', 'ezgif-frame-010.png', 'ezgif-frame-011.png', 'ezgif-frame-012.png', 'ezgif-frame-013.png', 'ezgif-frame-014.png', 'ezgif-frame-015.png', 'ezgif-frame-016.png',
 'ezgif-frame-017.png', 'ezgif-frame-018.png', 'ezgif-frame-019.png', 'ezgif-frame-020.png', 'ezgif-frame-021.png', 'ezgif-frame-022.png', 'ezgif-frame-023.png', 'ezgif-frame-024.png', 'ezgif-frame-025.png', 
 'ezgif-frame-026.png', 'ezgif-frame-027.png', 'ezgif-frame-028.png', 'ezgif-frame-029.png', 'ezgif-frame-030.png', 'ezgif-frame-031.png', 'ezgif-frame-032.png', 'ezgif-frame-033.png', 'ezgif-frame-034.png',
  'ezgif-frame-035.png', 'ezgif-frame-036.png', 'ezgif-frame-037.png', 'ezgif-frame-038.png', 'ezgif-frame-039.png', 'ezgif-frame-040.png', 'ezgif-frame-041.png', 'ezgif-frame-042.png', 'ezgif-frame-043.png', 'ezgif-frame-044.png', 'ezgif-frame-045.png', 'ezgif-frame-046.png', 'ezgif-frame-047.png', 'ezgif-frame-048.png', 'ezgif-frame-049.png', 'ezgif-frame-050.png', 'ezgif-frame-051.png', 'ezgif-frame-052.png', 'ezgif-frame-053.png', 'ezgif-frame-054.png', 'ezgif-frame-055.png', 'ezgif-frame-056.png', 'ezgif-frame-057.png', 'ezgif-frame-058.png', 'ezgif-frame-059.png', 'ezgif-frame-060.png', 'ezgif-frame-061.png', 'ezgif-frame-062.png', 'ezgif-frame-063.png', 'ezgif-frame-064.png', 'ezgif-frame-065.png', 'ezgif-frame-066.png', 'ezgif-frame-067.png', 'ezgif-frame-068.png', 'ezgif-frame-069.png', 'ezgif-frame-070.png', 'ezgif-frame-071.png', 'ezgif-frame-072.png', 'ezgif-frame-073.png', 'ezgif-frame-074.png', 'ezgif-frame-075.png', 'ezgif-frame-076.png', 'ezgif-frame-077.png', 'ezgif-frame-078.png', 'ezgif-frame-079.png', 'ezgif-frame-080.png', 'ezgif-frame-081.png', 'ezgif-frame-082.png', 'ezgif-frame-083.png', 'ezgif-frame-084.png', 'ezgif-frame-085.png', 'ezgif-frame-086.png', 'ezgif-frame-087.png', 'ezgif-frame-088.png', 'ezgif-frame-089.png', 'ezgif-frame-090.png', 'ezgif-frame-091.png', 'ezgif-frame-092.png', 'ezgif-frame-093.png', 'ezgif-frame-094.png', 'ezgif-frame-095.png', 'ezgif-frame-096.png', 'ezgif-frame-097.png', 'ezgif-frame-098.png', 'ezgif-frame-099.png', 'ezgif-frame-100.png', 'ezgif-frame-101.png', 'ezgif-frame-102.png', 'ezgif-frame-103.png', 'ezgif-frame-104.png', 'ezgif-frame-105.png', 'ezgif-frame-106.png', 'ezgif-frame-107.png', 'ezgif-frame-108.png', 'ezgif-frame-109.png', 'ezgif-frame-110.png', 'ezgif-frame-111.png', 'ezgif-frame-112.png', 'ezgif-frame-113.png', 'ezgif-frame-114.png', 'ezgif-frame-115.png', 'ezgif-frame-116.png', 'ezgif-frame-117.png', 'ezgif-frame-118.png', 'ezgif-frame-119.png', 'ezgif-frame-120.png', 'ezgif-frame-121.png', 'ezgif-frame-122.png', 'ezgif-frame-123.png', 'ezgif-frame-124.png', 'ezgif-frame-125.png', 'ezgif-frame-126.png', 'ezgif-frame-127.png', 'ezgif-frame-128.png', 'ezgif-frame-129.png', 'ezgif-frame-130.png', 'ezgif-frame-131.png', 'ezgif-frame-132.png', 'ezgif-frame-133.png', 'ezgif-frame-134.png', 'ezgif-frame-135.png', 'ezgif-frame-136.png', 'ezgif-frame-137.png', 'ezgif-frame-138.png', 'ezgif-frame-139.png', 'ezgif-frame-140.png', 'ezgif-frame-141.png',
 'ezgif-frame-142.png', 'ezgif-frame-143.png', 'ezgif-frame-144.png', 'ezgif-frame-145.png', 'ezgif-frame-146.png', 'ezgif-frame-147.png', 'ezgif-frame-148.png', 'ezgif-frame-149.png', 'ezgif-frame-150.png', 'ezgif-frame-151.png', 'ezgif-frame-152.png', 'ezgif-frame-153.png', 'ezgif-frame-154.png', 'ezgif-frame-155.png', 'ezgif-frame-156.png', 'ezgif-frame-157.png', 'ezgif-frame-158.png', 'ezgif-frame-159.png', 'ezgif-frame-160.png', 'ezgif-frame-161.png', 'ezgif-frame-162.png', 'ezgif-frame-163.png', 'ezgif-frame-164.png', 'ezgif-frame-165.png', 'ezgif-frame-166.png', 'ezgif-frame-167.png', 'ezgif-frame-168.png', 'ezgif-frame-169.png', 'ezgif-frame-170.png', 'ezgif-frame-171.png', 'ezgif-frame-172.png', 'ezgif-frame-173.png', 'ezgif-frame-174.png', 'ezgif-frame-175.png', 'ezgif-frame-176.png', 'ezgif-frame-177.png', 'ezgif-frame-178.png', 'ezgif-frame-179.png', 'ezgif-frame-180.png'];

// Add URLs for your frame
  walk_X = canvas.width+100;
  walk_Y = 350;
  moonX = canvas.width+20 ;
  moonY = 150;
  skyX = 0;
  landX=0;
  skyY = 0
  

  // Initial direction of the boat (starting from right)

  // Function to draw the scene
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
scaleX=canvas.width/landImg.width
    // Clear the canvas

    ctx.drawImage(skyImg, skyX, skyY, skyImg.width, skyImg.height / 2);
   
     ctx.drawImage(landImg, 0, -100, landImg.width*scaleX , landImg.height/2);


 
   

    
    ctx.drawImage(potImg, 300, 300, potImg.width /8, potImg.height /8);
    
    ctx.drawImage(flowerImg,240,250 , flowerImg.width/4, flowerImg.height/4);



    ctx.drawImage(birdImg, birdX, birdY, birdImg.width / 2, birdImg.height / 2);


    // Draw the current frame at position (0, 0)

    ctx.drawImage(waterImg, waterX, waterY);

    if (sunvisible === true) {

      ctx.drawImage(sunImg, sunX, sunY, sunImg.width / 30, sunImg.height / 30);

    }
    if(dark===true)
    {
    
        // Now you can safely draw the image on the canvas
        ctx.drawImage(walk_Img, walk_X, walk_Y-35, walk_Img.width / 4, walk_Img.height / 4);
    
    }

    



    // Draw the boat on top of the water if it's visible
    if (boatVisible) {

      ctx.save()
      // Scale the boat image horizontally if it's moving from right to left
      if (boatDirection === 'left') {

        // Flip horizontally

        ctx.drawImage(boatImg, boatX, 400, boatImg.width / 3, boatImg.height / 3);
        
      } else {
        ctx.drawImage(flippedImg, boatX, 400, boatImg.width / 3, boatImg.height / 3);
        
      }
    }

      if(dawn===true)
      {
        darkenImages(b)
        b-=0.01
      }

    if (dark === true) {

      walk_X -= 2;

      walk_Img.src = frame2Urls[j]
      j = (j + 1) % 96;


      if (a < 0.9) {
        darkenImages(a)
        a += 0.001
      }
      else {
        darkenImages(c)
        c -= 0.001
      }




    }


    if(moonvisible==true)
    ctx.drawImage(moonImg, moonX, moonY, moonImg.width / 10, moonImg.height / 10)


  }

  // Function to animate the boat and water
  function animate() {
    draw()


    // Update current frame index for next frame
    // Call animate again after 0.03 seconds


    // Update the positions
    if (boatDirection === 'left' && boatVisible === true) {
      boatX -= 5; // Move the boat 2 pixels to the left on each animation frame
      // Move the water 2 pixels to the right to simulate the boat's movement
    } else if (boatDirection === 'right' && boatVisible === true) {
      boatX += 5; // Move the boat 2 pixels to the right on each animation frame
      // Move the water 2 pixels to the left to simulate the boat's movement
    }
    waterX -= 1.5;
    skyX -= 1;
    landX-=0.1
    sunX += 3;
    birdX += 3
    birdY -= 2

    birdImg.src = frameUrls[i]
    i = (i + 1) % 8;

   
  

    if (moonvisible === true) {
      moonX -= 2;
      
      if (moonY <= 0) {
        moonY = 0;
      }

      if (moonX <= 120) {
        moonY += 1.5;

      }
      else {
        moonY -= 1.5
      }

    }

    flowerImg.src = frame3Urls[k];

  if(night==0)
    {

      if(open==1){
        k = k + 1
      }
      
      else{
        k--;
      }

    }
    


if(k==179)
  {
    open=0;
  }

  if(k==1)
    {
      night=1;
    }



  

   





    if (sunY <= 0) {
      sunY = 0;
    }

    if (sunX >= canvas.width-200) {
      sunY += 1;

    }
    else {
      sunY -= 1.5
    }

    if(sunX==100)
      {
        dawn=false;
      }

    if (sunX > canvas.width) {
      sunvisible = false;
      moonvisible = true;
    }
    if(sunX>450)
      {
        dark=true;
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

      }, 7000); // Set timeout for 10 seconds
    }


   



    // If the water moves off the canvas, reset its position
    if (waterX < -waterImg.width / 4) {
      waterX = 0; // Reset the water's x-coordinate to the right side of the canvas
    }
    if (skyX < -skyImg.width/10) {
      skyX = 0; // Reset the water's x-coordinate to the right side of the canvas
    }
   
   

    // Draw the scene
  

    // Request the next animation frame
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 60)


  }




  function darkenImages(a) {
    // Get the canvas width and height
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    ctx.save()
    // Apply a dark overlay using globalCompositeOperation
    ctx.globalCompositeOperation = 'multiply'; // Blend mode to darken the canvas
    ctx.fillStyle = `rgba(0, 0, 0, ${a})`; // Adjust transparency level as needed
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Reset globalCompositeOperation to default
    ctx.globalCompositeOperation = 'source-over';
    ctx.restore()
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

    new Promise((resolve, reject) => {
      landImg.onload = resolve;
    }),
    new Promise((resolve, reject) => {
      walk_Img.onload = resolve;
    }),
    new Promise((resolve, reject) => {
      flowerImg.onload = resolve;
    }),

    




  ]).then(() => {
    
    
      animate();
  

    
    // Once both images are loaded, start the animation
    
  });


}

// FIXME: Relax the validators for multiple names
function updateCandidateDetails({ rollNos, names }) {
  let isValidRollNo, isValidName, act, byHtml, n
  isValidRollNo = (isValidName = false)

  // Validate RollNo

  rollNos = rollNos.split(',')
    .map(
      s => Number(s.trim())
    )
    .filter(
      n => {
        isValidRollNo = !isNaN(n) && 9999999 < n
        if (!isValidRollNo) {
          console.warn({
            invalidRollNo: n,
            message: "Roll No should be Integer."
          })
        }
        return isValidRollNo
      }
    )

  // Validate Name
  const titleCasePat = /^[A-Z][a-z]+( [A-Z][a-z]+)*$/
  names = String(names).trim()

  act = names.split('(').shift().trim()
  isValidName = titleCasePat.test(act)
  if (!isValidName) {
    console.warn({
      invalidAct: act,
      message: "Act should be in Title Case."
    })
    act = ''
  }

  names = names.split('(').pop().split(')').shift()
    .split(',').map(s => s.trim())
    .filter(name => {
      isValidName = titleCasePat.test(name)
      if (!isValidName) {
        console.warn({
          invalidName: name,
          message: "Name should be a Title Case."
        })
      }
      return isValidName
    })

  byHtml = ''

  n = Math.min(names.length, rollNos.length)
  for (const i of Array(n).keys()) {
    if (0 < i)
      byHtml = `${byHtml}<span class="p-2">|</span>`

    byHtml = `${byHtml}<code>${rollNos[i]}</code> : ${names[i]}`
  }

  if (0 < act.length) {
    byHtml = `<strong>${act}</strong><br class="hidden md:inline"/><span class="p-4 md:hidden">&mdash;</span>${byHtml}`
  }

  if (0 < byHtml.length) {
    byHtml = `Created by ${byHtml}`
  } else {
    byHtml
      = 'Error parsing candidate details. Check console.'
  }

  document.querySelector('#by')
    .innerHTML = byHtml
}


function saveCanvas() {
  const link = document.createElement('a');
  const { canvas, ctx, bb } = getCanvas(canvasSel)
  link.download = `${slug(Experiment.rollNos)}-${slug(document.title)}-canvas.png`;
  link.href = canvas.toDataURL()
  link.click();
}


// ----------------------------------------------------
// String Manipulations
// ----------------------------------------------------
function slug(s) {
  return s
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(s => 0 < s.length)
    .join('-')
}
