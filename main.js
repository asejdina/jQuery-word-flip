(function(){
  $(document).ready(initialize);

  var i = 0;
  var wordsToFlip

  function initialize(){
    wordsToFlip = $('.wordFlip');
    setInterval(wordFlip, 2000); //1000 will  run it every 1 second
  }

  function wordFlip(){
    $('#wordFlipDiv').empty();
    $('#wordFlipDiv').append(wordsToFlip[i]);

    if(i >= wordsToFlip.length - 1){
      i = 0;
    } else {
      i++
    }
  }

})();
