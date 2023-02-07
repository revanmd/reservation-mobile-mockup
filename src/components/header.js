import {ArrowLeftOutlined } from '@ant-design/icons';

export default function Header({backward, title}){
    if(backward){
        return (
            <div
                className='fixed top-0 py-4 bg-slate-800 text-center text-white text-bold w-full'
                style={{
                    zIndex:9999
                }}
            >
                <div className='fixed left-6 top-3'>
                    <a
                        href={backward}
                    >
                        <ArrowLeftOutlined
                            className='text-2xl'
                            
                        />
                    </a>
                </div>
                <b>{title}</b>
            </div>
        )
    }
    else{
        return (
            <div
                className='fixed top-0 py-4 bg-slate-800 text-center text-white text-bold w-full'
            >
                <b>Logo Reservation</b>
            </div>
        )
    }
}