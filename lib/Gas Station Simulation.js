var WINDOWBORDERSIZE = 10;
var HUGE = 999999; //Sometimes useful when testing for big or small numbers
var animationDelay = 200; //controls simulation and transition speed
var isRunning = false; // used in simStep and toggleSimStep
var surface; // Set in the redrawWindow function. It is the D3 selection of the svg drawing surface
var simTimer; // Set in the initialization function

//The drawing surface will be divided into logical cells
var maxCols = 40;
var cellWidth; //cellWidth is calculated in the redrawWindow function
var cellHeight; //cellHeight is calculated in the redrawWindow function

// Gas Station Simulation Images
const GasPump = "images/gaspump.png";
const gasstationsign = "images/gasstationsign.png";
// roads
const roaddown = "images/roaddown.png";
const road1 = "images/road1.png";
const road2 = "images/road2.png";
const road3 = "images/road3.png";
const road4 = "images/road4.png";
const road5 = "images/road5.png";
const road6 = "images/road6.png";
const road7 = "images/road7.png";
const road8 = "images/road8.png";
const roads = [road1, road2, road3, road4, road5, road6, road7, road8];
// sidewalk tiles
const walktile = "images/walktile.png";
const sidewalk1 = "images/sidewalk1.png";
const sidewalk2 = "images/sidewalk2.png";
const sidewalk3 = "images/sidewalk3.png";
// car images
const car1 = "images/car1.png";
const car2 = "images/car2.png";
const car3 = "images/car3.png";
const car4 = "images/car4.png";
const car5 = "images/car5.png";
const car6 = "images/car6.png";
const car7 = "images/car7.png";
const car8 = "images/car8.png";
const car9 = "images/car9.png";
const car10 = "images/car10.png";
const car11 = "images/car11.png";
const car12 = "images/car12.png";
const car13 = "images/car13.png";
const car14 = "images/car14.png";
const car15 = "images/car15.png";
const car16 = "images/car16.png";
const car17 = "images/car17.png";
const car18 = "images/car18.png";
const car19 = "images/car19.png";
const car20 = "images/car20.png";
const car21 = "images/car21.png";
const car22 = "images/car22.png";
const car23 = "images/car23.png";
const car24 = "images/car24.png";
const car25 = "images/car25.png";
const car26 = "images/car26.png";
const car27 = "images/car27.png";
const car28 = "images/car28.png";
const car29 = "images/car29.png";
const car30 = "images/car30.png";
const car31 = "images/car31.png";
const car32 = "images/car32.png";
const car33 = "images/car33.png";
const carimages = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10,
	car11, car12, car13, car14, car15, car16, car17, car18, car19, car20,
	car21, car22, car23, car24, car25, car26, car27, car28, car29, car30,
	car31, car32, car33];
// driver images
const driver1 = "images/driver1.png";
const driver2 = "images/driver2.png";
const driver3 = "images/driver3.png";
const driver4 = "images/driver4.png";
const driver5 = "images/driver5.png";
const driver6 = "images/driver6.png";
const driver7 = "images/driver7.png";
const driver8 = "images/driver8.png";
const driver9 = "images/driver9.png";
const driver10 = "images/driver10.png";
const driver11 = "images/driver11.png";
const driver12 = "images/driver12.png";
const driver13 = "images/driver13.png";
const driver14 = "images/driver14.png";
const driver15 = "images/driver15.png";
const driver16 = "images/driver16.png";
const driver17 = "images/driver17.png";
const driver18 = "images/driver18.png";
const driver19 = "images/driver19.png";
const driver20 = "images/driver20.png";
const driver21 = "images/driver21.png";
const driver22 = "images/driver22.png";
const driver23 = "images/driver23.png";
const driver24 = "images/driver24.png";
const driver25 = "images/driver25.png";
const driver26 = "images/driver26.png";
const driver27 = "images/tungtungtung.gif";
const driver28 = "images/froge.webp";
const driver29 = "images/poyo.webp";
const driver30 = "images/croc.webp";
const driverimages = [driver1, driver2, driver3, driver4, driver5, 
	driver6, driver7, driver8, driver9, driver10, driver11, driver12, 
	driver13, driver14, driver15, driver16, driver17, driver18, driver19, 
	driver20, driver21, driver22, driver23, driver24, driver25, driver26, driver27,driver28,driver29,driver30];
//interior
const interior = "images/interior.png";
const shelf1 = "images/shelf1.png";
const shelf2 = "images/shelf2.png";
const cashier = "images/cashier.png";
const fridge1 = "images/fridge1.png";
const fridge2 = "images/fridge2.png";
const gantry1 = "images/gantry1.png";
const gantry2 = "images/gantry2.png";
const breadtable = "images/breadtable.png";
const breadsign = "images/breadsign.png";
const window1 = "images/window1.png";
const flower1 = "images/flower1.png";
const flower2 = "images/flower2.png";
const tv1 = "images/tv.gif";
const tv2 = "images/tv2.gif";
const tv3 = "images/tv3.gif";
const worker = "images/worker.png";
//Greenery
const grass = "images/grass.png";
const grassright = "images/grassright.png";
const grassleft = "images/grassleft.png";
const tree1 = "images/tree1.png";
const tree2 = "images/tree2.png";
const tree3 = "images/tree3.png";
const tree4 = "images/tree4.png";
const tree5 = "images/tree5.png";
const tree6 = "images/tree6.png";
const tree7 = "images/tree7.png";
const tree8 = "images/tree8.png";
const tree9 = "images/tree9.png";
const tree10 = "images/tree10.png";
const tree11 = "images/tree11.png";
const trees = [tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8, tree9, tree10, tree11];
const lake = "images/lake.png";
const fish1 = "images/fish1.gif";
const fish2 = "images/fish2.gif";
const fish3 = "images/fish3.gif";
const fishes = [fish1, fish2, fish3];
const campfire = "images/campfire.gif";
const waterfall = "images/waterfall.gif";
const rock = "images/rock.png";
const pier = "images/pier.png";
const bush = "images/bush.png";
//objects
const streetlamp = "images/streetlamp.png";
const noentry = "images/noentry.png";
const trash = "images/trash.png";
const cone1 = "images/cone1.png";
const cone2 = "images/cone2.png";
const firehydrant = "images/firehydrant.png";
//draw circle
const centerI = 20;  // roughly half of 40 rows
const centerJ = 27;  // roughly half of 55 columns
const radius = 4;   // adjust radius size as needed
//audio
audio1 = "audio/11. sanctuary.mp3";
audio2 = "audio/gas.m4a";
audio3 = "audio/matcha latte.mp3";
audio4 = "audio/10. Silence before the storms.mp3";
var audioFiles = [audio1, audio2, audio3, audio4]; // Array of audio files
var currentAudioIndex = 0;
var backgroundMusic = new Audio();
backgroundMusic.loop = true;  // Set the music to loop continuously
backgroundMusic.volume = 0.5; // Optional: set initial volume (0.0 to 1.0)
// Start muted
backgroundMusic.muted = true;
// --- wire up the button immediately after ---
const muteBtn = document.getElementById('muteBtn');
// make the label match the muted state
muteBtn.textContent = 'Unmute 🔇';
muteBtn.addEventListener('click', () => {
  backgroundMusic.muted = !backgroundMusic.muted;
  muteBtn.textContent = backgroundMusic.muted 
    ? 'Unmute 🔇' 
    : 'Mute 🔊';
});
//defining target locations
var worker1Row = 2.6;
var worker1Col = 14.5;
var worker2Row = 4;
var worker2Col = 14.5;
var worker3Row = 5.4;
var worker3Col = 14.5;
var entranceRow = 3;
var entranceCol = 4;

//defining states
const ARRIVE = 0;
const CARQUEUE1 = 1;
const WAITING = 2;
const KIOSKMOVEMENT1 = 3;
const KIOSKMOVEMENT2 = 4;
const KIOSKMOVEMENT3 = 5;
const PUMPING = 6;
const HOLD = 7;
const AT_STORE = 8;
const INSIDE_STORE = 9;
const PAYMENT = 10;
const PAYING = 11;
const GO_BACK_CAR = 12;
const BACK_AT_CAR = 13;
const LEAVING = 14
const LEAVING1 = 15;
const LEAVING2 = 16;
const LEAVING3 = 17;
const DISCHARGED = 18;
const EXITED = 19;

