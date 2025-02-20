let testButton;
let collectButton;
let testLog = [];
let clickNum = 1;
let buttonHeight = 50;
let buttonWidth = 50;
let buttonX = 30;
let buttonY = 60;

function setup() {
  createCanvas(600, 600);
  testButton = createButton("Click me");
  testButton.position(30, 60);
  testButton.mousePressed(logClick);
  testButton.size(buttonWidth, buttonHeight)
  collectButton = createButton("Collect Data");
  collectButton.position(250, 25);
  collectButton.mousePressed(collectData)
}

function logClick () {
  let clickTime = Date.now();
  let timeDiff;
  if (testLog.length === 0) {
    timeDiff = 0;
    console.log("testLog is empty")
  } else {
    timeDiff = clickTime - testLog[testLog.length - 1].clickTime
    console.log("test log is filled")
  }
  
  testLog.push({
    "clickNum": clickNum, 
    "clickTime": Date.now(),
    "timeDiff": timeDiff,
    "buttonHeight": buttonHeight, 
    "buttonWidth": buttonWidth, 
    "buttonX": buttonX, 
    "buttonY": buttonY
  });
  buttonHeight = Math.round(Math.random() * 300);
  buttonWidth = Math.round(Math.random() * 300);
  buttonX = Math.round(Math.random() * 550);
  buttonY = Math.round(Math.random() * 550);
  testButton.size(buttonWidth, buttonHeight);
  testButton.position(buttonX, buttonY);
  console.log(testLog[clickNum - 1]);
  clickNum +=1;
  
}

function collectData () {
  console.log(testLog);
  saveJSON({ logs: testLog }, "interaction_data.json");
}

function draw() {
  background(220);
}