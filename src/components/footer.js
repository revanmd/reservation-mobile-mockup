import { HomeOutlined, UserOutlined, HistoryOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="fixed bottom-0 w-full px-4 py-2 grid grid-flow-col auto-cols-4 text-center shadow-inner bg-white">
            <Link
                href="/"
            >
                <div>
                    <HomeOutlined />
                    <div
                        className='text-xs my-2'
                    >
                        Beranda
                    </div>
                </div>
            </Link>
            <div>
                <UserOutlined />
                <div
                    className='text-xs my-2'
                >
                    Profil
                </div>
            </div>
            <div>
                <HistoryOutlined />
                <div
                    className='text-xs my-2'
                >
                    Riwayat
                </div>
            </div>
            <div>
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