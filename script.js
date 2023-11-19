document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell');
    const scoreElement = document.getElementById('score');
    const winsElement = document.getElementById('wins');
    const lossesElement = document.getElementById('losses');
    let currentPlayer = 'X';
    let score = 0;
    let wins = 0;
    let losses = 0;
  
    cells.forEach(cell => {
      cell.addEventListener('click', () => handleCellClick(cell));
    });
  
    function handleCellClick(cell) {
      if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        if (checkWin()) {
          handleWin();
        } else if (isBoardFull()) {
          handleDraw();
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    }
  
    function checkWin() {
      // Logique de vérification de victoire ici
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      for (let line of lines) {
        if (
          cells[line[0]].textContent === currentPlayer &&
          cells[line[1]].textContent === currentPlayer &&
          cells[line[2]].textContent === currentPlayer
        ) {
          return true;
        }
      }
  
      return false;
    }
  
    function handleWin() {
      score++;
      wins++;
      updateScore();
      resetBoard();
    }
  
    function handleDraw() {
      alert('Match nul !');
      resetBoard();
    }
  
    function updateScore() {
      scoreElement.textContent = `Score: ${score}`;
      winsElement.textContent = `Gagné: ${wins}`;
      lossesElement.textContent = `Perdu: ${losses}`;
    }
  
    function resetBoard() {
      cells.forEach(cell => {
        cell.textContent = '';
      });
      currentPlayer = 'X';
    }
  
    function isBoardFull() {
      return Array.from(cells).every(cell => cell.textContent !== '');
    }
  });
  