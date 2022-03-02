function perc2color(perc,min,max) {
            var base = (max - min);

            if (base == 0) { perc = 100; }
            else {
                perc = (perc - min) / base * 100; 
            }
            var r, g, b = 0;
            if (perc < 50) {
                r = 255;
                g = Math.round(5.1 * perc);
            }
            else {
                g = 255;
                r = Math.round(510 - 5.10 * perc);
            }
            var h = r * 0x10000 + g * 0x100 + b * 0x1;
            return '#' + ('000000' + h.toString(16)).slice(-6);

}

function ColorByFrequency(test, LogLength) {
            if (!test){
              test = 10;
            }
            if (!LogLength){
              LogLength = 10 * 60000;
            }
            var r = 225;
            var g = 225;
            var b = 225;
            
            var LogMinLength = LogLength/60000;
            
            test = (Math.log(test))/LogMinLength;
            
            g = Math.round(g/test);
            b = Math.round(b/test);
            
            var h = r * 0x10000 + g * 0x100 + b * 0x1;
            return '#' + ('000000' + h.toString(16)).slice(-6);

}

var DrawTable = function(){
//Prompt for table
var table = window.prompt("Please paste the 3D table from RomRaider: ");

//Turn table into a new array item array at each new line
var tablearray = table.split("\r\n");

//Label the table type, drop it from the array since we no longer need it
document.getElementById("TableType").innerHTML = "Table Type: " + tablearray[0];
var TableType = tablearray[0];
tablearray.shift();

var header = tablearray[0].split("	");

//if it's a 3D table, we need an extra blank item in the array so it formats correctly
if (TableType === "[Table3D]"){
header.unshift("");
tablearray[0] = header.join("	");
}

var DataSet = null;

/*
 Build an array of all data points. Ignore first column & row.
 Used for the min/max and color generation.
*/
for (var i = 1; i < tablearray.length; i++) {
  var data = tablearray[i].split("	")
  data.shift();
  if (DataSet === null){
    DataSet = data;
  } else {
    DataSet = DataSet.concat(data);
  }
}

var tableCreate = function() {
  const body = document.body,
  tbl = document.createElement('table');
  tbl.style.width = '100px';
  tbl.style.border = '1px solid black';

  for (let i = 0; i < tablearray.length; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < header.length; j++) {
        const td = tr.insertCell();
        var data = tablearray[i].split("	")
        td.appendChild(document.createTextNode(data[j]));
        td.style.border = '1px solid black';
        
        
        if(i > 0 && j > 0){
        var Min = Math.min(...DataSet);
        var Max = Math.max(...DataSet);
        //var color = perc2color(data[j], Min, Max);
        var color = ColorByFrequency(Math.floor(Math.random() * 1000));
        td.style.backgroundColor = color;
        }
    }
  }
  body.appendChild(tbl);
}

  var x = document.getElementById("Graph");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

tableCreate();
}