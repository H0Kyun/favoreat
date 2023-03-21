import styled, { css } from "styled-components";

const color = {
  back: "#9494E0",
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
  width: inherit;
  height: inherit;

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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const FoodFlexBox = styled.div`
  margin: 10px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 10px;
`;

export const FlexItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FoodName = styled.span`
  font-size: 28px;
  font-weight: 500;
`;

export const ContentName = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const ContentValue = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