// The worker can be either BUSY settling a payment, or IDLE, waiting for a driver to pay 
const IDLE = 0;
const BUSY = 1;
const OFF = 2;

// There are three workers
const WORKER1 = 1;
const WORKER2 = 2;
const WORKER3 = 3;

// Global declarations for rejection statistics
var totalCarsCount = 0;
var rejectedCarsCount = 0;

// constants for the car queue/kiosk area
const EMPTY = 0;
const OCCUPIED = 1;

// cars and drivers is a dynamic list, initially empty
var cars = [];
var drivers = [];

// gas_station_worker is a static list, populated with a workers
var gas_station_worker = [
	{"type":WORKER1,"label":"Worker1","location":{"row":worker1Row,"col":worker1Col},"state":IDLE},
	{"type":WORKER2,"label":"Worker2","location":{"row":worker2Row,"col":worker2Col},"state":IDLE},
	{"type":WORKER3,"label":"Worker3","location":{"row":worker3Row,"col":worker3Col},"state":IDLE},
];

// Global variable to store the number of gas pumps (must be an even number)
var selectedGasPumps = 24;  // Default is 24 (i.e. one station, 2 kiosks)
var selectedGasWorkers = 3; // Default is 3

// We can section our screen into different areas.
var areas =[
 {"label":"Grass Area","startRow":0,"numRows":1,"startCol":0,"numCols":1},
 {"label":"Main Road Area","startRow":0,"numRows":1,"startCol":2,"numCols":1},
 {"label":"Side Walk","startRow":0,"numRows":1,"startCol":4,"numCols":1},
 {"label":"Gas Station Area","startRow":10,"numRows":1,"startCol":7,"numCols":1},
 {"label":"Interior Area","startRow":0,"numRows":1,"startCol":8,"numCols":1},
 {"label":"River Area","startRow":0,"numRows":1,"startCol":17,"numCols":1},
 {"label":"Car Queue Area","startRow":2,"numRows":1,"startCol":6,"numCols":1},
]
// Create Car Queue Area
var carQueueArea = areas[6]; // the car queue area is the seventh element of the areas array
var carQueue = [];
// Push horizontal positions once.
carQueue.push({
    row: carQueueArea.startRow + 1,
    col: carQueueArea.startCol - 1,
    state: EMPTY
});
carQueue.push({
    row: carQueueArea.startRow + 1,
    col: carQueueArea.startCol,
    state: EMPTY
});
// Push the vertical positions for the rest of the queue.
for (var row = 0; row < 5; row++) {
    carQueue.push({
        row: carQueueArea.startRow + 1 + row,
        col: carQueueArea.startCol + 1,
        state: EMPTY
    });
}
// Create Kiosk Area
var KioskArea = [];
var GasStationArea = areas[3]

for (var row = 0; row < 4; row++) {
    for (var col = 0; col < 6; col++) {
		if (col%2==0)
		{
			KioskArea.push({
				row: GasStationArea.startRow-0.5 + row*3,
				col: GasStationArea.startCol+2 + col*2,
				state: EMPTY
			});
		}
		else
		{
			KioskArea.push({
				row: GasStationArea.startRow-0.5 + row*3,
				col: GasStationArea.startCol-1 + col*2,
				state: EMPTY
			});
		}
    }
}

// Create Interior Area
var Interior = [];
var InteriorArea = areas[4]
for (var row = 0; row < 4; row++) {
    for (var col = 0; col < 5; col++) {
		Interior.push({
			row: InteriorArea.startRow + 3 + row,
			col: InteriorArea.startCol + 1.5 + col,
			state: EMPTY
		});
    }
}

var currentTime = 0;
var statistics = [
// Add a new statistic for percentage of cars rejected
{"name": "Average percentage of cars rejected: ", "location": {"row": 1, "col": 20}, "cumulativeValue": 0, "count": 0},
{"name": "Avg. Pump Duration (steps): ", "location": {"row": 2, "col": 20}, "cumulativeValue": 0, "count": 0},
{"name": "Avg. Time in System (steps): ", "location": {"row": 3, "col": 20}, "cumulativeValue": 0, "count": 0},
{"name": "Avg. Pump Amount (liters): ", "location": {"row": 4, "col": 20}, "cumulativeValue": 0, "count": 0},
];
var carRejectionData = []; // Array to store simulation points for car rejections
var rejectionChart;        // Global variable to hold the Plotly chart instance

var totalProfit = 0;   // cumulative profit/revenue from gas sales
var profitData = [];   // array to hold profit data over time (objects: { time: ..., profit: ... })
var profitChart;       // will hold the Plotly chart instance
var gasPrice = 2.5;
// The probability of a car arrival needs to be less than the probability of a departure, else an infinite queue will build.
// So don't set probDeparture too close to probArrival.
var probArrival = 0.2;
var probDeparture = 0.28;

// When the document loads, attach event listeners to the sliders.
document.getElementById('arrivalSlider').addEventListener('input', function() {
    probArrival = parseFloat(this.value);
    document.getElementById('arrivalValue').textContent = parseFloat(this.value).toFixed(2);
});

document.getElementById('departureSlider').addEventListener('input', function() {
    probDeparture = parseFloat(this.value);
    document.getElementById('departureValue').textContent = parseFloat(this.value).toFixed(2);
});

// To manage the queues, we need to keep track of carIDs.
var driverIndex = 0; // increment this and assign it to the next driver
var nextcarID = 0; // increment this and assign it to the next admitted car of type A

// This next function is executed when the script is loaded. It contains the page initialization code.
(function() {
	// Your page initialization code goes here
	// All elements of the DOM will be available here
	window.addEventListener("resize", redrawWindow); //Redraw whenever the window is resized
	simTimer = window.setInterval(simStep, animationDelay); // call the function simStep every animationDelay milliseconds
	redrawWindow();
})();

// We need a function to start and pause the the simulation.
function toggleSimStep(){ 
	//this function is called by a click event on the html page. 
	// Search BasicAgentModel.html to find where it is called.
	isRunning = !isRunning;
	console.log("isRunning: "+isRunning);
    if (isRunning) {
        // Set the Audio object's source to the current track in the sequence.
        backgroundMusic.src = audioFiles[currentAudioIndex];
        backgroundMusic.load();  // Load the new source.

        // Attempt to play the audio.
        backgroundMusic.play().catch(function(error){
            // Handle errors (e.g., browser's autoplay restrictions).
            console.log("Error playing music:", error);
        });

        // Update the index for next cycle (wrap around to 0 after the last file).
        currentAudioIndex = (currentAudioIndex + 1) % audioFiles.length;
    } else {
        // Pause the music immediately when the simulation is not running.
        backgroundMusic.pause();
    }
}

