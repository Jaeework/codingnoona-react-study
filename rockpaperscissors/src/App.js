import './App.css';
import Box from './component/Box';

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3, 4 결과를 가지고 승패를 따진다
// 6. 승패 결과에 따라 테두리 색 변경 (이기면-초록, 지면-빨강, 비기면-검정)
const choice = {
  rock:{
    name: "Rock",
    img: "https://m.media-amazon.com/images/I/61W8BVTF10L.jpg"
  },
  scissors:{
    name: "Scissors",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITqzwFnlFJoJFs6tcXoen7rVs04XLnfAZXQ&s"
  },
  paper:{
    name: "Paper",
    img: "https://www.shutterstock.com/image-photo/man-holding-white-sheet-paper-260nw-1432860113.jpg"
  }
};

function App() {
  const play = (userChoice) => {
    console.log("선택됨", userChoice);
  }

  return (
    <div>
      <div className="main">
        <Box title="You" />
        <Box title="Computer" />  
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
