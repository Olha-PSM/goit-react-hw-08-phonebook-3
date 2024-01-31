import { Wrapper, BallTriangle } from './Loader.styled';

import(Wrapper);
export const Loader = () => {
  return (
    <Wrapper>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="blue"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </Wrapper>
  );
};
