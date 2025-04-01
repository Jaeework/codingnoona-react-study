import { useState } from 'react';
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
    img: "https://plus.unsplash.com/premium_photo-1700929226201-48c19ed1dcee?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
};

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키 값만 뽑아서 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);

    return choice[itemArray[randomItem]];
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect}/>
        <Box title="Computer" item={computerSelect} />  
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
