var wins = 0;
var loss = 0;
var tie = 0;
var theTime = new Date();
var tempTime = new Date();
var time_interval = 5000;
var last_iteration = 0;
var running= true;
var index = 0; 
var timer;

function updateDisplay(){
    theTime = new Date();
    console.log("the time is: " + theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));
     
     var timeRead = data[index].time_seconds;
     


 var timeRead = data[index].time_seconds;

    if(timeRead >= 10){
        document.getElementById("data").rows["seconds"].innerHTML = dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerHTML = dataRow("Latitude", data[index].latitude, " ");
        document.getElementById("data").rows["longitude"].innerHTML = dataRow("Longitude", data[index].longitude, " ");
        document.getElementById("data").rows["gps"].innerHTML = dataRow("GPS altitude", data[index].gps_altitude, " ");
        document.getElementById("data").rows["bmpSensorAltitdue"].innerHTML = dataRow("BMP Altitude", data[index].bmpSensor_altitude, " ");
        document.getElementById("data").rows["bmpSensorPressure"].innerHTML = dataRow("BMP Pressure", data[index].bmpSensor_pressure, " ");
        document.getElementById("data").rows["bmpSensorTemp"].innerHTML = dataRow("BMP Temp", data[index].bmpSensor_temp, " ");
        document.getElementById("data").rows["digitalSensorTemp"].innerHTML = dataRow("Dig Temp", data[index].digSensor_temp, " ");
        document.getElementById("data").rows["cssSensorTemp"].innerHTML = dataRow("CSS Temp", data[index].cssSensor_temp, " ");
        document.getElementById("data").rows["cssSensor_eC02"].innerHTML = dataRow("CSS EC02", data[index].cssSensor_eC02, " ");
        document.getElementById("data").rows["cssSensorTVOC"].innerHTML = dataRow("CSS TVOC", data[index].cssSensor_TVOC, " ");
        document.getElementById("data").rows["uv"].innerHTML = dataRow("UV", data[index].UV, " ");
        document.getElementById("data").rows["accelX"].innerHTML = dataRow("Accel X", data[index].accelX, " ");
        document.getElementById("data").rows["accelY"].innerHTML = dataRow("Accel Y", data[index].accelY, " ");
        document.getElementById("data").rows["accelZ"].innerHTML = dataRow("Accel Z", data[index].accelZ , " ");
        document.getElementById("data").rows["magX"].innerHTML = dataRow("Magnetic X", data[index].magneticX, " ");
        document.getElementById("data").rows["magY"].innerHTML = dataRow("Magnetic Y", data[index].magneticY, " ");
        document.getElementById("data").rows["magZ"].innerHTML = dataRow("Magnetic Z", data[index].magneticZ, " ");
        document.getElementById("data").rows["gyroX"].innerHTML = dataRow("Gyro X", data[index].gyroX, " ");
        document.getElementById("data").rows["gyroY"].innerHTML = dataRow("Gyro Y", data[index].gyroY, " ");
        document.getElementById("data").rows["gyroZ"].innerHTML = dataRow("Gyro Z", data[index].gyroZ, " ");
        document.getElementById("timeClock").innerHTML = "The time is: " + theTime.getHours() + ":"
            + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds());
        if(index < 500){
            index++;
        } else{
            index = 0;
        }
    }
}
   
  
function checkCreds() {
    console.log("checkCreds() started");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNum = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;

    console.log(" Full Name is " + fullName);

    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Invalid full name !! Please submit a valid full name.";
    } else if (badgeNum > 999 || badgeNum < 0) {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge number ! Please submit a valid Badge number.";
    }
    else {
        alert("Welcome,  " + fullName);
        location.replace("uatSpace.html");
    }
}

function btrBlastOff() {
    console.log("btrBlastOff() started");
    var currTime = 50;
    for (var i = 0; i < 11; i++) {
         setTimeout(function () {
              if (currTime >= 25) {
                   document.getElementById("countDownTimer").innerHTML = currTime;
              } else if (currTime == 0) {
                   document.getElementById("countDownTimer").innerHTML = "Blastoff!!";
              } else {
                   document.getElementById("countDownTimer").innerHTML = "Waring Less Tham 1/2 way to Launch, time left =" + currTime;
              }
              currTime = currTime - 5;
         }, i * 5000);
    }
}

