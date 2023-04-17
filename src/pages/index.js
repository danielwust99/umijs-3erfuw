import { Row, Col, Card, Typography, Avatar } from 'antd';
import 'antd/dist/antd.css';

import styles from '../styles/index.less';

import ChatBox from '../components/chat-box';
import ActionBox from '../components/action-box';

const { Title, Link } = Typography;

export default function IndexPage() {
  return (
    <Row justify="center" align="middle" className={styles.main}>
      <Col>
        <ChatBox>
          <Title level={3} className={styles.title}>
            Lorem Ipsum is simply dummy text
          </Title>

          <p className={styles.subtitle}>
            made with love by{' '}
            <Link href="https://vturb.com.br" target="_blank">
              VTurb
            </Link>
          </p>

          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          <ActionBox
            title="Chat with:"
            subtitle="Subtitle"
            description="Description"
            buttonText="Chat Now"
            buttonType="primary"
          ></ActionBox>
        </ChatBox>
      </Col>
    </Row>
  );
}
