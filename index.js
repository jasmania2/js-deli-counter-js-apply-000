function takeANumber(katzDeliLine,person) {
 katzDeliLine.push(`${person}`);
 
  return "Welcome, "+`${person}`+ ". You are number " + katzDeliLine.length + " in line.";
}



function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  for (let x=0;x<katzDeliLine.length;x++){
    var array=[];
    
    array.push((x+1) +". " + katzDeliLine[x]);
  }
  return "The current line is: " + array;
}