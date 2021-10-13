/*
------Lambda <--> AFR Conversion Settings------
  LambdaConvertTo can be "AFR", "LAMBDA", or "OFF" (to disable)
  LambdaConvertVal can be LambdaAFR.Gas, LambdaAFR.E85, LambdaAFR.E100, LambdaAFR.Methanol, or LambdaAFR.Diesel
*/
let LambdaConvertTo = "AFR",
    LambdaConvertVal = LambdaAFR.Gas;
/*
------Log Splitting Settings------
  These exist to help with graph performance by limiting the number of data points on screen at once. (logs can easily have 100s of thousands at once depending on the size)
  SliceCount is the number of "slices" to create out of the log.
  ViewSlice is what slice you want to currently view.
*/
let SliceCount = 1,
    ViewSlice = 1;
