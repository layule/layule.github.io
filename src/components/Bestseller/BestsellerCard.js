import React, { useState } from "react";
import "/src/styles/react/font.scss";
import "/src/styles/react/card.scss";
import { sellerProfile1, sellerProfile2, sellerProfile3, sellerProfile4, sellerUi1, sellerUi2, sellerUi3, sellerUi4 } from "../../images/bestseller";

export const BestSellerCard = () => {
  const isFlippedIndex = ({ index = -1 } = {}) => flippedIndex === index;
  const [flippedIndex, setFlippedIndex] = useState(-1); // 상태를 하나의 index로 변경

  const cardContents = [
    {
      front: (
        <div className="cardHead">
          <p className="cardTitle">영양제가 좋아서 쓴 찐 리뷰가 대박났어요!</p>
          <div className="cardProfile">
            <img src={sellerProfile1} alt="profil img" />
            <p>여행 인플루언서 | 팔로워 14,390명</p>
          </div>
        </div>
      ),
      back: (
        <div className="cardSub">
          <div className="cardSubTitle">
            <span>콜라겐 영양제 | 판매액 12,040,000원</span>
            <p className="comment">제품가 4만원 x 43일 x 하루 7건</p>
            <p className="content">블로그 글쓰기를 좋아해서 쓰고 효과 본 영양제 리뷰를 판매 링크와 함께 올렸더니 문의량 주문이 너무 많이 들어와서 깜짝 놀랐어요!</p>
          </div>
          <img className="uiImg" src={sellerUi1} alt="back seller img" />
        </div>
      ),
    },
    {
      front: (
        <div className="cardHead">
          <p className="cardTitle">아이와 가벼운 한끼로 수익을 벌었어요.</p>
          <div className="cardProfile">
            <img src={sellerProfile2} alt="profil img" />
            <p>육아 인플루언서 | 팔로워 66,505명</p>
          </div>
        </div>
      ),
      back: (
        <div className="cardSub">
          <div className="cardSubTitle">
            <span>콜라겐 영양제 | 판매액 12,040,000원</span>
            <p className="comment">제품가 4만원 x 43일 x 하루 7건</p>
            <p className="content">블로그 글쓰기를 좋아해서 쓰고 효과 본 영양제 리뷰를 판매 링크와 함께 올렸더니 문의량 주문이 너무 많이 들어와서 깜짝 놀랐어요!</p>
          </div>
          <img className="uiImg" src={sellerUi2} alt="back seller img" />
        </div>
      ),
    },
    {
      front: (
        <div className="cardHead">
          <p className="cardTitle">정말 효과 본 뷰티템을 리뷰했어요.</p>
          <div className="cardProfile">
            <img src={sellerProfile3} alt="profil img" />
            <p>뷰티 인플루언서 | 팔로워 40,298명</p>
          </div>
        </div>
      ),
      back: (
        <div className="cardSub">
          <div className="cardSubTitle">
            <span>콜라겐 영양제 | 판매액 12,040,000원</span>
            <p className="comment">제품가 4만원 x 43일 x 하루 7건</p>
            <p className="content">블로그 글쓰기를 좋아해서 쓰고 효과 본 영양제 리뷰를 판매 링크와 함께 올렸더니 문의량 주문이 너무 많이 들어와서 깜짝 놀랐어요!</p>
          </div>
          <img className="uiImg" src={sellerUi3} alt="back seller img" />
        </div>
      ),
    },
    {
      front: (
        <div className="cardHead">
          <p className="cardTitle">건강한 간식을 인친에게 소개했어요!</p>
          <div className="cardProfile">
            <img src={sellerProfile4} alt="profil img" />
            <p>푸드 인플루언서 | 팔로우 11,149명</p>
          </div>
        </div>
      ),
      back: (
        <div className="cardSub">
          <div className="cardSubTitle">
            <span>콜라겐 영양제 | 판매액 12,040,000원</span>
            <p className="comment">제품가 4만원 x 43일 x 하루 7건</p>
            <p className="content">블로그 글쓰기를 좋아해서 쓰고 효과 본 영양제 리뷰를 판매 링크와 함께 올렸더니 문의량 주문이 너무 많이 들어와서 깜짝 놀랐어요!</p>
          </div>
          <img className="uiImg" src={sellerUi4} alt="back seller img" />
        </div>
      ),
    },
  ];

  const handleToggle = index => {
    setFlippedIndex(prevState => (prevState === index ? -1 : index));
  };

  return (
    <div className="cards">
      {cardContents.map((content, index) => (
        <div key={index} className={`card ${isFlippedIndex({ index }) ? "flipped" : ""}`} onClick={() => handleToggle(index)}>
          <div className={isFlippedIndex({ index }) ? "back" : "front"}>{isFlippedIndex({ index }) ? content.back : content.front}</div>x
        </div>
      ))}
    </div>
  );
};
