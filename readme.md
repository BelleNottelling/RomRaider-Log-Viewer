# RomRaider Log Assist
RomRaider Log Assist is a simple webpage that's just supposed to make it easier to analyze your RomRaider logs for ECU tuning. Currently still early in development: code likely has quality issues and some expected features may not be here.
![A sample graph](https://experiments.bennottelling.com/RR/pics/demo.gif)

## Features
**Implemented:**

 - Importing CVS files
 - Automatic graph scaling
 - Separate graph for AFR recordings
 - Right hand y-axis for RPM
 - Show/hide log data
 - Lambda <--> AFR  conversion
   -  Gas, E85, E100, Methanol, or Diesel

**Unimplemented**

 - Log analysis and tune suggestions
 - Zoom
 - Performance improvements

### Tech Credits

 - Graphs handled by [Chart.js](https://www.chartjs.org/)
 - CVS File interpretation handled by [PapaParse](https://github.com/mholt/PapaParse)
