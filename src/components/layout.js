import Footer from "./footer";
import Header from "./header";

export default function UserLayout({ children, backward, title }) {

    return (
        <>
            <Header
                backward={backward}
                title={title}
            />

            <div className="mt-16">
                {children}
            </div>

            <Footer />


        </>
    )
}