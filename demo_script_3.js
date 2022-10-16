var chessBoard= '',
    size= 8,
    c;

for(var i = 0 ; i < size ; i++) {
  c= i%2 ? '# ' : ' #';
  for(var j = 0 ; j < size/2 ; j++) {
    chessBoard+= c;
  }
  chessBoard+= '\n';
}

console.log(chessBoard);
