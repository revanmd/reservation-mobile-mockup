import UserLayout from "@/components/layout";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/router";

export default function Buyer() {
    const Router = useRouter()

    const onFinish = () => {
        Router.push('/confirm')
    }

    return (
        <UserLayout
            backward="/schedules"
            title="Pemesan"
        >
            <Form
                onFinish={onFinish}
                size="large"
                className="px-7 mt-3"
            >
                <Form.Item
                    name="buyer"
                    label="Nama Pemesan"
                    rules={[
                        {
                            required: true,
                            message: 'Tolong masukan nama pemesan',
                        },
                    ]}
                >
                    <Input
                        placeholder="Masukan nama pemesan"
                    />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email Pemesan"
                    rules={[
                        {
                            required: true,
                            message: 'Tolong masukan email pemesan',
                        },
                    ]}
                >
                    <Input
                        placeholder="Masukan email pemesan"
                    />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Nomor Telepon Pemesan"
                    rules={[
                        {
                            required: true,
                            message: 'Tolong masukan nomor telepon',
                        },
                    ]}
                >
                    <Input
                        placeholder="Masukan nomor telepon"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        className="bg-teal-500 text-white w-full mt-5"
                        size="large"
                        type="secondary"
                        htmlType="submit"
                    >
                        KONFIRMASI PEMESANAN
                    </Button>
                </Form.Item>
            </Form>
        </UserLayout>
    )
}