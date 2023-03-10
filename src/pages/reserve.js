import UserLayout from "@/components/layout";
import { PushpinOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Form, DatePicker, Select, TimePicker, Button } from 'antd';
import { useRouter } from "next/router";

export default function Reserve() {
    const Router = useRouter()

    const onFinish = () => {
        Router.push("/schedules")
    }


    return (
        <UserLayout
            backward="/"
            title="Reservasi"
        >
            <Form
                labelCol={{ span: 2 }}
                onFinish={onFinish}
                size="large"
                className="px-7 mt-3"
            >
                <Form.Item
                    name="lokasi"
                    label="Lokasi Sewa"
                    rules={[
                        {
                            required: true,
                            message: 'Tolong masukan lokasi sewa',
                        },
                    ]}
                >
                    <Select
                        placeholder="Pilih lokasi sewa"
                        suffixIcon={<PushpinOutlined />}
                        options={[
                            {
                                'label': "A",
                                'value': 0
                            }
                        ]}
                    />
                </Form.Item>

                <Form.Item
                    name="tempat"
                    label="Tempat"
                    rules={[
                        {
                            required: true,
                            message: 'Tolong masukan tempat',
                        },
                    ]}
                >
                    <Select
                        placeholder="Pilih tempat"
                        suffixIcon={<EnvironmentOutlined />}
                        options={[
                            {
                                'label': "A",
                                'value': 0
                            }
                        ]}
                    />
                </Form.Item>

                <Form.Item
                    name="tanggal"
                    label="Tanggal"
                    rules={[
                        {
                            required: true,
                            message: 'Tolong pilih tanggal',
                        },
                    ]}
                >
                    <DatePicker
                        onChange={() => {

                        }}
                        className="w-full"
                        placeholder="Pilih tanggal"
                    />
                </Form.Item>

                <Form.Item
                    name="jam"
                    label="Jam"
                    rules={[
                        {
                            required: true,
                            message: 'Tolong pilih jam',
                        },
                    ]}
                >
                    <TimePicker
                        onChange={() => {

                        }}
                        className="w-full"
                        placeholder="Pilih jam"
                        format="HH:00"
                    />
                </Form.Item>


                <Form.Item>
                    <Button
                        className="bg-teal-500 text-white w-full mt-5"
                        size="large"
                        type="secondary"
                        htmlType="submit"
                    >
                        LANJUTKAN
                    </Button>
                </Form.Item>
            </Form>

        </UserLayout>
    )
}