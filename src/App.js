import React from 'react';

// function Fruit(props) {
//   return (
//     <h1>{props.fav} 맛있어요</h1>
//   );
// }

function Fruit({fav}) {
  return (
    <h1>{fav} 맛있어요</h1>
  );
}

function App() {
  return (
    <div>
      <h1>안녕하세요</h1>
      <Fruit fav='바나나' />
      <Fruit fav='딸기' />
      <Fruit fav='망고' />
      <Fruit fav='복숭아' />
    </div>
  );
}

export default App;