class Rocket{
    // name states first
    constructor(
        fuelType,
        weight,
        power
    ){ // substanite states
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;

    } 
        launch(){
            alert("luanch sequence started");
            return true;
        }
        
        landing(){
            alert("landing started");
            return true;
        }

        burn(fuelUsed){
            alert(" Fuel used" + fuelUsed);
            return true;
        }

}

class Mission{
    constructor(
        objective,
        oxyLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft,
        numOfAstronauts
    ){
        this.objective = objective;
        this.oxyLvl = oxyLvl;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft = spaceCraft;
        this.numOfAstronauts = numOfAstronauts;
    }

    displayMissionParameters(){
        alert("the spacecraft " + this.spaceCraft + " will launch on " + this.launchDateDay + " of " + this.launchDateMonth + " " + this.launchDateYear + " with an 02 Level of " + this.oxyLvl + "%");
    }

    launch(){
        alert("luanch sequence started");
    }
}

function launchFall(){
    fallLaunch.launch();
}

function displayFall(){
    console.log("auhdiuahiudworking")
    fallLaunch.displayMissionParameters();
}

function launchSpring(){
    springLaunch.launch();
}

function displaySpring(){
    springLaunch.displayMissionParameters();
}

function playCraps() {
    console.log("playCraps() function Started");
    var die1 = Math.ceil(Math.random() * 6);// declares frist varible//
    var die2 = Math.ceil(Math.random() * 6);//declares second varrible//
    var sum = die1 + die2; // adds the 2 varibles//
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1;   // adds the die together//
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2;   //adds the die 2 together//
    document.getElementById("sumRes").innerHTML = "Sum = " + sum;   //Gets the sum///
    if (sum == 7 || sum == 11) {    //finds if you lose//
         loss++;
         document.getElementById("lossRes").innerHTML = loss;
         document.getElementById("finalRes").innerHTML = "CRAPS - you lose!!";
    }
    else if (die1 == die2 && die1 % 2 == 0) {   // finds if you lose//
         wins++;
         document.getElementById("winRes").innerHTML = wins;
         document.getElementById("finalRes").innerHTML = "DOUBLES - you win!!";
    }
    else {  //finds if you tie//
         tie++;
         document.getElementById("tieRes").innerHTML = tie;
         document.getElementById("finalRes").innerHTML = "Draw - You neither won nor lost please try again";
    }

}

function start(){
    console.log ("stared function start");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stop(){
    console.log ("stop function stared");
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(lengend, value, units){
    msg = "<td>";
    msg += lengend;
    msg += ": </td><td>";
    msg += value;
    msg += " : </td><td>";
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function playSpace(){
    console.log ("sound started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();

}

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src= srcFile;
    this.play = function(){
         this.sound.play();
    }
    this.stop = function(){
         this.sound.pause();
    }
}

class InputData{
    constructor(
         time_seconds,
         latitude,
         longitude,
         gps_altitude,
         bmpSensor_altitude,
         bmpSensor_pressure,
         bmpSensor_temp,
         digSensor_temp,
         cssSensor_temp,
         cssSensor_eC02,
         cssSensor_TVOC,
         UV,
         accelX,
         accelY,
         accelZ,
         magneticX,
         magneticY,
         magneticZ,
         gyroX,
         gryoY,
         gyroZ,

    ){
         this.time_seconds = time_seconds;
         this.latitude = latitude;
         this.longitude = longitude;
         this.gps_altitude = gps_altitude;
         this.bmpSensor_altitude = bmpSensor_altitude;
         this.bmpSensor_pressure = bmpSensor_pressure;
         this.bmpSensor_temp = bmpSensor_temp;
         this.digSensor_temp = digSensor_temp;
         this.cssSensor_temp = cssSensor_temp;
         this.cssSensor_eC02 = cssSensor_eC02;
         this.cssSensor_TVOC = cssSensor_TVOC;
         this.UV = UV ;
         this.accelX = accelX ;
         this.accelY = accelY;
         this.accelZ = accelZ;
         this.magneticX = magneticX;
         this.magneticY = magneticY;
         this.magneticZ = magneticZ;
         this.gyroX = gyroX;
         this.gryoY = gryoY;
         this.gyroZ = gyroZ;

    }
}