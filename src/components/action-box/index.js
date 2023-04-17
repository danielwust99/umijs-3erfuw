import { Row, Col, Avatar } from 'antd';
import PropTypes from 'prop-types';

import CustomButton from '../custom-button';

const picture = (picture_name) =>
  `https://images.unsplash.com/photo-${picture_name}?ixlib=rb-1.2.1&ixqx=ITpzis0SHv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80`;

export default function ActionBox({
  title,
  buttonText,
  buttonType,
  size = 'large',
}) {
  return (
    <>
      <Row justify="space-between" align="middle">
        <Col>
          <h3>{title}</h3>
          <Avatar.Group size="large">
            <Avatar src={picture('1599566150163-29194dcaad36')} />
            <Avatar src={picture('1494790108377-be9c29b29330')} />
            <Avatar src={picture('1527980965255-d3b416303d12')} />
            <Avatar src={picture('1438761681033-6461ffad8d80')} />
          </Avatar.Group>
        </Col>
      </Row>
      <Row justify="end" align="middle">
        <Col style={{ marginTop: '1rem' }}>
          <CustomButton
            size={size}
            type={buttonType}
            text={buttonText}
          ></CustomButton>
        </Col>
      </Row>
    </>
  );
}

ActionBox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonType: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'default'])
    .isRequired,
};
