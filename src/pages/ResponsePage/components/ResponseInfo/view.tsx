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

export interface ResponseInfoInterface {
  response?: any;
  history?: any;
  match?: any;
  children?: React.ReactNode;
}

const TopicInfo = ({
  response: { data },
  history,
  match: {
    params: { edit }
  }
}: ResponseInfoInterface) => {
  return (
    <Block data-justify="space-between">
      <BlockCentred>
        <InfoField
          value={'#' + (data._id ? data._id : '')}
          propertyName="Response ID"
        />
      </BlockCentred>
      {!edit &&
        data._id && (
          <InfoLink onClick={() => history.push(`/response/${data._id}/edit`)}>
            Edit
          </InfoLink>
        )}
      {!!edit &&
        data._id && (
          <InfoLink onClick={() => history.push(`/response/${data._id}`)}>
            View
          </InfoLink>
        )}
    </Block>
  );
};

export default TopicInfo;
