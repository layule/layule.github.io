import React, { useState } from "react";
import "/src/styles/react/font.scss";
import "../../styles/react/accordion.scss";

export const BestSellerAccodion = () => {
  const faq = [
    {
      title: "진행 프로세스가 궁금합니다.",
      content:
        "[조건 협의] -> [입점 계약] -> [상품 등록] -> [셀러 신청] -> [공구 진행] -> [정산] 진행 상품, 판매가, 공급가, 수량 등 조건 협의를 합니다. 양사 간 협의 후 계약서 이견 없으시면 전자 계약서를 발송 드립니다. 계약알로부터 약 7일 이내 사이트에 등록 후 셀러 신청을 받습니다. 공구를 희망하는 샐러와 공구 일정을 잡고 해당일에 판매를 진행합니다.",
    },
    {
      title: "셀러를 선택할 수 있나요?",
      content: "브랜드의 니즈 및 상황에 맞춘 다양한 서비스 모델을 제공하고 있습니다. 서비스에 따라 추가 비용이 발생할 수 있습니다.",
    },
    {
      title: "몇 명의 셀러가 진행하나요?",
      content: "소비자 누구나 판매할 수 있도록 돕는 플랫폼이기 때문에 진행하는 셀러의 제한을 두지 않습니다. 원하시는 조건이 있으실 경우 사전에 말씀해주시면 협의가 가능합니다.",
    },
    {
      title: "정산일은 어떻게 진행되나요?",
      content:
        "수수료는 운영비가 포함된 금액이며, 수수료는 동일하게 진행하여 수수료가 높을수록 셀러들에게 지급되는 수수료가 높아지기 떄문에 참여율이 높아진다는 점 참고 부탁드립니다.",
    },
    {
      title: "공구가는 어떻게 정해지나요?",
      content:
        "본 사이트는 폐쇄율이라 온라인 검색 시 노출되지 않습니다. 특정 기간 동안 저렴한 가격으로 판매하는 공구 특성상 온라인 검색 시 노출되는 최저가 보다 저렴한 금약을 진행하고 있습니다.",
    },
    {
      title: "몰에 등록되면 바로 셀러가 판매하는 건가요?",
      content: "판매를 희망하는 셀러가 있으면 바로 가능하며, 기간이 더 소요될 수도 있습니다. 상품에 따라 상이한 점 참고 부탁드립니다.",
    },
    {
      title: "배송은 어떻게 하나요?",
      content: "주문서를 취함하여 업체 발주 마감 시간 전 발주 메일로 전달 드리고 있습니다. 업체에서 출고 후 송장 번호 회신 주시면 송장을 등록하고 있습니다.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = idx => {
    setActiveIndex(prevIndex => (prevIndex === idx ? null : idx));
  };

  return (
    <ul className="accordion-index">
      {faq.map((item, idx) => {
        const isActive = idx === activeIndex;
        const classNames = isActive ? "accordion-item active" : "accordion-item";

        return (
          <li key={idx} className={classNames}>
            <div className="accordion-title" onClick={() => handleItemClick(idx)}>
              <span>Q</span>
              <h3>{item.title}</h3>
            </div>
            {isActive && (
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};
