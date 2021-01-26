import { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import { convertDateToDayOfWeek } from "../functions/date";

const App = () => {
  const [dayOfWeek, setDayOfWeek] = useState("");

  return (
    <>
      <Form
        layout="inline"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={({ date }) => setDayOfWeek(convertDateToDayOfWeek(date))}
      >
        <Form.Item label="Input" name="date">
          <Input placeholder="DD/MM/YYYY" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Convert
          </Button>
        </Form.Item>
      </Form>
      <Typography.Text>Output: {dayOfWeek}</Typography.Text>
    </>
  );
};

export default App;
