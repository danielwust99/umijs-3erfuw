import { Row, Col, Card, Typography } from 'antd';

import styles from '../../styles/index.less';

const { Title, Link } = Typography;

export default function ChatBox({ children }) {
  return (
    <Row justify="center" align="middle" className={styles.main}>
      <Col>
        <Card className={styles.chatbox}>{children}</Card>
      </Col>
    </Row>
  );
}