function redrawWindow(){
	isRunning = false; // used by simStep
	window.clearInterval(simTimer); // clear the Timer
	animationDelay = 550 - document.getElementById("slider1").value;
	simTimer = window.setInterval(simStep, animationDelay); // call the function simStep every animationDelay milliseconds
	
	// Re-initialize simulation variables
	driverIndex = 0;
	nextcarID = 0; // increment this and assign it to the next entering car of type A
	currentTime = 0;
	statistics[0].cumulativeValue=0;
	statistics[0].count=0;
	statistics[1].cumulativeValue=0;
	statistics[1].count=0;
	statistics[2].cumulativeValue=0;
	statistics[2].count=0;
	statistics[3].cumulativeValue=0;
	statistics[3].count=0;
	totalCarsCount = 0;
	rejectedCarsCount = 0;
	cars = [];
	drivers = [];
	carRejectionData = []; // Array to store simulation points for car rejections
	totalProfit = 0;   // cumulative profit/revenue from gas sales
	profitData = [];   // array to hold profit data over time (objects: { time: ..., profit: ... })

	carQueue.forEach(function(carQueue) {
		carQueue.state = EMPTY;
	});
	KioskArea.forEach(function(KioskArea) {
		KioskArea.state = EMPTY;
	});

	//resize the drawing surface; remove all its contents; 
	var drawsurface = document.getElementById("surface");
	var creditselement = document.getElementById("credits");
	var w = window.innerWidth;
	var h = window.innerHeight;
	var surfaceWidth =(w - 3*WINDOWBORDERSIZE);
	var surfaceHeight= (h-creditselement.offsetHeight - 3*WINDOWBORDERSIZE);
	
	drawsurface.style.width = surfaceWidth+"px";
	drawsurface.style.height = surfaceHeight+"px";
	drawsurface.style.left = WINDOWBORDERSIZE/2+'px';
	drawsurface.style.top = WINDOWBORDERSIZE/2+'px';
	drawsurface.style.border = "thick solid #FFB6FF"; //The border is mainly for debugging; okay to remove it
	drawsurface.innerHTML = ''; //This empties the contents of the drawing surface, like jQuery erase().
	
	// Compute the cellWidth and cellHeight, given the size of the drawing surface
	numCols = maxCols;
	cellWidth = surfaceWidth/numCols;
	numRows = Math.ceil(surfaceHeight/cellWidth);
	cellHeight = surfaceHeight/numRows;
	
	// In other functions we will access the drawing surface using the d3 library. 
	//Here we set the global variable, surface, equal to the d3 selection of the drawing surface
	surface = d3.select('#surface');
	surface.selectAll('*').remove(); // we added this because setting the inner html to blank may not remove all svg elements
	surface.style("font-size","100%");
	// rebuild contents of the drawing surface
	KioskArea = [];
	GasStationArea = areas[3]
	var pumpcount = 0;
	for (var row = 0; row < 4; row++) {
		for (var col = 0; col < 6; col++) {
			if (pumpcount>=selectedGasPumps) break; // Stop if we have reached the selected number of pumps
			if (col%2==0)
			{
				KioskArea.push({
					row: GasStationArea.startRow-0.5 + row*3,
					col: GasStationArea.startCol+2 + col*2,
					state: EMPTY
				});
				pumpcount++;
			}
			else
			{
				KioskArea.push({
					row: GasStationArea.startRow-0.5 + row*3,
					col: GasStationArea.startCol-1 + col*2,
					state: EMPTY
				});
				pumpcount++;
			}
		}
	}
	updateSurface();
};

// The window is resizable, so we need to translate row and column coordinates into screen coordinates x and y
function getLocationCell(location){
	var row = location.row;
	var col = location.col;
	var x = (col-1)*cellWidth; //cellWidth is set in the redrawWindow function
	var y = (row-1)*cellHeight; //cellHeight is set in the redrawWindow function
	return {"x":x,"y":y};
}

