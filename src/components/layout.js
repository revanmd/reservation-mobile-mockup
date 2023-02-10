import { useWindowSize } from "@/hooks/useWindowsSize";
import Footer from "./footer";
import Header from "./header";
import Sider from "./sider";




export default function UserLayout({ children, backward, title }) {
    const size = useWindowSize()

    if (size.width > 600) {
        return (
            <div>
                <Header
                    backward={backward}
                    title={title}
                />

                <div 
                    className="mt-16 pt-1"
                    style={{
                        marginLeft:'120px'
                    }}
                >
                    {children}
                </div>

                <Sider />
            </div>
        )
    }
    else {
        return (
            <div>
                <Header
                    backward={backward}
                    title={title}
                />

                <div className="mt-16">
                    {children}
                </div>

                <Footer />
            </div>
        )
    }





}