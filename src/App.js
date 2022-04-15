import React from 'react';

class App extends React.Component{
  state={
    isLoding: true,
    movies:[]
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoding: false
      })
    },5000)
  }

  render(){
    const {isLoding}=this.state;
    return(
      <div>
        {isLoding ? '로딩중...' : '로딩완료'}
      </div>
    );
  }
}

export default App;