function updateSurface(){
	// This function is used to create or update most of the svg elements on the drawing surface.
	// See the function removeDynamicAgents() for how we remove svg elements
	
	//Select all svg elements of class "car" and map it to the data list called cars
	var allcars = surface.selectAll(".car").data(cars);
	
	// If the list of svg elements is longer than the data list, the excess elements are in the .exit() list
	// Excess elements need to be removed:
	allcars.exit().remove(); //remove all svg elements associated with entries that are no longer in the data list
	// (This remove function is needed when we resize the window and re-initialize the cars array)
	// If the list of svg elements is shorter than the data list, the new elements are in the .enter() list.
	// The first time this is called, all the elements of data will be in the .enter() list.
	// Create an svg group ("g") for each new entry in the data list; give it class "car"
	var newcars = allcars.enter().append("g").attr("class","car"); 
	//Append an image element to each new car svg group, position it according to the location data, and size it to fill a cell
	// Also note that we can choose a different image to represent the car based on the car type
	newcars.append("svg:image")
	 .attr("x",function(d){var cell= getLocationCell(d.location); return cell.x+"px";})
	 .attr("y",function(d){var cell= getLocationCell(d.location); return cell.y+"px";})
	 .attr("width", Math.min(cellWidth,cellHeight)+"px")
	 .attr("height", Math.min(cellWidth,cellHeight)+"px")
	 .attr("xlink:href",function(d){return carimages[Math.floor(Math.random() * carimages.length)]});
	
	// For the existing cars, we want to update their location on the screen 
	// but we would like to do it with a smooth transition from their previous position.
	// D3 provides a very nice transition function allowing us to animate transformations of our svg elements.
	//First, we select the image elements in the allcars list
	var images = allcars.selectAll("image");
	// Next we define a transition for each of these image elements.
	// Note that we only need to update the attributes of the image element which change
	images.transition()
	 .attr("x",function(d){var cell= getLocationCell(d.location); return cell.x+"px";})
	 .attr("y",function(d){var cell= getLocationCell(d.location); return cell.y+"px";})
	 .duration(animationDelay).ease('linear'); // This specifies the speed and type of transition we want.
 
	// cars will leave the gas station when they have been discharged. 
	// That will be handled by a different function: removeDynamicAgents
	var allDrivers = surface.selectAll(".driver").data(drivers);
	allDrivers.exit().remove(); //remove all svg elements associated with entries that are no longer in the data list
	var newDrivers = allDrivers.enter().append("g").attr("class","driver");

	newDrivers.append("svg:image")
	 .attr("x",function(d){var cell= getLocationCell(d.location); return cell.x+"px";})
	 .attr("y",function(d){var cell= getLocationCell(d.location); return cell.y+"px";})
	 .attr("width", Math.min(cellWidth,cellHeight)+"px")
	 .attr("height", Math.min(cellWidth,cellHeight)+"px")
	 .attr("xlink:href", function(d) {
		return driverimages[Math.floor(Math.random() * driverimages.length)];
	});
	
	var DriverImages = allDrivers.selectAll("image");
	DriverImages.transition()
	 .attr("x",function(d){var cell= getLocationCell(d.location); return cell.x+"px";})
	 .attr("y",function(d){var cell= getLocationCell(d.location); return cell.y+"px";})
	 .duration(animationDelay).ease('linear'); // This specifies the speed and type of transition we want.

	// The simulation should serve some purpose 
	// so we will compute and display the average length of stay of each car type.
	// We created the array "statistics" for this purpose.
	// Here we will create a group for each element of the statistics array (two elements)
	var allstatistics = surface.selectAll(".statistics").data(statistics);

	// The data in the statistics array are always being updated.
	// So, here we update the text in the labels with the updated information.
	allstatistics.selectAll("text").text(function(d) {
		// For a statistic like percentage rejected, there’s a special case...
		if (d.name.indexOf("rejected") !== -1) {
			var percent = totalCarsCount > 0 ? (rejectedCarsCount / totalCarsCount) * 100 : 0;
			return d.name + percent.toFixed(1) + "%";
		} else {
			var avg = d.cumulativeValue / Math.max(1, d.count);
			return d.name + avg.toFixed(1);
		}
	});

	// Finally, we would like to draw boxes around the different areas of our system. We can use d3 to do that too.
	var allareas = surface.selectAll(".areas").data(areas);
	var newareas = allareas.enter().append("g").attr("class","areas");
	// Left side of screen
	//Roads
	for (i=0; i < 16; i++)
		for (j=0; j < 20; j++)
			{
				newareas.append("svg:image")
				.attr("x",function(d){return (d.startCol+i)*cellWidth+"px";})
				.attr("y",function(d){return (d.startRow+j)*cellHeight+"px";})
				.attr("width",  function(d){return d.numCols*cellWidth;})
				.attr("height",  function(d){return d.numRows*cellWidth;})
				.attr("xlink:href",function(d){
					if (d.label=="Main Road Area")
						return roads[Math.floor(Math.random()*roads.length)];});
			}
	//Grass
	for (i=0; i < 20; i++)
		{
			newareas.append("svg:image")
			.attr("x",function(d){return (d.startCol)*cellWidth+"px";})
			.attr("y",function(d){return (d.startRow+i)*cellHeight+"px";})
			.attr("width",  function(d){return d.numCols*cellWidth;})
			.attr("height",  function(d){return d.numRows*cellWidth;})
			.attr("xlink:href",function(d){if (d.label=="Grass Area") return grass;});
		}
	for (i=0; i < 20; i++)
		{
			newareas.append("svg:image")
			.attr("x",function(d){return (d.startCol+1)*cellWidth+"px";})
			.attr("y",function(d){return (d.startRow+i)*cellHeight+"px";})
			.attr("width",  function(d){return d.numCols*cellWidth;})
			.attr("height",  function(d){return d.numRows*cellWidth;})
			.attr("xlink:href",function(d){if (d.label=="Grass Area") return grassright;});
		}
	//populate trees
	for (let i = 0; i < 40; i++) {
		for (let j = 0; j < 3; j++) {
		  newareas.append("svg:image")
			.attr("x", function(d) {return (d.startCol + j*0.4) * cellWidth + "px";})
			.attr("y", function(d) {return (d.startRow-0.2 + i/2) * cellHeight + "px";})
			.attr("width", function(d) {return d.numCols * cellWidth;})
			.attr("height", function(d) {return d.numRows * cellHeight;})
			.attr("xlink:href", function(d) {
			  if (d.label === "Grass Area") {
				return trees[Math.floor(Math.random() * trees.length)];
			  }
			});
		}
	  }
	// river area (rightside of screen)
	for (i=0; i < 20; i++)
	{
		newareas.append("svg:image")
		.attr("x",function(d){return (d.startCol+1)*cellWidth+"px";})
		.attr("y",function(d){return (d.startRow+i)*cellHeight+"px";})
		.attr("width",  function(d){return d.numCols*cellWidth;})
		.attr("height",  function(d){return d.numRows*cellWidth;})
		.attr("xlink:href",function(d){if (d.label=="River Area") return grassleft;});
	}
	for (i=0; i < 20; i++)
		for (j=0; j < 21; j++)
		{
			newareas.append("svg:image")
			.attr("x",function(d){return (d.startCol+2+j)*cellWidth+"px";})
			.attr("y",function(d){return (d.startRow+i)*cellHeight+"px";})
			.attr("width",  function(d){return d.numCols*cellWidth;})
			.attr("height",  function(d){return d.numRows*cellWidth;})
			.attr("xlink:href",function(d){if (d.label=="River Area") return grass;});
		}
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol+10.5)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+8.5)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth*3.5;})
	.attr("height",  function(d){return d.numRows*cellWidth*3.5;})
	.attr("xlink:href",function(d){if (d.label=="River Area") return lake;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol+11.3)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+8.2)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth;})
	.attr("height",  function(d){return d.numRows*cellWidth;})
	.attr("xlink:href",function(d){if (d.label=="River Area") return waterfall;});
	for (let i = 0; i < 5; i++)
		for (let j = 0; j < 3; j++)
		{
			if ( j == 2 || (j == 1 && i == 2)) {
				newareas.append("svg:image")
				.attr("x", function(d) {return (d.startCol+11.2+j/2) * cellWidth + "px";})
				.attr("y", function(d) {return (d.startRow+8.95+i/2) * cellHeight + "px";})
				.attr("width", function(d) {return d.numCols * cellWidth*0.67;})
				.attr("height", function(d) {return d.numRows * cellHeight*0.67;})
				.attr("xlink:href", function(d) {
					if (d.label === "River Area") {
					return fishes[Math.floor(Math.random() * fishes.length)];
					}
				});
			}
		}
	newareas.append("svg:image")
	.attr("x", function(d) {return (d.startCol+12.7) * cellWidth + "px";})
	.attr("y", function(d) {return (d.startRow+10) * cellHeight + "px";})
	.attr("width", function(d) {return d.numCols * cellWidth*0.67;})
	.attr("height", function(d) {return d.numRows * cellHeight*0.67;})
	.attr("xlink:href", function(d) {
		if (d.label === "River Area") {
		return fishes[Math.floor(Math.random() * fishes.length)];
		}
	});
	newareas.append("svg:image")
	.attr("x", function(d) {return (d.startCol+12.7) * cellWidth + "px";})
	.attr("y", function(d) {return (d.startRow+9.5) * cellHeight + "px";})
	.attr("width", function(d) {return d.numCols * cellWidth*0.67;})
	.attr("height", function(d) {return d.numRows * cellHeight*0.67;})
	.attr("xlink:href", function(d) {
		if (d.label === "River Area") {
		return fishes[Math.floor(Math.random() * fishes.length)];
		}
	});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol+13.1)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+11.3)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth*0.4;})
	.attr("height",  function(d){return d.numRows*cellWidth*0.4;})
	.attr("xlink:href",function(d){if (d.label=="River Area") return rock;});
	for (let i = 0; i < 40; i++) {
		for (let j = 0; j < 55; j++) {
			if ( ((i - centerI) ** 2) + ((j - centerJ) ** 2) < (radius ** 2) ) {
				continue;
				}
			newareas.append("svg:image")
			.attr("x", function(d) {return (d.startCol +1.3+ j*0.4) * cellWidth + "px";})
			.attr("y", function(d) {return (d.startRow-0.2 + i/2) * cellHeight + "px";})
			.attr("width", function(d) {return d.numCols * cellWidth;})
			.attr("height", function(d) {return d.numRows * cellHeight;})
			.attr("xlink:href", function(d) {
				if (d.label === "River Area") {
				return trees[Math.floor(Math.random() * trees.length)];
				}
			});
		}
	}
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol+12.05)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+8.7)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth*0.5;})
	.attr("height",  function(d){return d.numRows*cellWidth*0.5;})
	.attr("xlink:href",function(d){if (d.label=="River Area") return pier;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol+13)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+10.75)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth*0.6;})
	.attr("height",  function(d){return d.numRows*cellWidth*0.6;})
	.attr("xlink:href",function(d){if (d.label=="River Area") return campfire;});
	for (j=0; j < 20; j++)
		{
			newareas.append("svg:image")
			.attr("x",function(d){return (d.startCol)*cellWidth+"px";})
			.attr("y",function(d){return (d.startRow+j)*cellHeight+"px";})
			.attr("width",  function(d){return d.numCols*cellWidth;})
			.attr("height",  function(d){return d.numRows*cellWidth;})
			.attr("xlink:href",function(d){if (d.label=="Side Walk") return walktile;});
		}
	//entry point for the car
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+1.5)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth;})
	.attr("height",  function(d){return d.numRows*cellWidth;})
	.attr("xlink:href",function(d){if (d.label=="Side Walk") return sidewalk1;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol-0.5)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow-0.1)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth*2;})
	.attr("height",  function(d){return d.numRows*cellWidth*2;})
	.attr("xlink:href",function(d){if (d.label=="Side Walk") return gasstationsign;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+2)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth;})
	.attr("height",  function(d){return d.numRows*cellWidth;})
	.attr("xlink:href",function(d){if (d.label=="Side Walk") return sidewalk2;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+2.5)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth;})
	.attr("height",  function(d){return d.numRows*cellWidth;})
	.attr("xlink:href",function(d){if (d.label=="Side Walk") return sidewalk3;});
	//exit point for the car
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+17.5)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth;})
	.attr("height",  function(d){return d.numRows*cellWidth;})
	.attr("xlink:href",function(d){if (d.label=="Side Walk") return sidewalk1;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol-0.5)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+16.9)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth;})
	.attr("height",  function(d){return d.numRows*cellWidth;})
	.attr("xlink:href",function(d){if (d.label=="Side Walk") return noentry;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+18)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth;})
	.attr("height",  function(d){return d.numRows*cellWidth;})
	.attr("xlink:href",function(d){if (d.label=="Side Walk") return sidewalk2;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+18.5)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth;})
	.attr("height",  function(d){return d.numRows*cellWidth;})
	.attr("xlink:href",function(d){if (d.label=="Side Walk") return sidewalk3;});
	var gaspumpimages = selectedGasPumps/2;
	for (j=0; j < 4; j++)
		for (i=1; i < 4; i++)
			{
				if (gaspumpimages<=0) break; // Stop if we have reached the selected number of pumps
				gaspumpimages--;
				newareas.append("svg:image")
				.attr("x",function(d){return (d.startCol - 4 + 4 * i)*cellWidth+"px";})
				.attr("y",function(d){return (d.startRow - 3 + 3 * j)*cellHeight+"px";})
				.attr("width",  function(d){return d.numCols*cellWidth*2;})
				.attr("height",  function(d){return d.numRows*cellWidth*2;})
				.attr("xlink:href",function(d){if (d.label=="Gas Station Area") return GasPump;});
			}
	for (i=0; i < 2; i++)
		for (j=0; j < 20; j++)
			{
				newareas.append("svg:image")
				.attr("x",function(d){return (d.startCol+i)*cellWidth+"px";})
				.attr("y",function(d){return (d.startRow+j)*cellHeight+"px";})
				.attr("width",  function(d){return d.numCols*cellWidth;})
				.attr("height",  function(d){return d.numRows*cellWidth;})
				.attr("xlink:href",function(d){if (d.label=="Main Road Area") return roaddown;});
			}
	for (j=0; j < 20; j++)
		{
			if (j%2==0 && j!=0 && j!=2 && j!=18)
				{
					newareas.append("svg:image")
					.attr("x",function(d){return (d.startCol-0.5)*cellWidth+"px";})
					.attr("y",function(d){return (d.startRow+j-1)*cellHeight+"px";})
					.attr("width",  function(d){return d.numCols*cellWidth;})
					.attr("height",  function(d){return d.numRows*cellWidth;})
					.attr("xlink:href",function(d){if (d.label=="Side Walk") return streetlamp;});
				}
		}	
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol+0.45)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+6.2)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth*0.7;})
	.attr("height",  function(d){return d.numRows*cellWidth*0.7;})
	.attr("xlink:href",function(d){if (d.label=="Side Walk") return firehydrant;});
	// INTERIOR AREA 
	for (i=0; i < 10; i++)
		for (j=0; j < 7; j++)
			{
						newareas.append("svg:image")
						.attr("x",function(d){return (d.startCol-1+i)*cellWidth+"px";})
						.attr("y",function(d){return (d.startRow+j)*cellHeight+"px";})
						.attr("width",  function(d){return d.numCols*cellWidth;})
						.attr("height",  function(d){return d.numRows*cellWidth;})
						.attr("xlink:href",function(d){if (d.label=="Interior Area") return walktile;});
			}
	for (i=0; i < 2; i++)
		newareas.append("svg:image")
		.attr("x",function(d){return (d.startCol-0.7)*cellWidth+"px";})
		.attr("y",function(d){return (d.startRow+i/1.5)*cellHeight+"px";})
		.attr("width",  function(d){return d.numCols*cellWidth;})
		.attr("height",  function(d){return d.numRows*cellWidth;})
		.attr("xlink:href",function(d){if (d.label=="Interior Area") return trash;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol-0.7)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+1.3)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth;})
	.attr("height",  function(d){return d.numRows*cellWidth;})
	.attr("xlink:href",function(d){if (d.label=="Interior Area") return cone1;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol-0.7)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+1.7)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth;})
	.attr("height",  function(d){return d.numRows*cellWidth;})
	.attr("xlink:href",function(d){if (d.label=="Interior Area") return cone2;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow-1)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth*8;})
	.attr("height",  function(d){return d.numRows*cellWidth*8;})
	.attr("xlink:href",function(d){if (d.label=="Interior Area") return interior;});
	for(i=0; i < 8; i++)
	{
		if (i==3 || i==4)
		{
			continue;
		}
		newareas.append("svg:image")
		.attr("x",function(d){return (d.startCol+i)*cellWidth+"px";})
		.attr("y",function(d){return (d.startRow+5.8)*cellHeight+"px";})
		.attr("width",  function(d){return d.numCols*cellWidth;})
		.attr("height",  function(d){return d.numRows*cellWidth;})
		.attr("xlink:href",function(d){if (d.label=="Interior Area") return bush;});
	}
	for (i=0; i < 2; i++)
		{
			newareas.append("svg:image")
			.attr("x",function(d){return (d.startCol+0.5)*cellWidth+"px";})
			.attr("y",function(d){return (d.startRow+2.9+i*1.3)*cellHeight+"px";})
			.attr("width",  function(d){return d.numCols*cellWidth*2.1;})
			.attr("height",  function(d){return d.numRows*cellWidth*2.1;})
			.attr("xlink:href",function(d){if (d.label=="Interior Area") return shelf1;});
		}
	for (i=0; i < 2; i++)	
		for (j=0; j < 2; j++)
			{
				newareas.append("svg:image")
				.attr("x",function(d){return (d.startCol+2.9+i*1.3)*cellWidth+"px";})
				.attr("y",function(d){return (d.startRow+2.3+j*1.35)*cellHeight+"px";})
				.attr("width",  function(d){return d.numCols*cellWidth*1.5;})
				.attr("height",  function(d){return d.numRows*cellWidth*1.5;})
				.attr("xlink:href",function(d){if (d.label=="Interior Area") return shelf2;});
			}
	for (i=0; i < 3; i++)
	{
		newareas.append("svg:image")
		.attr("x",function(d){return (d.startCol+6)*cellWidth+"px";})
		.attr("y",function(d){return (d.startRow+1.8+i*1.3)*cellHeight+"px";})
		.attr("width",  function(d){return d.numCols*cellWidth*1.5;})
		.attr("height",  function(d){return d.numRows*cellWidth*1.5;})
		.attr("xlink:href",function(d){if (d.label=="Interior Area") return cashier;});
	}
	for (i=0; i < 5; i++)
	{
		newareas.append("svg:image")
		.attr("x",function(d){return (d.startCol+0.3+i*0.8)*cellWidth+"px";})
		.attr("y",function(d){return (d.startRow+0.7)*cellHeight+"px";})
		.attr("width",  function(d){return d.numCols*cellWidth*1.5;})
		.attr("height",  function(d){return d.numRows*cellWidth*1.5;})
		.attr("xlink:href",function(d){if (d.label=="Interior Area") return fridge1;});
	}
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol+1.25)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+2.3)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth;})
	.attr("height",  function(d){return d.numRows*cellWidth;})
	.attr("xlink:href",function(d){if (d.label=="Interior Area") return fridge2;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol+4.6)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+0.9)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth*1.4;})
	.attr("height",  function(d){return d.numRows*cellWidth*1.4;})
	.attr("xlink:href",function(d){if (d.label=="Interior Area") return breadtable;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol+4.75)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+0.3)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth*1.1;})
	.attr("height",  function(d){return d.numRows*cellWidth*1.1;})
	.attr("xlink:href",function(d){if (d.label=="Interior Area") return breadsign;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol+2.95)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+5.6)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth;})
	.attr("height",  function(d){return d.numRows*cellWidth;})
	.attr("xlink:href",function(d){if (d.label=="Interior Area") return gantry1;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol+4.05)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+5.6)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth;})
	.attr("height",  function(d){return d.numRows*cellWidth;})
	.attr("xlink:href",function(d){if (d.label=="Interior Area") return gantry2;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol+6.25)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+0.5)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth;})
	.attr("height",  function(d){return d.numRows*cellWidth;})
	.attr("xlink:href",function(d){if (d.label=="Interior Area") return window1;});
	for (i=0; i < 3; i++)
	{
		newareas.append("svg:image")
		.attr("x",function(d){return (d.startCol+0.75+i*1.4)*cellWidth+"px";})
		.attr("y",function(d){return (d.startRow+0.15)*cellHeight+"px";})
		.attr("width",  function(d){return d.numCols*cellWidth;})
		.attr("height",  function(d){return d.numRows*cellWidth;})
		.attr("xlink:href", function(d) {
			if (d.label === "Interior Area") {
			  const tv = [tv1, tv2, tv3];
			  return tv[Math.floor(Math.random() * tv.length)];
			}
		  });
	}
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol+5.75)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+1.25)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth*0.75;})
	.attr("height",  function(d){return d.numRows*cellWidth*0.75;})
	.attr("xlink:href",function(d){if (d.label=="Interior Area") return flower1;});
	newareas.append("svg:image")
	.attr("x",function(d){return (d.startCol+6.5)*cellWidth+"px";})
	.attr("y",function(d){return (d.startRow+1.25)*cellHeight+"px";})
	.attr("width",  function(d){return d.numCols*cellWidth;})
	.attr("height",  function(d){return d.numRows*cellWidth;})
	.attr("xlink:href",function(d){if (d.label=="Interior Area") return flower2;});
	for (i=0; i < selectedGasWorkers; i++)
	{	
		newareas.append("svg:image")
		.attr("class", "worker-icon")            // ← give it a class
		.attr("x",function(d){return (d.startCol+6.45)*cellWidth+"px";})
		.attr("y",function(d){return (d.startRow+1.6+i*1.3)*cellHeight+"px";})
		.attr("width",  function(d){return d.numCols*cellWidth;})
		.attr("height",  function(d){return d.numRows*cellWidth;})
		.attr("xlink:href",function(d){if (d.label=="Interior Area") return worker;});
	}

	// Update statistics texts
	var allstatistics = surface.selectAll(".statistics").data(statistics);
	allstatistics.selectAll("text").text(function(d) {
		if (d.name.indexOf("rejected") !== -1) {
			// Compute percentage rejected (if any cars have arrived)
			var percent = totalCarsCount > 0 ? (rejectedCarsCount / totalCarsCount) * 100 : 0;
			return d.name + percent.toFixed(1) + "%";
		} else {
			var avgLengthOfStay = d.cumulativeValue / Math.max(1, d.count);
			return d.name + avgLengthOfStay.toFixed(1);
		}
	});
}

