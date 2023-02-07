import UserLayout from "@/components/layout";
import { DiffTwoTone, ProfileTwoTone, MessageTwoTone } from "@ant-design/icons";
import { useRouter } from "next/router";


export default function Home() {
  const Router = useRouter()
  return (
    <>
      <UserLayout>
        <div className="my-5 grid grid-cols-6 px-6">
          <div className="col-span-1 container p-2 bg-slate-800 text-white text-center rounded-full w-10">
            R
          </div>
          <div className="col-span-5 mt-1">
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
            onClick={()=>{
              Router.push("/reserve")
            }}
          >
            <DiffTwoTone className="text-4xl" />
            <div className="text-xs mt-3">
              Reservasi
            </div>
          </div>

          <div>
            <ProfileTwoTone twoToneColor={"rgb(14 165 233)"} className="text-4xl" />
            <div className="text-xs mt-3">
              Layanan
            </div>
          </div>

          <div>
            <MessageTwoTone twoToneColor={"rgb(192 38 211)"} className="text-4xl" />
            <div className="text-xs mt-3">
              Inbox
            </div>
          </div>
        </div>

        <div className="px-6 py-2">
          <div className="font-semibold text-sm mt-2">
            News & Events
          </div>
          <div className="mt-3 shadow-lg w-full h-52 bg-[url('https://web.aotransportbus.com/uploads/slider/slider20220425124158.jpg')] bg-cover">
            
          </div>
        </div>




      </UserLayout>
    </>
  )
}
