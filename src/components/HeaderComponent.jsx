import React from 'react';

// 테스트

function HeaderComponent (props) {
  const {homePath,logoTitle,imgSrc,imgAlt,subMenu1,subMenu2,subMenu3,subMenu4} = props;

  const [addClass, setAddClass] = React.useState({
    addClass1: false,
    addClass2: false,
    addClass3: false,
    addClass4: false
  });

  // addClass 상태관리 객체의 속성을 비구조화
  const {addClass1,addClass2,addClass3,addClass4} = addClass;

  const onMouseEnter1=()=>{
    setAddClass({
      addClass1: true,
      addClass2: false,
      addClass3: false,
      addClass4: false
    })
  }
  const onMouseEnter2=()=>{
    setAddClass({
      addClass1: false,
      addClass2: true,
      addClass3: false,
      addClass4: false
    })
  }
  const onMouseEnter3=()=>{
    setAddClass({
      addClass1: false,
      addClass2: false,
      addClass3: true,
      addClass4: false
    })
  }
  const onMouseEnter4=()=>{
    setAddClass({
      addClass1: false,
      addClass2: false,
      addClass3: false,
      addClass4: true
    })
  }

  // nav를 떠나면 이벤트
  const onMouseLeaveAddClass=()=>{
    setAddClass({
      addClass1: false,
      addClass2: false,
      addClass3: false,
      addClass4: false
    })
  }

  return (
    <header id="header">
      <div className="left">
        {/* <h1><a href={props.homePath} title={props.logoTitle}><img src={props.imgSrc} alt={props.imgAlt} /></a></h1> */}
        <h1><a href={homePath} title={logoTitle}><img src={imgSrc} alt={imgAlt} /></a></h1>
      </div>
      <div className="right">
        <nav id="nav" onMouseLeave={onMouseLeaveAddClass}>
          <ul>
            <li>
            {/* 메뉴1 */}
              <a
              onMouseEnter={onMouseEnter1}
              // className={addClass1 ? 'main-btn on' : 'main-btn'}
              className={`main-btn ${ addClass1 && 'on' }`}
              href="!#"
              title="탑"
              >탑</a>

              <div className={`sub sub1 ${ addClass1 && 'on' } `}>
                <ul>
                  {
                    // 중괄호 안에 자바스크립트 코딩
                    subMenu1.map((item, idx)=>{
                      return(
                        <li key={idx}><a href="!#" title={item}>{item}</a></li>
                      )
                    })
                  }
                </ul>
              </div>
            </li>
            <li>
              {/* 메뉴2 */}
              <a
              onMouseEnter={onMouseEnter2}
              className={`main-btn ${ addClass2 && 'on'}`}
              // onClick={onClickAddClass2}
              href="!#"
              // className="main-btn"
              title="아우터">아우터</a>
              <div className={`sub sub2 ${addClass2 && 'on'}`}>
                <ul>
                  {
                    subMenu2.map((item, idx)=>{
                      return(
                        <li key={idx}><a href="!#" title={item}>{item}</a></li>
                      )
                    })
                  }
                </ul>
              </div>
            </li>
            <li>
              {/* 메뉴3 */}
              <a
              onMouseEnter={onMouseEnter3}
              className={`main-btn ${ addClass3 && 'on' }`}
              // className={addClass3 ? 'main-btn on' : 'main-btn'}
              href="!#"
              // className="main-btn"
              title="팬츠">팬츠</a>
              <div className={`sub sub3 ${addClass3 && 'on'}`}>
              {/* <div className={addClass3 ? 'sub sub3 on' : 'sub sub3'}> */}
                <ul>
                  {
                    subMenu3.map((item, idx)=>{
                      return (
                        <li key={idx}><a href="!#" title={item}>{item}</a></li>
                      )
                    })
                  }
                </ul>
              </div>
            </li>
            <li>
              {/* 메뉴4 */}
              <a
              onMouseEnter={onMouseEnter4}
              className={`main-btn ${addClass4 && 'on'}`}
              // className={addClass4 ? 'main-btn on' : 'main-btn'}
              href="!#"
              // className="main-btn"
              title="악세서리">악세서리</a>
              <div className={`sub sub4 ${addClass4 && 'on'}`}>
              {/* <div className={addClass4 ? 'sub sub4 on' : 'sub sub4'}> */}
                <ul>
                  {
                    subMenu4.map((item,idx)=>{
                      return(
                        <li key={idx}><a href="!#" title={item}>{item}</a></li>
                      )
                    })
                  }
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

// 헤더컴포넌트 안에서 사용 하는 모든 변수
// 기본(Default) 프롭스(props) 설정
HeaderComponent.defaultProps = {
  logoTitle:'JUST쇼핑몰',
  homePath: './index.html',
  imgSrc: './images/logo.png',
  imgAlt: 'Logo Image',
  subMenu1: ['블라우스','티','셔츠','니트'],
  subMenu2: ['자켓','코트','가디건','머플러'],
  subMenu3: ['청바지','짧은바지','긴바지','레깅스'],
  subMenu4: ['귀고리','목걸이','반지','팔찌']
}

export default HeaderComponent;