function addDynamicAgents(){
	// Cars are dynamic agents: they enter the gas station, wait, get gas, and then leave
	// We could specify their probabilities of arrival in any simulation step separately
	// Or we could specify a probability of arrival of all Cars and then specify the probability of a Type A arrival.
	// First see if a car arrives in this sim step.
	if (Math.random()< probArrival){
		totalCarsCount++;
		var newcar = {"id":1,"type":"A","location":{"row":0,"col":3},
		"target":{"row":entranceRow,"col":entranceCol},"state":ARRIVE,"timeAdmitted":0};	
		cars.push(newcar);
	}
}

function updatecar(carIndex){
	//carIndex is an index into the cars data array
	carIndex = Number(carIndex); //it seems carIndex was coming in as a string
	var car = cars[carIndex];
	// get the current location of the car
	var row = car.location.row;
	var col = car.location.col;
	var state = car.state;
	
	// determine if car has arrived at destination
	var hasArrived = (Math.abs(car.target.row-row)+Math.abs(car.target.col-col))==0;

	// Behavior of car depends on his or her state
	switch (state) {
		case ARRIVE:
			if (hasArrived) {
				car.timeAdmitted = currentTime;
				const emptyCarQueue = carQueue.filter(queue => queue.state === EMPTY);
				if (emptyCarQueue.length > 0) {
					// The car can join the car queue.
					car.state = CARQUEUE1;
					// Initial starting position
					car.target.row = 3;
					car.target.col = 5;
					// Assign an ID based on car type.
					car.id = ++nextcarID;

				} else {
					// No space in car queue: car is rejected/discharged.
					car.state = DISCHARGED;
					car.target.row = 20;
					car.target.col = 4;
					rejectedCarsCount++;
				}
			}
			break;
			
		case CARQUEUE1:
			if (hasArrived) {
				car.timeAdmitted = currentTime;
				// Assign a car queue seat.
				const emptyCarQueue = carQueue.filter(queue => queue.state === EMPTY);
				if (emptyCarQueue.length > 0) {
					// car joins the car queue in the WAITING state.
					car.state = WAITING;
					// Choose the last available (i.e. furthest back) empty seat in the car queue.
					const queueSeat = emptyCarQueue[emptyCarQueue.length - 1];
					car.target.row = queueSeat.row;
					car.target.col = queueSeat.col;
					queueSeat.state = OCCUPIED;
					// Save the seat index so that we can later free it.
					car.seatIndex = carQueue.indexOf(queueSeat);
				}
			}
			break;
			
		case WAITING:
			if (hasArrived) {
				// Allow only the car at the front of the queue to move out.
				// (Assuming that higher carQueue indexes represent the front of the queue.)
				let waitingCars = cars.filter(p => p.state === WAITING && p.hasOwnProperty('seatIndex'));
				if (waitingCars.length > 0) {
					// The front car is the one with the highest seat index.
					let frontSeatIndex = Math.max(...waitingCars.map(p => p.seatIndex));
					// If this car is not at the front, they must wait.
					if (car.seatIndex !== frontSeatIndex) {
						break;
					}
				}
				// Now, if a kiosk slot is available, allow the front car to leave the car queue.
				const emptyKiosk = KioskArea.filter(kiosk => kiosk.state === EMPTY);
				if (emptyKiosk.length > 0) {
					// Select a random empty kiosk seat.
					const randomKiosk = emptyKiosk[Math.floor(Math.random() * emptyKiosk.length)];
					randomKiosk.state = OCCUPIED;
					// Store the final kiosk target coordinates.
					car.finalKioskTarget = { row: randomKiosk.row, col: randomKiosk.col };
					// Free the waiting car queue seat.
					const freedIndex = car.seatIndex;
					carQueue[freedIndex].state = EMPTY;
					shiftCarQueue(freedIndex); // Assume this function is defined elsewhere.
					delete car.seatIndex;
					// Save the kiosk seat index (if you need it for later freeing).
					car.kioskSeatIndex = KioskArea.indexOf(randomKiosk);
					// Transition to the multi-step kiosk movement.
					car.state = KIOSKMOVEMENT1;
				}
			}
			break;
			
		case KIOSKMOVEMENT1:
			if (hasArrived) {
				// Step 1: Move vertically downward.
				// Set the target to one row below the final kiosk target (with fixed column 7 here).
				car.target.row = car.finalKioskTarget.row + 1;
				car.target.col = 7;
				car.state = KIOSKMOVEMENT2;
			}
			break;
			
		case KIOSKMOVEMENT2:
			if (hasArrived) {
				// Step 2: Move horizontally to the kiosk's targeted column.
				car.target.col = car.finalKioskTarget.col;
				car.state = KIOSKMOVEMENT3;
			}
			break;
			
		case KIOSKMOVEMENT3:
			if (hasArrived) {
				// Step 3: Move vertically upward to the final kiosk row.
				car.target.row = car.finalKioskTarget.row;
				// Now that the car has reached the kiosk, transition to PUMPING.
				car.state = PUMPING;
			}
			break;
			case PUMPING:
				if (hasArrived) {
					// Create driver if not already created (as before) ...
					if (!car.driverCreated) {
						let temprow = KioskArea[car.kioskSeatIndex].row;
						let tempcol = KioskArea[car.kioskSeatIndex].col;
						var driver = {
							'id': car.id,
							'location': { 'row': temprow, 'col': tempcol },
							'target': { 'row': temprow, 'col': tempcol },
							'state': 'HOLD_AT_KIOSK',
							'holdStartTime': currentTime
						};
						drivers.push(driver);
						car.driverCreated = true;
					}
					
					// Initialize pumping parameters once.
					if (car.pumpedVolume === undefined) {
						car.targetVolume = 45 + Math.random() * 4;  // roughly 45 to 49 litres
						car.flowRate = 0.833 + Math.random() * 0.2;   // flow rate in litres per step
						car.pumpDelay = Math.floor(2 + Math.random() * 4); // delay of 2-5 steps
						car.pumpedVolume = 0;
						car.pumpStartTime = currentTime;  // record the start time of pumping
					}
					
					// Simulate pumping by adding flowRate each simulation step.
					car.pumpedVolume += car.flowRate;
					
					// Check if pumping is complete:
					if (car.pumpedVolume >= car.targetVolume) {
						if (car.currentPumpDelay === undefined) {
							car.currentPumpDelay = car.pumpDelay;
						} else if (car.currentPumpDelay > 0) {
							car.currentPumpDelay -= 1;
						} else {
							// Pumping is complete. Record stats once.
							if (!car.hasRecordedPumpStats) {
								var pumpDuration = currentTime - car.pumpStartTime;
								// Update statistic
								statistics[1].cumulativeValue += pumpDuration;
								statistics[1].count++;
								statistics[3].cumulativeValue += car.pumpedVolume;
								statistics[3].count++;
								
								// Now, compute revenue for this car:
								gasPrice = parseFloat(document.getElementById("gasPriceSlider").value);
								var revenue = gasPrice * car.pumpedVolume;
								
								totalProfit += revenue;
								
								// Mark that we have recorded the pump stats for this car
								car.hasRecordedPumpStats = true;
							}
							
							// Update driver stat
							let associatedDriver = drivers.find(d => d.id === car.id);
							if (associatedDriver) {
								associatedDriver.state = PAYMENT;
							}
							car.state = "WAITING_FOR_PAYMENT";
						}
					}
				}
			break;			
		case LEAVING:
			if (hasArrived) {
				// Free the kiosk seat.
				const freedIndex = car.kioskSeatIndex;
				KioskArea[freedIndex].state = EMPTY;
				// Shift the car queue to fill the freed seat.
				delete car.kioskSeatIndex;
				// Transition to DISCHARGED state.
				car.state = LEAVING1;
				console.log("car.location.col:", car.location.col);
				console.log("car.location.col + 2:", car.location.col + 2);
				console.log("car.location.row:", car.location.row);
				console.log("car.location.row + 2:", car.location.row + 2);

				if(car.location.col + 2 == 19){
					car.target.row = car.location.row + 2;
					car.target.col = car.location.col + 1;
				}
				else if(car.location.row + 1 == 19.5){
					car.target.row = car.location.row;
					car.target.col = car.location.col;
				}
				else{
					car.target.row = car.location.row + 2;
					car.target.col = car.location.col + 2;
				}
			}
		break;
		case LEAVING1:
			if (hasArrived) {
				car.state = LEAVING2;
				car.target.row = 19;
			}
		break;
		case LEAVING2:
			if (hasArrived) {
				car.state = LEAVING3;
				car.target.col = 5;
			}
		break;	
		case LEAVING3:
			if (hasArrived) {
				// Transition to DISCHARGED state.
				car.state = DISCHARGED;
				car.target.row = 20;
				car.target.col = 4;
			}
		break;
		case DISCHARGED:
			if (hasArrived) {
				var systemTime = currentTime - car.timeAdmitted;
				statistics[2].cumulativeValue += systemTime;
				statistics[2].count++;
				car.state = EXITED;
			}
			break;
			
		default:
			break;
	}
	// set the destination row and column
	var targetRow = car.target.row;
	var targetCol = car.target.col;
	// compute the distance to the target destination
	var rowsToGo = targetRow - row;
	var colsToGo = targetCol - col;
	// set the speed
	var cellsPerStep = 1;
	// compute the cell to move to
	var newRow = row + Math.min(Math.abs(rowsToGo),cellsPerStep)*Math.sign(rowsToGo);
	var newCol = col + Math.min(Math.abs(colsToGo),cellsPerStep)*Math.sign(colsToGo);
	// update the location of the car
	car.location.row = newRow;
	car.location.col = newCol;
}

