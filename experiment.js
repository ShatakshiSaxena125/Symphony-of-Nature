class Experiment {
  // Candidate Details
  static rollNos = "102117163,102117165";
  static names = "The Invincibles(Cheshta Arora, Shatakshi Saxena)";

  canvasSel = '#myCanvas'
  transformControls
  fillControls
  styleControls

  constructor() {
    const Cls = this.constructor

    this.transformControls
      = new Controls('#transform-controls', {
        submitSel: '#transform-submit'
      })

    const handleTransforms = this.handleTransforms.bind(this)
    this.transformControls.el.addEventListener(
      'update', handleTransforms
    )
    this.transformControls.el.addEventListener(
      'submit', handleTransforms
    )

    // Uncomment to enable tranform controls
    // --------------------------------------------------
    this.transformControls.unhide()


    // ------------------------------------------------
    // !!! BONUS
    //------------------------------------------------
    //If you would like to similarly implement Fill
    //and Stroke style controls!
    this.fillControls
      = new Controls('#fill-controls', {
        submitSel: '#fill-submit'
      })
    // this.fillControls.unhide()

    this.styleControls
      = new Controls('#stroke-controls', {
        submitSel: '#stroke-submit'
      })
    // this.styleControls.unhide()

  }

  handleTransforms(e) {
    const { inputs } = this.transformControls
    console.log({ handleTransforms: true, inputs })

// const canvas=document.querySelector(this.canvasSel);
// const path=canvas.getContext('2d');
// path.reset();
// const path=Experiment.createGeometry();
// const transform=Experiment.getBaseTransform();
// const styles=Experiment.getBaseStyles();
// path.fillStyle=styles.fill.c;
// path.line



    // ------------------------------------------------
    // TODO
    // ------------------------------------------------

  }
  static createFlower(){
    const path = new Path2D()
    path.moveTo(15.250000, 2.965000);
	path.lineTo(0.663000, 2.965000);
	path.lineTo(0.000000, 0.083000);
	path.lineTo(15.914000, 0.083000);
	path.closePath();
	
	path.lineWidth = 0.264583;
	path.moveTo(12.775000, 11.936000);
	path.lineTo(3.139000, 11.936000);
	path.lineTo(1.055000, 4.022000);
	path.lineTo(14.859000, 4.022000);
	path.closePath();
	
	path.moveTo(28.000000, 27.000000);
	path.bezierCurveTo(20.000000, 27.000000, 20.000000, 33.000000, 20.000000, 33.000000);
	path.lineTo(20.000000, 22.000000);
	path.lineTo(16.000000, 22.000000);
	path.lineTo(16.000000, 33.000000);
	path.bezierCurveTo(16.000000, 33.000000, 16.000000, 27.000000, 8.000000, 27.000000);
	path.bezierCurveTo(4.000000, 27.000000, 1.000000, 25.000000, 1.000000, 25.000000);
	path.bezierCurveTo(1.000000, 25.000000, 1.000000, 34.000000, 10.000000, 34.000000);
	path.lineTo(16.000000, 34.000000);
	path.bezierCurveTo(16.000000, 34.000000, 16.000000, 36.000000, 18.000000, 36.000000);
	path.bezierCurveTo(20.000000, 36.000000, 20.000000, 34.000000, 20.000000, 34.000000);
	path.lineTo(26.000000, 34.000000);
	path.bezierCurveTo(35.000000, 34.000000, 35.000000, 25.000000, 35.000000, 25.000000);
	path.bezierCurveTo(35.000000, 25.000000, 32.000000, 27.000000, 28.000000, 27.000000);
	path.closePath();
	
	path.moveTo(21.125000, 27.662000);
	path.bezierCurveTo(20.797000, 27.662000, 20.474000, 27.565000, 20.198000, 27.379000);
	path.lineTo(17.875000, 25.804000);
	path.lineTo(15.553000, 27.379000);
	path.bezierCurveTo(15.154032, 27.646460, 14.659086, 27.728829, 14.195000, 27.605000);
	path.bezierCurveTo(13.731225, 27.481978, 13.344156, 27.162828, 13.135000, 26.731000);
	path.lineTo(11.910000, 24.204000);
	path.lineTo(9.113000, 24.408000);
	path.bezierCurveTo(9.073000, 24.410000, 9.034000, 24.412000, 8.994000, 24.412000);
	path.bezierCurveTo(8.534813, 24.411742, 8.096348, 24.220833, 7.783327, 23.884871);
	path.bezierCurveTo(7.470306, 23.548909, 7.310835, 23.098059, 7.343000, 22.640000);
	path.lineTo(7.544000, 19.840000);
	path.lineTo(5.021000, 18.615000);
	path.bezierCurveTo(4.589349, 18.404664, 4.270085, 18.017523, 4.145790, 17.553719);
	path.bezierCurveTo(4.021495, 17.089914, 4.104378, 16.595003, 4.373000, 16.197000);
	path.lineTo(5.946000, 13.874000);
	path.lineTo(4.373000, 11.552000);
	path.bezierCurveTo(4.103015, 11.154452, 4.019762, 10.658953, 4.145000, 10.195000);
	path.bezierCurveTo(4.270041, 9.731648, 4.589499, 9.345089, 5.021000, 9.135000);
	path.lineTo(7.544000, 7.910000);
	path.lineTo(7.343000, 5.113000);
	path.bezierCurveTo(7.308401, 4.633707, 7.483705, 4.163020, 7.823403, 3.823131);
	path.bezierCurveTo(8.163100, 3.483242, 8.633687, 3.307672, 9.113000, 3.342000);
	path.lineTo(11.910000, 3.543000);
	path.lineTo(13.135000, 1.020000);
	path.bezierCurveTo(13.345836, 0.588842, 13.732964, 0.270038, 14.196552, 0.145801);
	path.bezierCurveTo(14.660141, 0.021564, 15.154811, 0.104055, 15.553000, 0.372000);
	path.lineTo(17.875000, 1.945000);
	path.lineTo(20.198000, 0.372000);
	path.bezierCurveTo(20.594625, 0.101588, 21.089720, 0.018280, 21.553000, 0.144000);
	path.bezierCurveTo(22.018000, 0.269000, 22.407000, 0.588000, 22.615000, 1.020000);
	path.lineTo(23.840000, 3.543000);
	path.lineTo(26.640000, 3.342000);
	path.bezierCurveTo(26.677000, 3.339000, 26.718000, 3.339000, 26.756000, 3.339000);
	path.bezierCurveTo(27.215830, 3.338643, 27.655079, 3.529612, 27.968451, 3.866126);
	path.bezierCurveTo(28.281823, 4.202640, 28.441063, 4.654360, 28.408000, 5.113000);
	path.lineTo(28.204000, 7.910000);
	path.lineTo(30.731000, 9.135000);
	path.bezierCurveTo(31.164000, 9.344000, 31.482000, 9.733000, 31.605000, 10.195000);
	path.bezierCurveTo(31.729000, 10.660000, 31.648000, 11.155000, 31.378000, 11.552000);
	path.lineTo(29.803000, 13.874000);
	path.lineTo(31.378000, 16.197000);
	path.bezierCurveTo(31.647000, 16.595000, 31.729000, 17.089000, 31.605000, 17.553000);
	path.bezierCurveTo(31.482251, 18.017400, 31.163107, 18.405193, 30.731000, 18.615000);
	path.lineTo(28.204000, 19.840000);
	path.lineTo(28.408000, 22.640000);
	path.bezierCurveTo(28.442000, 23.118000, 28.265000, 23.586000, 27.928000, 23.928000);
	path.bezierCurveTo(27.588043, 24.266359, 27.118482, 24.441350, 26.640000, 24.408000);
	path.lineTo(23.840000, 24.204000);
	path.lineTo(22.615000, 26.731000);
	path.bezierCurveTo(22.405517, 27.163361, 22.017588, 27.482617, 21.553000, 27.605000);
	path.bezierCurveTo(21.413691, 27.643875, 21.269627, 27.663061, 21.125000, 27.662000);
	path.closePath();
	
	path.arc(18.000000, 14.000000, 7.000000, 0.000000, 6.28318531, 1);
	
    return path;


  }

  static createSun() {
    // Polygon
    const starPos = [[109.173410, 82.265969],
    [91.307462, 88.243337],
    [86.103001, 106.349540],
    [74.897306, 91.205122],
    [56.069018, 91.850509],
    [67.009463, 76.513378],
    [60.577403, 58.806048],
    [78.544665, 64.471595],
    [93.397720, 52.882477],
    [93.561654, 71.721109],
    ]

    const path = new Path2D()
    // path.moveTo(...starPos[0])
    // for (const [x,y] of starPos.slice(1)) {
    //   path.lineTo(x,y)
    // }
    // path.closePath()


    // ------------------------------------------------
    // TODO
    // ------------------------------------------------

    
    path.moveTo(37.410000, 41.950000);
    path.bezierCurveTo(27.700000, 54.430000, 27.870000, 76.600000, 40.280000, 87.590000);
    path.bezierCurveTo(54.370000, 100.060000, 74.200000, 99.930000, 86.670000, 88.460000);
    path.bezierCurveTo(101.620000, 74.700000, 100.760000, 51.800000, 87.540000, 38.830000);
    path.bezierCurveTo(74.250000, 25.790000, 50.500000, 25.110000, 37.410000, 41.950000);
    path.closePath();

    path.moveTo(53.000000, 37.670000);
    path.bezierCurveTo(49.160000, 35.970000, 44.960000, 40.600000, 43.130000, 43.760000);
    path.bezierCurveTo(41.300000, 46.930000, 39.600000, 53.140000, 43.500000, 54.730000);
    path.bezierCurveTo(47.400000, 56.310000, 50.200000, 53.630000, 53.010000, 49.000000);
    path.bezierCurveTo(55.800000, 44.370000, 57.390000, 39.620000, 53.000000, 37.670000);
    path.closePath();

    path.moveTo(63.000000, 20.270000);
    path.bezierCurveTo(62.070000, 22.010000, 62.380000, 23.350000, 64.230000, 23.790000);
    path.bezierCurveTo(66.080000, 24.230000, 77.590000, 26.100000, 78.560000, 26.160000);
    path.bezierCurveTo(79.970000, 26.250000, 80.490000, 25.190000, 80.320000, 23.960000);
    path.bezierCurveTo(80.140000, 22.730000, 77.330000, 5.500000, 77.070000, 3.920000);
    path.bezierCurveTo(76.810000, 2.340000, 75.140000, 0.760000, 73.550000, 2.870000);
    path.bezierCurveTo(71.960000, 4.980000, 63.700000, 18.960000, 63.000000, 20.270000);
    path.closePath();

    path.moveTo(92.800000, 32.230000);
    path.bezierCurveTo(90.990000, 32.790000, 91.040000, 33.900000, 92.010000, 35.310000);
    path.bezierCurveTo(92.980000, 36.720000, 99.660000, 46.910000, 100.270000, 47.620000);
    path.bezierCurveTo(100.890000, 48.320000, 101.940000, 48.500000, 102.820000, 47.440000);
    path.bezierCurveTo(103.700000, 46.390000, 114.680000, 30.990000, 115.480000, 30.030000);
    path.bezierCurveTo(116.800000, 28.450000, 116.010000, 26.780000, 113.990000, 27.300000);
    path.bezierCurveTo(112.450000, 27.710000, 93.940000, 31.880000, 92.800000, 32.230000);
    path.closePath();

    path.moveTo(106.600000, 61.860000);
    path.bezierCurveTo(105.300000, 61.120000, 103.610000, 61.330000, 103.170000, 63.000000);
    path.bezierCurveTo(102.730000, 64.670000, 100.800000, 76.800000, 100.620000, 77.860000);
    path.bezierCurveTo(100.440000, 78.920000, 101.240000, 79.970000, 102.550000, 79.710000);
    path.bezierCurveTo(103.860000, 79.450000, 122.000000, 76.760000, 123.210000, 76.460000);
    path.bezierCurveTo(125.320000, 75.930000, 126.020000, 73.820000, 123.830000, 72.240000);
    path.bezierCurveTo(122.410000, 71.210000, 107.830000, 62.560000, 106.600000, 61.860000);
    path.closePath();

    path.moveTo(92.090000, 90.600000);
    path.bezierCurveTo(93.490000, 89.850000, 94.730000, 90.420000, 95.080000, 92.010000);
    path.bezierCurveTo(95.430000, 93.590000, 99.300000, 109.770000, 99.920000, 112.760000);
    path.bezierCurveTo(100.230000, 114.260000, 98.510000, 115.490000, 97.110000, 114.610000);
    path.bezierCurveTo(95.700000, 113.730000, 80.420000, 103.080000, 79.440000, 102.210000);
    path.bezierCurveTo(78.030000, 100.980000, 79.010000, 99.700000, 79.700000, 99.050000);
    path.bezierCurveTo(81.100000, 97.720000, 90.770000, 91.310000, 92.090000, 90.600000);
    path.closePath();

    path.moveTo(49.540000, 99.480000);
    path.bezierCurveTo(47.770000, 99.310000, 47.250000, 100.890000, 47.520000, 102.290000);
    path.bezierCurveTo(47.780000, 103.700000, 50.420000, 121.530000, 50.600000, 122.860000);
    path.bezierCurveTo(50.860000, 124.790000, 52.890000, 125.590000, 54.200000, 123.650000);
    path.bezierCurveTo(55.510000, 121.710000, 64.550000, 107.250000, 65.280000, 105.890000);
    path.bezierCurveTo(66.600000, 103.430000, 65.630000, 102.900000, 64.310000, 102.290000);
    path.bezierCurveTo(63.000000, 101.680000, 51.390000, 99.660000, 49.540000, 99.480000);
    path.closePath();

    path.moveTo(24.230000, 79.000000);
    path.bezierCurveTo(25.460000, 76.980000, 27.040000, 77.510000, 28.190000, 79.440000);
    path.bezierCurveTo(28.970000, 80.760000, 35.570000, 89.640000, 36.190000, 90.600000);
    path.bezierCurveTo(36.810000, 91.570000, 37.070000, 93.410000, 35.140000, 93.850000);
    path.bezierCurveTo(33.190000, 94.300000, 17.460000, 98.430000, 15.000000, 98.870000);
    path.bezierCurveTo(12.540000, 99.310000, 11.130000, 97.380000, 12.710000, 95.270000);
    path.bezierCurveTo(13.630000, 94.030000, 23.530000, 80.150000, 24.230000, 79.000000);
    path.closePath();
   
    path.moveTo(20.890000, 63.700000);
    path.bezierCurveTo(23.140000, 64.700000, 24.200000, 64.340000, 24.670000, 62.730000);
    path.bezierCurveTo(25.290000, 60.620000, 27.130000, 50.950000, 27.220000, 48.750000);
    path.bezierCurveTo(27.280000, 47.320000, 26.690000, 45.940000, 24.490000, 46.290000);
    path.bezierCurveTo(22.290000, 46.640000, 6.470000, 48.850000, 4.450000, 49.550000);
    path.bezierCurveTo(2.100000, 50.370000, 2.270000, 52.950000, 3.830000, 53.770000);
    path.bezierCurveTo(5.680000, 54.740000, 19.300000, 63.000000, 20.890000, 63.700000);
    path.closePath();
    
    path.moveTo(48.230000, 26.780000);
    path.bezierCurveTo(49.500000, 25.770000, 49.110000, 24.320000, 47.970000, 23.530000);
    path.bezierCurveTo(46.830000, 22.740000, 32.710000, 12.530000, 30.920000, 11.130000);
    path.bezierCurveTo(29.340000, 9.900000, 27.400000, 10.340000, 27.930000, 13.150000);
    path.bezierCurveTo(28.310000, 15.170000, 32.810000, 32.850000, 33.120000, 34.070000);
    path.bezierCurveTo(33.470000, 35.480000, 34.530000, 36.180000, 35.760000, 35.300000);
    path.bezierCurveTo(36.970000, 34.430000, 46.910000, 27.840000, 48.230000, 26.780000);
    path.closePath();
    



    return path
  }

  static getSunTransform() {
    // const transform = new DOMMatrix([
    //   4.045084971874737,
    //   2.938926261462366,
    //   -2.938926261462366,
    //   4.045084971874737,
    //   141.50730316701032,
    //   -328.7208986669682
    // ])

    const transform = new DOMMatrix([1, 0, 0, 1, 50, 0]
    )

    // ------------------------------------------------
    // TODO
    // ------------------------------------------------

    return transform
  }
  static getFlowerTransform() {
    // const transform = new DOMMatrix([
    //   4.045084971874737,
    //   2.938926261462366,
    //   -2.938926261462366,
    //   4.045084971874737,
    //   141.50730316701032,
    //   -328.7208986669682
    // ])

    const transform = new DOMMatrix([2, 0, 0, 2, 300, 300]
    )

    // ------------------------------------------------
    // TODO
    // ------------------------------------------------

    return transform
  }

  static getSunStyles() {
    // Stroke with single color
    const stroke = { c: '#000000', w: 1 }

    // Fill with evenodd rule and flat color
   

    // Fill with evenodd rule and linear gradient
    const canvaSel='#myCanvas';
    const canvas=document.querySelector(canvaSel);
    const path=canvas.getContext('2d')
    const [x0,y0]=[100,250], [x1,y1]=[325,475]
    const c = path.createLinearGradient(x0, y0, x1, y1)
     c.addColorStop(0, '#fcc11a')
     c.addColorStop(1, '#ffa722')

    // Fill with evenodd rule and conic gradient
    // const [x,y]=[240,387], startAngle=-0.54
    // const c = path.createConicGradient(startAngle, x, y)
    // c.addColorStop(0, '#baf7da')
    // c.addColorStop(1, '#dabaf7')

    // Fill with evenodd rule and radial gradient
    // const [x0,y0,r0]=[240,387,170], [x1,y1,r1]=[100,358,35]
    // const c = path.createRadialGradient(x0,y0,r0,x1,y1,r1)
    // c.addColorStop(0, '#baf7da')
    // c.addColorStop(1, '#dabaf7')

    // Fill with evenodd rule and a pattern
    // const img = document.querySelector('#pattern')
    // const c = path.createPattern(img, 'repeat')
    // c.setTransform(new DOMMatrix([
    //   0.2,0,0,0.2,0,0
    // ]))

    const fill = { c, r: 'evenodd' }

    const styles = { stroke, fill }
    return styles
  }


  static getFlowerStyles() {
    // Stroke with single color
    const stroke = { c: '#000000', w: 1 }

    // Fill with evenodd rule and flat color
   

    // Fill with evenodd rule and linear gradient
    const canvaSel='#myCanvas';
    const canvas=document.querySelector(canvaSel);
    const path=canvas.getContext('2d')
    const [x0,y0]=[100,250], [x1,y1]=[325,475]
    const c = path.createLinearGradient(x0, y0, x1, y1)
     c.addColorStop(0, '#fcc11a')
     c.addColorStop(1, '#ffa722')

    // Fill with evenodd rule and conic gradient
    // const [x,y]=[240,387], startAngle=-0.54
    // const c = path.createConicGradient(startAngle, x, y)
    // c.addColorStop(0, '#baf7da')
    // c.addColorStop(1, '#dabaf7')

    // Fill with evenodd rule and radial gradient
    // const [x0,y0,r0]=[240,387,170], [x1,y1,r1]=[100,358,35]
    // const c = path.createRadialGradient(x0,y0,r0,x1,y1,r1)
    // c.addColorStop(0, '#baf7da')
    // c.addColorStop(1, '#dabaf7')

    // Fill with evenodd rule and a pattern
    // const img = document.querySelector('#pattern')
    // const c = path.createPattern(img, 'repeat')
    // c.setTransform(new DOMMatrix([
    //   0.2,0,0,0.2,0,0
    // ]))

    const fill = { c, r: 'evenodd' }

    const styles = { stroke, fill }
    return styles
  }
}
