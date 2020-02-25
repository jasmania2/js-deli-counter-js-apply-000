function takeANumber(katzDeliLine,person) {
 katzDeliLine.push(`${person}`);
 
  return "Welcome, "+`${person}`+ ". You are number " + katzDeliLine.length + " in line.";
}



function nowServing(katzDeliLine){
  if (katzDeliLine[0] !== undefined){
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
 var x=0;
 var array =[];
 var list = (x+1) +". " + katzDeliLine[x];
  if (katzDeliLine[x] !== undefined){
    do {
      x++;
      array.push(list);
    } while (x<katzDeliLine.length);
    return "The line is currently: " + array;
  } else {
    return "The line is currently empty.";
  }
}