function updateDriver(driverIndex){
	driverIndex = Number(driverIndex); 
	var driver = drivers[driverIndex];
    // If the driver is holding at the kiosk, decide when to release.
    if (driver.state === 'HOLD_AT_KIOSK') {
        // For example, hold for at least 10 simulation steps.
        let holdDuration = currentTime - driver.holdStartTime;
        if (holdDuration < 1) {  
            // Remain in HOLD_AT_KIOSK and do not update location.
            return;
        } else {
            // Now it is time for the driver to depart.
            driver.state = AT_STORE;
            // Set the new target where the driver should go (e.g., store coordinates).
            driver.target = { row: 7, col: 12.5 };
        }
    }
	// get the current location of the driver
	var row = driver.location.row;
	var col = driver.location.col;
	var type = driver.type;
	var state = driver.state;
	var hasArrived = (Math.abs(driver.target.row-row)+Math.abs(driver.target.col-col))==0;
	switch (state) {
		case AT_STORE:
			if (hasArrived) {
				// The driver has arrived at the store.
				driver.state = INSIDE_STORE;
				// Set the target to a random interior location.
				const randomInterior = Interior[Math.floor(Math.random() * Interior.length)];
				driver.interiorTarget = { row: randomInterior.row, col: randomInterior.col };
				driver.target.row = driver.interiorTarget.row;
				driver.target.col = driver.interiorTarget.col;
			}
		break;
		case INSIDE_STORE: {
			//dog shit afk
		}
		break;
		case PAYMENT:
			if (hasArrived) {
				// Find an available cashier among the three workers.
				let availableCashier = gas_station_worker.find(c =>
					(c.type === WORKER1 || c.type === WORKER2 || c.type === WORKER3) && c.state === IDLE
				);

				if (availableCashier) {
					// Check if any other driver (besides the current one) is already targeting this cashier.
					let collision = drivers.some(d =>
						d.id !== driver.id &&
						d.state === PAYING &&
						d.target.row === availableCashier.location.row &&
						d.target.col === availableCashier.location.col
					);

					if (!collision) {
						// No collision: assign the cashier to the driver.
						availableCashier.state = BUSY;  // Mark cashier as busy immediately.
						driver.state = PAYING;
						driver.target.row = availableCashier.location.row;
						driver.target.col = availableCashier.location.col;
					} else {
						// For now, the driver will wait for the next simulation step.
					}
				} else {
					// No available cashier; the driver will wait.
				}
			}
		break;
		// In the PAYING state, simulate the payment process with a random chance to finish payment.
		case PAYING:
			// Complete payment randomly according to your probability (probDeparture in your simulation)
			if (hasArrived) {
				// When the driver arrives at the cashier location, start the payment process.
				if (Math.random() < probDeparture) {
					// Payment is complete: mark the driver as DONE_PAYING.
					driver.state = GO_BACK_CAR;
					// Free up the cashier.
					let assignedCashier = gas_station_worker.find(c =>
						(c.type === WORKER1 || c.type === WORKER2 || c.type === WORKER3) && c.state === BUSY
					);
					if (assignedCashier) {
						assignedCashier.state = IDLE;
						console.log("Cashier " + assignedCashier.label + " is now available.");
					}
					// Set the driver’s target to (7,12.5)
					driver.target = { row: 7, col: 12.5 };
					console.log("Driver " + driver.id + " finished paying and is now heading to (7,12.5).");
				}
			}
		break;
	
		case GO_BACK_CAR:
			if (hasArrived) {
				// Look up the associated car (assuming car.id === driver.id)
				let associatedcar = cars.find(p => p.id === driver.id);
				if (associatedcar) {
					// Set the driver's target to the car's current location.
					driver.target = {
						row: associatedcar.location.row,
						col: associatedcar.location.col
					};
					// Optionally, change the driver's state to a new state indicating it's returning.
					driver.state = BACK_AT_CAR; // or keep GO_BACK_CAR if you prefer.
					// console.log("Driver " + driver.id + " now returning to car at (" +
					// 			driver.target.row + ", " + driver.target.col + ").");
				} else {
					// console.warn("No associated car found for driver " + driver.id);
				}
			}
		break;
		case BACK_AT_CAR:
			if (hasArrived) {
				// Find the associated car.
				let associatedcar = cars.find(p => p.id === driver.id);
				if (associatedcar) {
					// Set the car's state to LEAVING to indicate they are now on their way out.
					associatedcar.state = LEAVING;
					// console.log("car " + associatedcar.id + " state set to LEAVING.");
				} else {
					// console.warn("No associated car found for driver " + driver.id);
				}
				// Now update the driver's state to EXITED.
				driver.state = EXITED;
				// console.log("Driver " + driver.id + " has arrived at the car and is now exiting.");
			}
		break;
		default:
		break;
	}
	// set the destination row and column
	var targetRow = driver.target.row;
	var targetCol = driver.target.col;
	// compute the distance to the target destination
	var rowsToGo = targetRow - row;
	var colsToGo = targetCol - col;
	// set the speed
	var cellsPerStep = 1;
	// compute the cell to move to
	var newRow = row + Math.min(Math.abs(rowsToGo),cellsPerStep)*Math.sign(rowsToGo);
	var newCol = col + Math.min(Math.abs(colsToGo),cellsPerStep)*Math.sign(colsToGo);
	// update the location of the driver
	driver.location.row = newRow;
	driver.location.col = newCol;
}

