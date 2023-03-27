import Button from "@/present/common/Button/Button";
import { BottomLayoutProps } from "@/types/Taste/dummy";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as style from "./AnalysisLayout.style";

export default function BottomLayout({
  canGoMain,
  evaluatedCount,
}: BottomLayoutProps) {
  //명언 바꾸기
  useEffect(() => {}, [evaluatedCount]);
  const router = useRouter();

  const onClickStop = () => {
    router.push("/main");
  };

  return (
    <>
      {canGoMain ? (
        <>
          <Button context="맛 평가 종료하기" handler={onClickStop} />
        </>
      ) : (
        <style.BottomContainer>
          "Birth와 Death 사이에 Choose가 있다는 것을 기억하세요.
          <br />
          하지만 음식을 고르는 것은 때로 용감함을 필요로 합니다."
          <br />
          -CharGPT-
        </style.BottomContainer>
      )}
    </>
  );
}
