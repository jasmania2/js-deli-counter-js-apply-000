function takeANumber(katzDeliLine,person){

 for (var x= 0;x<katzDeliLine.length; x++){
   katzDeliLine.push(person[x]);
 }
  return "Welcome, " + person[x] + ". You are number " + (x+1) + " in line.";
}



function nowServing(katzDeliLine){
  if (katzDeliLine[0] !== undefined){
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  
}