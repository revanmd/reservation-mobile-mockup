import ListItemSchedule from "./item";

export default function ListSchedule() {
    return (
        <>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                return (
                    <ListItemSchedule
                        key={item}
                        field={"Lapangan Ganda Agung " + item}
                        time="08:00"
                        type="Lapangan Finyl"
                        cost="200000"
                        
                        
                    />
                )
            })}
            < div className="mb-20"></div>
        </>
    )
}