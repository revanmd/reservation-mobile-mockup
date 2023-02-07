import UserLayout from "@/components/layout";
import ListSchedule from "@/components/schedule/list";

export default function Schedules() {
    return (
        <UserLayout
            backward="/"
            title="Pilih jadwal"
        >
            <div
                className="px-7"
            >
                <ListSchedule />
            </div>
        </UserLayout>
    )
}