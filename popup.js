var chess = new Chess();

$('document').ready(function(){
  $('#status').empty();
  chrome.tabs.executeScript(null, { file: "inject.js" }, function(res) {
    res[0].forEach(function(m) {
      chess.move(m);
    });
    var fen = chess.fen();
    $('#status').append(fen + '\n\n');
    $('#status').append(chess.ascii());
    chrome.runtime.sendMessage({ message: 'get_move', fen });
  });
});

chrome.runtime.onMessage.addListener(
  (request, sender, senderResponse) => {
    switch (request.message) {
      case 'got_move': {
        $('#strength').empty().append(request.move);
        break;
      }
      default:
    }
  }
);

$(function() {
  $('#calculate').click(function() {
    $('#strength').empty().append('+1');
  });
});
