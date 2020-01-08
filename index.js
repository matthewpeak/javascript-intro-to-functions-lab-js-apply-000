function shout(str) {
  return str.toUpperCase()
}

function whisper(str){
  return str.toLowerCase()
}

function logWhisper(str){
  return console.log(whisper(str))
}

function sayHiToGrandma(str){
  if(str == shout(str)){
    return 
  }
}