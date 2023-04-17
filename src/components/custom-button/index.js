import React from 'react';
import { Button } from 'antd';

export default function CustomButton({ type, text, size }) {
  return (
    <Button type={type} size={size}>
      {text}
    </Button>
  );
}
