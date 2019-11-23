const getMove = (fen) => {
  $.post('http://localhost:8080', { "fen": fen }, function(res) {
    chrome.runtime.sendMessage({ message: 'got_move', move: res })
  });
}

chrome.runtime.onMessage.addListener(
  (request, sender, senderResponse) => {
    switch (request.message) {
      case 'get_move': {
        getMove(request.fen);
        break;
      }
      default:
    }
  }
);