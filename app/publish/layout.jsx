import ImagesBanner from "@/components/ImagesBanner";

export default function RootLayout({ children }) {
    return (
        <>
            <main>{children}</main>

            {/* images banner` */}
            <ImagesBanner />
        </>
    );
}