"use strict";

let sensorcnt = 0,
    TheAFRGraph,
    TheBaseGraph,
    timelabels = [];

/*
    These are sensors that we want to keep separate / manage in a specific way.
*/
const afrCorrection = {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  afrLearning = {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  afrTarget = {
    HeaderIndex: -1,
    Values: []
  },
  afr1 = {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  afr2 = {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  rpm = {
    HeaderIndex: -1,
    Values: []
  };

/*
    All the other sensors. This seems like a fucking terrible way to do this, but idk another way.
*/
const GenericSensors = {
  _1: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _2: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _3: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _4: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _5: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _6: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _7: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _8: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _9: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _10: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _11: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _12: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _13: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _14: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _15: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _16: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _17: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _18: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _19: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _20: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _21: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _22: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _23: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _24: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  },
  _25: {
    HeaderIndex: -1,
    SensorName: "",
    Values: []
  }
};