function shiftCarQueue(startIndex) {
    // Assume the front of the queue is at index startIndex, and all indices less than startIndex should shift up one position.
    for (let i = startIndex - 1; i >= 0; i--) {
        if (carQueue[i].state === OCCUPIED) {
            // Find car at seat i.
            let carInSeat = cars.find(p => p.seatIndex === i);
            if (carInSeat) {
                // Move this car forward one position (to i+1).
                carInSeat.seatIndex = i + 1;
                carInSeat.target.row = carQueue[i + 1].row;
                carInSeat.target.col = carQueue[i + 1].col;
            }
            // Update the states: mark position i as EMPTY and i+1 as OCCUPIED.
            carQueue[i].state = EMPTY;
            carQueue[i + 1].state = OCCUPIED;
        }
    }
}

function updateRejectionChart() {
    // Calculate not rejected cars: totalCarsCount minus rejectedCarsCount
    var notRejected = totalCarsCount - rejectedCarsCount;
    
    // Add a new data point for the current simulation step
    carRejectionData.push({
        time: currentTime,
        total: totalCarsCount,       // (For debugging or future extension)
        rejected: rejectedCarsCount,
        notRejected: notRejected
    });
    
    // Map the data for the x axis (time) and the y axes (rejected and not rejected)
    var xData = carRejectionData.map(function(d) { return d.time; });
    var rejectedData = carRejectionData.map(function(d) { return d.rejected; });
    var notRejectedData = carRejectionData.map(function(d) { return d.notRejected; });
    
    // Define the Plotly data object with two traces:
    var data = [
        {
            x: xData,
            y: rejectedData,
            type: 'scatter',
            mode: 'lines',
            name: 'Rejected Cars',
            line: { color: 'red' }
        },
        {
            x: xData,
            y: notRejectedData,
            type: 'scatter',
            mode: 'lines',
            name: 'Not Rejected Cars',
            line: { color: 'green' }
        }
    ];
    
    // Define the chart layout
    var layout = {
        title: {
            text: '<b>Car Rejection Process Over Time</b>',
            font: { size: 16, color: '#000000' }
        },
        xaxis: { title: '<b>Time Step</b>' },
        yaxis: { title: '<b>Number of Cars</b>',
						rangemode: 'tozero'  // Forces the minimum to 0 
			   },
        font: { family: 'Arial, sans-serif', size: 12 },
		paper_bgcolor: 'rgba(0,0,0,0)',  // Makes the entire chart area background transparent
		plot_bgcolor: 'rgba(0,0,0,0)'      // Makes the plotting area (inside the axes) transparent
    };
    
    // If the chart doesn't exist yet, create it using Plotly.newPlot; otherwise, update it with Plotly.react
    if (!rejectionChart) {
        rejectionChart = Plotly.newPlot('rejectionChart', data, layout);
    } else {
        Plotly.react('rejectionChart', data, layout);
    }
}
function updateStatisticsDisplay() {
    // Calculate the rejected percentage
    var percentRejected = totalCarsCount > 0 ? (rejectedCarsCount / totalCarsCount) * 100 : 0;
    document.getElementById("statRejected").textContent = 
         "Average percentage of cars rejected: " + percentRejected.toFixed(1) + "%";

    // Calculate the averages for pump duration, time in system, and pump amount.
    var pumpDurationAvg = statistics[1].count > 0 ? statistics[1].cumulativeValue / statistics[1].count : 0;
    var timeInSystemAvg = statistics[2].count > 0 ? statistics[2].cumulativeValue / statistics[2].count : 0;
    var pumpAmountAvg   = statistics[3].count > 0 ? statistics[3].cumulativeValue / statistics[3].count : 0;

    document.getElementById("statPumpDuration").textContent = 
         "Avg. Pump Duration (steps): " + pumpDurationAvg.toFixed(1);
    document.getElementById("statTimeInSystem").textContent = 
         "Avg. Time in System (steps): " + timeInSystemAvg.toFixed(1);
    document.getElementById("statPumpAmount").textContent = 
         "Avg. Pump Amount (liters): " + pumpAmountAvg.toFixed(1);
}
function updateProfitData() {
    // Every simulation step, record the current profit.
    profitData.push({
        time: currentTime,
        profit: totalProfit
    });
}
function updateProfitChart() {
    // Extract time and profit arrays from profitData
    var times = profitData.map(function(d) { return d.time; });
    var profits = profitData.map(function(d) { return d.profit; });

    // Define the data trace for the profit chart
    var data = [
        {
            x: times,
            y: profits,
            type: 'scatter',
            mode: 'lines',
            name: 'Profit',
            line: { color: 'blue' }
        }
    ];

    // Define the chart layout with transparent background if desired:
    var layout = {
        title: {
            text: '<b>Profit Over Time</b>',
            font: { size: 16, color: '#000000' }
        },
        xaxis: { title: '<b>Time Step</b>' },
        yaxis: { title: '<b>Profit ($)</b>', 
			rangemode: 'tozero'  // Forces the minimum to 0
		},
		
        font: { family: 'Arial, sans-serif', size: 12 },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)'
    };

    // If the chart isn't created yet, create it; otherwise update:
    if (!profitChart) {
        profitChart = Plotly.newPlot('profitChart', data, layout);
    } else {
        Plotly.react('profitChart', data, layout);
    }
}

