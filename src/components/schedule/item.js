import { CurrencyFormatter } from "@/utlis/formater"
import { useRouter } from "next/router";
import { Badge } from "antd"

export default function ListItemSchedule({ field, time, type, cost }) {
    const Router = useRouter()

    return (
        <div
            onClick={() => {
                Router.push("/buyer")
            }}
        >
            <div className="grid grid-cols-10 pb-4 pt-4 cursor-pointer">
                <div className="col-span-6">
                    <div className="text-sm">{field}</div>
                    <div className="text-sm text-gray-400">{time}</div>
                    <div className="mt-2"><Badge color="#13c2c2" count={type} /></div>
                </div>
                <div className="col-span-4">
                    <div className="text-base ml-2 text-orange-600">{CurrencyFormatter.format(cost)}</div>
                </div>
            </div>
            <hr />
        </div>
    )
}