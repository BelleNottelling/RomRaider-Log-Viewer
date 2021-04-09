var timelabels = []; //Gets filled in with the elapsed time
var sensorcnt = 0;
var TheBaseGraph = null;
var TheAFRGraph = null;

/* 
    These are sensors that we want to keep separate / manage in a specific way.
*/
var rpm = {
  HeaderIndex : -1,
  Values : []
};
var afr1 = {
  SensorName : "",
  HeaderIndex : -1,
  Values :[]
}
var afr2 = {
  SensorName : "",
  HeaderIndex : -1,
  Values :[]
}
var afrTarget = {
  HeaderIndex : -1,
  Values :[]
}
var afrCorrection = {
  SensorName : "",
  HeaderIndex : -1,
  Values :[]
}
var afrLearning = {
  SensorName : "",
  HeaderIndex : -1,
  Values :[]
}

/*
    All the other sensors. This seems like a fucking terrible way to do this, but idk another way.
*/
var GenericSensors = {
  _1: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _2: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _3: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _4: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _5: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _6: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _7: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _8: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _9: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _10: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _11: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _12: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _13: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _14: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _15: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _16: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _17: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _18: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _19: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  },
  _20: {
    HeaderIndex : -1,
    SensorName : "",
    Values :[]
  }
}
