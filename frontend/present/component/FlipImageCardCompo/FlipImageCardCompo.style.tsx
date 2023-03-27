import styled, { css } from "styled-components";
import ThumbSvg from "@/assets/icon/Thumb.svg";
import { theme } from "@/action/theme";

const color = {
  back: "#9494E0",
  thumb: "#4340B5",
};

export const Container = styled.div`
  display: inline-block;
`;

export const CardWrapper = styled.div<{
  width: number;
  height: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  min-height: 180px;
  min-width: 200px;

  .card {
    .back {
      transform: rotateY(180deg);
    }
  }
  &:hover {
    .card {
      transform: rotateY(180deg);
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  min-height: inherit;

  position: relative;
  cursor: pointer;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  transform-style: preserve-3d;
  border-radius: 10px;
`;

export const CardStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;

  backface-visibility: hidden;
  transform: rotateX(0deg);

  &:hover {
    .card {
      transform: rotateY(180deg);
    }
  }
`;

export const Front = styled.div`
  ${CardStyle}
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;

export const Back = styled.div`
  ${CardStyle}
  box-shadow: 0 0 0 5px ${color.back} inset;
  box-sizing: border-box;
  background-color: ${theme.colors.mono.light_1};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 15% 10%;
  position: relative;
`;

export const FlexItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .foodName {
    font-size: 1.3rem;
    font-weight: 500;
  }
  .flavorValue {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .contentName {
    font-size: 1rem;
    font-weight: 700;
  }

  .contentValue {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const FlavorBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const LikeHateBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-self: start;
  padding: 5px;
  gap: 10px;
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
`;

export const FavorButtonStyle = css`
  width: 1.8rem;
  height: 1.8rem;
  path {
    fill: ${color.thumb};
  }
`;

export const LikeButton = styled(ThumbSvg)`
  ${FavorButtonStyle}
`;

export const HateButton = styled(ThumbSvg)`
  ${FavorButtonStyle}
  transform: scaleX(-1) scaleY(-1);
`;
