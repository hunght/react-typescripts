import * as React from 'react';
import Block from '../Block';
import animation from '../../../assets/loading.json';
// import ReactBodymovin from 'react-bodymovin';
const ReactBodymovin = require('react-bodymovin');
/* tslint:disable */
// https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam
/* tslint:enable */

interface LoadingAnimationPropsType {
  className?: any;
  disable?: any;
  onClick?: any;
  children?: any;
}

const bodymovinOptions = {
  loop: true,
  autoplay: true,
  prerender: true,
  renderer: 'canvas',
  speed: 1.6,
  animationData: animation
};

const Wrapper = Block.extend`
  transform: scale(0.5);
`;

const LoadingAnimation = ({
  className,
  disable,
  onClick,
  children
}: LoadingAnimationPropsType) => (
  <Wrapper
    data-justify="center"
    data-align="center"
    data-flex={1}
    className={className}
  >
    <ReactBodymovin options={bodymovinOptions} />
  </Wrapper>
);

export default LoadingAnimation;