function removeDynamicAgents(){
	// We need to remove cars who have been discharged. 
	//Select all svg elements of class "car" and map it to the data list called cars
	var allcars = surface.selectAll(".car").data(cars);
	//Select all the svg groups of class "car" whose state is EXITED
	var fullcar = allcars.filter(function(d,i){return d.state==EXITED;});
	// Remove the svg groups of EXITED cars: they will disappear from the screen at this point
	fullcar.remove();
	
	// Remove the EXITED cars from the cars list using a filter command
	cars = cars.filter(function(d){return d.state!=EXITED;});
	// At this point the cars list should match the images on the screen one for one 
	// and no cars should have state EXITED
	var allDrivers = surface.selectAll(".driver").data(drivers);
	//Select all the svg groups of class "driver" whose state is EXITED
	var finishedDrivers = allDrivers.filter(function(d,i){return d.state==EXITED;});
	// Remove the svg groups of EXITED drivers: they will disappear from the screen at this point
	finishedDrivers.remove();
	// Remove the EXITED drivers from the drivers list using a filter command
	drivers = drivers.filter(function(d){return d.state!=EXITED;});
}

function updateDynamicAgents(){
	// loop over all the agents and update their states
	for (var carIndex in cars){
		updatecar(carIndex);
	}
	for (var driverIndex in drivers){
		updateDriver(driverIndex);
	}
	updateSurface();	
}

function updateGasPumpCount() {
	selectedGasPumps = parseInt(document.getElementById("gasPumpCount").value, 10);
	redrawWindow();      // this clears & re‐initializes everything
}

function updateGasWorkerCount() {
	selectedGasWorkers = parseInt(document.getElementById("gasWorkerCount").value, 10);
	for (var i = 0; i < 3; i++) {
		gas_station_worker[i].state = OFF;
	}
	for (var i = 0; i < selectedGasWorkers; i++) {
		gas_station_worker[i].state = IDLE;
	}
	// 2) Remove every existing worker image
	surface.selectAll("image.worker-icon").remove();

	// 3) find the <g class="areas"> whose data.label === "Interior Area"
	const interiorG = surface.selectAll("g.areas")
		.filter(d => d.label === "Interior Area");

	// 4) re‑append exactly N icons, using the same math you had before
	for (let i = 0; i < selectedGasWorkers; i++) {
		interiorG.append("svg:image")
		.attr("class", "worker-icon")
		.attr("x", d => (d.startCol + 6.45) * cellWidth + "px")
		.attr("y", d => (d.startRow + 1.6 + i * 1.3) * cellHeight + "px")
		.attr("width",  d => d.numCols * cellWidth + "px")
		.attr("height", d => d.numRows * cellWidth + "px")
		.attr("xlink:href", () => worker);
	}
}

function simStep(){
	//This function is called by a timer; if running, it executes one simulation step 
	//The timing interval is set in the page initialization function near the top of this file
	if (isRunning){ //the isRunning variable is toggled by toggleSimStep
		// Increment current time (for computing statistics)
		currentTime++;
		// Sometimes new agents will be created in the following function
		addDynamicAgents();
		// In the next function we update each agent
		updateDynamicAgents();
		// Sometimes agents will be removed in the following function
		removeDynamicAgents();
		updateRejectionChart();
		updateStatisticsDisplay();
		updateProfitData();
		updateProfitChart();
	}
}