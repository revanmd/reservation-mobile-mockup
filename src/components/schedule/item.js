import { CurrencyFormatter } from "@/utlis/formater"
import { Badge } from "antd"

export default function ListItemSchedule({field, time, type, cost}){
    return (
        <div>
            <div className="grid grid-cols-10 pb-5 pt-5">
                <div className="col-span-6">
                    <div className="text-base">{field}</div>
                    <div className="text-base text-gray-400">{time}</div>
                    <div><Badge color="#13c2c2" count={type} /></div>
                </div>
                <div className="col-span-4">
                    <div className="text-lg ml-2">{CurrencyFormatter.format(cost)}</div>
                </div>
            </div>
            <hr />
        </div>
    )
}