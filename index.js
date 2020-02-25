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
  for (let x=0;x<katzDeliLine.length;x++){
    let array=[];
 
    var list = (x+1) +". " + katzDeliLine[x];
    array.push(list);
     if (katzDeliLine[0] !== undefined){
    return "The line is currently: " + array;
  } else {
    return "The line is currently empty.";
  }
 }
}