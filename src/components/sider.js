import { HomeOutlined, UserOutlined, HistoryOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function Sider() {
    return (
        <div
            className="fixed top-0 grid grid-rows-4 h-full items-center text-center bg-white p-5 shadow-lg"
            style={{
                zIndex:9999
            }}
        >
            <Link
                href="/"
            >
                <div
                    className='cursor-pointer'
                >
                    <HomeOutlined />
                    <div
                        className='text-xs my-2'
                    >
                        Beranda
                    </div>
                </div>
            </Link>
            <div
                className='cursor-pointer'
            >
                <UserOutlined />
                <div
                    className='text-xs my-2'
                >
                    Profil
                </div>
            </div>
            <div
                className='cursor-pointer'
            >
                <HistoryOutlined />
                <div
                    className='text-xs my-2'
                >
                    Riwayat
                </div>
            </div>
            <div
                className='cursor-pointer'
            >
                <SettingOutlined />
                <div
                    className='text-xs my-2'
                >
                    Pengaturan
                </div>
            </div>
        </div>
    )
}