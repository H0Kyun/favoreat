import { useEffect, useState } from "react";
import Image from "next/image";
import { FlavorStaticData } from "@/types/MyPage/dummy";

import * as style from "./MyPage.style";

import SpicyLeft from "@/assets/icon/taste/rating/SpicyLeft.svg";
import SpicyRight from "@/assets/icon/taste/rating/SpicyRight.svg";
import SweetLeft from "@/assets/icon/taste/rating/SweetLeft.svg";
import SweetRight from "@/assets/icon/taste/rating/SweetRight.svg";
import SaltyLeft from "@/assets/icon/taste/rating/SaltyLeft.svg";
import SaltyRight from "@/assets/icon/taste/rating/SaltyRight.svg";
import OilyLeft from "@/assets/icon/taste/rating/OilyLeft.svg";
import OilyRight from "@/assets/icon/taste/rating/OilyRight.svg";

export default function MyPageFlavorData(item: FlavorStaticData) {
  console.log(item);

  const ratingImg = {
    spicy: {
      left: <SpicyLeft />,
      right: <SpicyRight />,
    },
    sweet: {
      left: <SweetLeft />,
      right: <SweetRight />,
    },
    salty: {
      left: <SaltyLeft />,
      right: <SaltyRight />,
    },
    oily: {
      left: <OilyLeft />,
      right: <OilyRight />,
    },
  };

  const [ratingList, setRatingList] = useState(() => {
    const initialValue = Math.round(item.value);
    return Array(5)
      .fill({ left: false, right: false })
      .map((_, index) => ({
        left: index < initialValue,
        right: index < initialValue,
      }));
  });

  const [isHover, setIsHover] = useState(false);

  return (
    <>
      {isHover && (
        <style.HoverImageWrapper>
          <Image src={item.pcHover} alt="item.type" />
        </style.HoverImageWrapper>
      )}

      <style.FlavorDataContainer>
        {/* 맛 표현, 캐릭터, HoverIcon */}
        <div></div>
        <style.FlavorDataImageContainer
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div>{item.title}</div>
          <Image src={item.img} alt="item.type" />
          <style.HoverIconWrapper>
            <style.HoverIconText>?</style.HoverIconText>
          </style.HoverIconWrapper>
        </style.FlavorDataImageContainer>

        {/* 평균 맛 정보, 평균 맛 정보 시각화*/}
        <style.FlavorDataValueContainer>
          {/* 평균 맛 정보 */}
          <div>
            나의 평균 {item.subtitle}는 {item.value} 입니다.
          </div>
          {/* 평균 맛 정보 시각화 */}
          <style.Container>
            {ratingList.map((shape, index) => {
              return (
                <span key={index}>
                  <style.Rating characterType={item.type} active={shape.left}>
                    {ratingImg[item.type].left}
                  </style.Rating>
                  <style.Rating characterType={item.type} active={shape.right}>
                    {ratingImg[item.type].right}
                  </style.Rating>
                </span>
              );
            })}
          </style.Container>
        </style.FlavorDataValueContainer>
      </style.FlavorDataContainer>
    </>
  );
}
