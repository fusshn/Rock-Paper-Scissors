// 全域變數
const choices = document.querySelectorAll('.choice');
const result = document.querySelector('.result');
const resetBtn = document.querySelector('.reset-btn');


// 玩家和電腦的選擇
let playerChoice = '';
let computerChoice = '';

// 電腦隨機選擇
function getComputerChoice() {
  const options = ['剪刀', '石頭', '布'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// 決定勝負邏輯
function determineWinner(player, computer) {
  if (player === computer) {
    return '平手！';
  } else if (
    (player === '剪刀' && computer === '布') ||
    (player === '石頭' && computer === '剪刀') ||
    (player === '布' && computer === '石頭')
  ) {
    return '你贏了！';
  } else {
    return '你輸了！';
  }
}

// 玩家選擇事件監聽
choices.forEach(choice => {
  choice.addEventListener('click', () => {
    playerChoice = choice.getAttribute('data-choice');
    computerChoice = getComputerChoice();

    const resultText = `
      你選了: ${playerChoice} <br>
      電腦選了: ${computerChoice} <br>
      結果: ${determineWinner(playerChoice, computerChoice)}
    `;
    result.innerHTML = resultText;
  });
});

// 重置遊戲
resetBtn.addEventListener('click', () => {
  result.textContent = '選擇招式';
  playerChoice = '';
  computerChoice = '';
});