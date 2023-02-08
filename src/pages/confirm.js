import UserLayout from "@/components/layout";
import { CurrencyFormatter } from "@/utlis/formater";
import { Button } from "antd";

export default function Confirm() {
    return (
        <UserLayout
            backward="/buyer"
            title="Konfirmasi"
        >
            <div className="mx-5">
                <div className="my-3 p-5 bg-slate-50 border-solid border rounded-md border-slate-100">
                    <div
                        className="text-base font-semibold mb-2"
                    >
                        DATA PESANAN
                    </div>

                    <div className="text-sm">
                        <table className="table-konfirmasi">
                            <tr>
                                <td>Lokasi</td>
                                <td>:</td>
                                <td>Jalan Mangkung Saru</td>
                            </tr>
                            <tr>
                                <td>Lapangan</td>
                                <td>:</td>
                                <td>Lapangan IA</td>
                            </tr>
                            <tr>
                                <td>Tanggal</td>
                                <td>:</td>
                                <td>27 Januari 2023</td>
                            </tr>
                            <tr>
                                <td>Jam</td>
                                <td>:</td>
                                <td>08:00</td>
                            </tr>
                            <tr>
                                <td>Pemesan</td>
                                <td>:</td>
                                <td>Revan Muhammad Dafa</td>
                            </tr>
                            <tr>
                                <td>Harga</td>
                                <td>:</td>
                                <td>{CurrencyFormatter.format(200000)}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                
                <div
                    className="p-5 bg-orange-50 border-solid border border-orange-100"
                >
                    <div className="text-sm">Catatan </div>
                    <div className="text-sm">
                        Mohon periksa kembali pemesanan anda, dan lakukan pembayaran dalam jangka waktu yang sudah ditentukan agar pemesanan anda tidak dibatalkan oleh sistem
                    </div>
                </div>

                <div>
                    <Button
                        className="bg-teal-500 text-white w-full mt-5"
                        size="large"
                        type="secondary"
                        htmlType="submit"
                    >
                        LANJUTKAN PEMBAYARAN
                    </Button>
                </div>

            </div>
        </UserLayout>
    )
}