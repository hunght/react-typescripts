import * as React from 'react';
import { compose, withPropsOnChange } from 'recompose';
import { withRouter } from 'react-router-dom';
import View from './view';
import employersIconSrc from '../../../assets/images/icons/sidebar/employers-icon@2x.png';
import employersIconActiveSrc from '../../../assets/images/icons/sidebar/employers-icon-active@2x.png';

const employersIcon = <img width={22} height={18} src={employersIconSrc} />;
const employersIconActive = (
  <img width={22} height={18} src={employersIconActiveSrc} />
);

export const topicsSection = [
  {
    icon: employersIcon,
    activeIcon: employersIconActive,
    children: 'List',
    linkTo: '/topics'
  }
];

const isActive = (routeName: string, link: any) => {
  return (
    (link.linkString && link.linkString.some((i: any) => i === routeName)) ||
    routeName === link.linkTo
  );
};

const defineActiveLinkMapFn = (routeName: string) => (link: any) => ({
  ...link,
  active: isActive(routeName, link)
});

const enhancer = compose(
  withRouter,
  withPropsOnChange(['match'], ({ match }) => ({
    topicsSection: topicsSection.map(defineActiveLinkMapFn(match.path))
  }))
);

export default enhancer(View);
