import * as React from 'react';
import Block from '../../../elements/Block';
import InfoField from '../../../components/InfoField';
import Link from '../../../elements/Link';

const InfoLink = Link.extend`
  font-size: 1.125rem;
  letter-spacing: 0.7px;
`;

const BlockCentred = Block.extend`
  align-items: center;
`;

export interface TopicInfoInterface {
  topic?: any;
  history?: any;
  match?: any;
  children?: React.ReactNode;
}

const TopicInfo = ({
  topic: { data },
  history,
  match: {
    params: { edit }
  }
}: TopicInfoInterface) => (
  <Block data-justify="space-between">
    <BlockCentred>
      <InfoField
        value={'#' + (data._id ? data._id : '')}
        propertyName="Topic ID"
      />
    </BlockCentred>
    {!edit &&
      data._id && (
        <InfoLink onClick={() => history.push(`/topic/${data._id}/edit`)}>
          Edit
        </InfoLink>
      )}
    {!!edit &&
      data._id && (
        <InfoLink onClick={() => history.push(`/topic/${data._id}`)}>
          View
        </InfoLink>
      )}
  </Block>
);

export default TopicInfo;
