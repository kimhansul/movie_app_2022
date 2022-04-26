import React from "react";
import "./About.css"

function About(props){
    console.log(props);
    return (
        <div className="about__container">
            <span>
            처음으로 리액트 수업을 하며 구현한 페이지 입니다. 여러 컴포넌트와 props, map() 함수 등을 사용해보며 리액트 기본을 배웠으며 API를 사용하여 데이터를 받아와 state에 저장하여 화면에 출력시켜 보았으며 이후 CSS로 정리하여 완성하였습니다.
            </span>
            <span><span className="about__name">김한슬</span> 2022. 04. 26</span>
        </div>
    )
}

export default About;