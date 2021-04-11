"use strict";

/*
  This function reads log's "header" (first row) to map each sensor and column
  Does use the evil eval function, unsure about the security in this use case
*/
function MapToHeader (item, index) {
  const itemLower = item.toLowerCase();

  // Here we look for specific sensors

  if (itemLower.includes("engine speed (rpm)")) {
    rpm.HeaderIndex = index;
  } else if (itemLower.includes("a/f sensor #1 (lambda)") || itemLower.includes("a/f sensor #1 (afr)")) {
    afr1.HeaderIndex = index;
    afr1.SensorName = item;
  } else if (itemLower.includes("a/f sensor #2 (lambda)") || itemLower.includes("a/f sensor #2 (afr)")) {
    afr2.HeaderIndex = index;
    afr2.SensorName = item;
  } else if (itemLower.includes("final fueling base")) {
    afrTarget.HeaderIndex = index;
  } else if (itemLower.includes("a/f correction")) {
    afrCorrection.HeaderIndex = index;
    afrCorrection.SensorName = item;
  } else if (itemLower.includes("a/f learning")) {
    afrLearning.HeaderIndex = index;
    afrLearning.SensorName = item;
  } else if (index > 0) {
    // Just say "fuck it" and hope counting works well.
    sensorcnt++;
    const sensname = "'" + item + "'";

    // I did the evil thing
    eval("GenericSensors._" + sensorcnt + ".SensorName = " + sensname);
  }
}

/*
  This function is called on each column in each row, it uses the mapped data from "MapToHeader" to log each data point to the correct sensor.
  We also do the math here for the LAMBDA <--> AFR Conversion here
  Does use the evil eval function, unsure about the security in this use case
*/
function LogSensors (item, index) {
  if (LambdaConvertTo === "AFR") {
    switch (index) {
    case afr1.HeaderIndex:
      if (item <= 1.5) afr1.Values.push(item * LambdaConvertVal);
      if (item > 1.5) afr1.Values.push(item);
      break;
    case afr2.HeaderIndex:
      if (item <= 1.5) afr2.Values.push(item * LambdaConvertVal);
      if (item > 1.5) afr2.Values.push(item);
      break;
    case afrTarget.HeaderIndex:
      if (item <= 1.5) afrTarget.Values.push(item * LambdaConvertVal);
      if (item > 1.5) afrTarget.Values.push(item);
      break;
    }
  } else if (LambdaConvertTo === "LAMBDA") {
    switch (index) {
    case afr1.HeaderIndex:
      if (item >= 1.5) afr1.Values.push(item / LambdaConvertVal);
      if (item < 1.5) afr1.Values.push(item);
      break;
    case afr2.HeaderIndex:
      if (item >= 1.5) afr2.Values.push(item / LambdaConvertVal);
      if (item < 1.5) afr2.Values.push(item);
      break;
    case afrTarget.HeaderIndex:
      if (item >= 1.5) afrTarget.Values.push(item / LambdaConvertVal);
      if (item < 1.5) afrTarget.Values.push(item);
      break;
    }
  } else {
    switch (index) {
    case afr1.HeaderIndex:
      afr1.Values.push(item);
      break;
    case afr2.HeaderIndex:
      afr2.Values.push(item);
      break;
    case afrTarget.HeaderIndex:
      afrTarget.Values.push(item);
      break;
    }
  }
  switch (index) {
  case afr1.HeaderIndex:
  case afr2.HeaderIndex:
  case afrTarget.HeaderIndex:
    break;
  case afrCorrection.HeaderIndex:
    afrCorrection.Values.push(item);
    break;
  case afrLearning.HeaderIndex:
    afrLearning.Values.push(item);
    break;
  case rpm.HeaderIndex:
    rpm.Values.push(item);
  break;
  default:
    if (index > 0) {
      sensorcnt++;
      const sensname = "'" + item + "'";

      // More evil thing. This one may actually be bad
      eval("GenericSensors._" + sensorcnt + ".Values.push(" + sensname + ")");
    }
  }
}

/*
  Simply resets both graphs and clears the data so we can populate it with new info
*/
function ResetGraphs () {
  TheBaseGraph.destroy();
  TheAFRGraph.destroy();

  timelabels = [];
  sensorcnt = 0;

  rpm.HeaderIndex = -1;
  rpm.Values = [];

  afr1.SensorName = "";
  afr1.HeaderIndex = -1;
  afr1.Values = [];

  afr2.SensorName = "";
  afr2.HeaderIndex = -1;
  afr2.Values = [];

  afrTarget.HeaderIndex = -1;
  afrTarget.Values = [];

  afrCorrection.SensorName = "";
  afrCorrection.HeaderIndex = -1;
  afrCorrection.Values = [];

  afrLearning.SensorName = "";
  afrLearning.HeaderIndex = -1;
  afrLearning.Values = [];

  Object.keys(GenericSensors).forEach(function (key) {
    GenericSensors[key].HeaderIndex = -1;
    GenericSensors[key].SensorName = "";
    GenericSensors[key].Values = [];
  });
}
