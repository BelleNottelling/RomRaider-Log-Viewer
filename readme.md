[![DeepScan grade](https://deepscan.io/api/teams/1405/projects/16641/branches/361084/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1405&pid=16641&bid=361084)

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
   - Rudimentary zooming based on minute range has been implemented
 - Performance improvements
   - You can zoom into a specific time span to improve performance.

### Tech Credits

 - Graphs handled by [Chart.js](https://www.chartjs.org/)
 - CVS File interpretation handled by [PapaParse](https://github.com/mholt/PapaParse)
