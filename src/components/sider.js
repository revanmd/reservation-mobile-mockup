import { HomeOutlined, UserOutlined, HistoryOutlined, SettingOutlined } from '@ant-design/icons';

export default function Sider() {
    return (
        <div
            className="fixed top-0 grid grid-rows-4 h-full items-center text-center bg-white p-5 shadow-lg"
        >
            <div>
                <HomeOutlined />
                <div
                    className='text-xs my-2'
                >
                    Beranda
                </div>
            </div>
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