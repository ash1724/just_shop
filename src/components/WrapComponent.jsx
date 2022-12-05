import React from 'react';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';
import ModalComponent from './ModalComponent';

function WrapComponent () {

  // 모달 상태관리
  const [show, setshow] = React.useState(false);

  const modalOpen=()=>{
    setshow(true);
  }

  // 모달닫기 함수
  const modalClose=()=>{
    setshow(false);
  }

  return (
    <div id='wrap'>
      <HeaderComponent/>
      <MainComponent modalOpen={modalOpen}/>
      <FooterComponent/>
      {
        show && <ModalComponent modalClose={modalClose}/>
      }
    </div>
  );
};

export default WrapComponent;