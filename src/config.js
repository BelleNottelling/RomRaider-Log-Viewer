/*
------Lambda <--> AFR Conversion Settings------
  LambdaConvertTo can be "AFR", "LAMBDA", or "OFF" (to disable)
  LambdaConvertVal can be LambdaAFR.Gas, LambdaAFR.E85, LambdaAFR.E100, LambdaAFR.Methanol, or LambdaAFR.Diesel
*/
let LambdaConvertTo = "AFR",
    LambdaConvertVal = LambdaAFR.Gas;
/*
------Zoom Settings------
  "Zoom" into a specific time range (the specific number is in min)
*/
let StartMin = 0,
    EndMin = 0;
