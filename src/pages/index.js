import UserLayout from "@/components/layout";
import TableSchedule from "@/components/schedule/table";
import { DiffTwoTone, ProfileTwoTone, MessageTwoTone } from "@ant-design/icons";
import { useRouter } from "next/router";


export default function Home() {
  const Router = useRouter()
  return (
    <>
      <UserLayout>
        <div className="my-5 ml-10">
          <div className="container p-2 bg-slate-800 text-white text-center rounded-full w-10"
            style={{
              display: 'inline-block'
            }}
          >
            R
          </div>
          <div className="mt-1 ml-3"
            style={{
              display: 'inline-block',
              position: 'relative',
              top: '10px'
            }}
          >
            <div className="text-sm">
              Revan Muhammad Dafa
            </div>
            <div className="text-xs text-gray-400">
              087655423121
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 text-center border-solid border-y py-7 text-gray-400">
          <div
            className="cursor-pointer"
            onClick={() => {
              Router.push("/reserve")
            }}
          >
            <DiffTwoTone className="text-4xl" />
            <div className="text-xs mt-3">
              Reservasi
            </div>
          </div>

          <div
            className="cursor-pointer"
          >
            <ProfileTwoTone twoToneColor={"rgb(14 165 233)"} className="text-4xl" />
            <div className="text-xs mt-3">
              Layanan
            </div>
          </div>

          <div
            className="cursor-pointer"
          >
            <MessageTwoTone twoToneColor={"rgb(192 38 211)"} className="text-4xl" />
            <div className="text-xs mt-3">
              Inbox
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-3"
        >
          <div className="col-span-3 lg:col-span-1 px-6 py-2">
            <div className="font-semibold text-sm mt-2">
              News & Events
            </div>
            <div className="cursor-pointer mt-3 shadow-lg w-full h-52 bg-[url('https://web.aotransportbus.com/uploads/slider/slider20220425124158.jpg')] bg-cover">

            </div>
          </div>
          <div className="col-span-3 lg:col-span-2 px-6 py-2">
            <div className="font-semibold text-sm mt-2">
              Jadwal
            </div>
            <div className="mt-3 shadow-lg w-full h-52 bg-cover">
              <TableSchedule/>

            </div>
          </div>
        </div>




      </UserLayout>
    </>
  )
}
