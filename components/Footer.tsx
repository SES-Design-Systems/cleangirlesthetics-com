import Primary from "./buttons/Primary";
import { navItems } from "@/lib/nav";
import Link from "next/link";

export default function Footer() {

    return (
        <>
            <div className="bg-gray w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center py-8 space-y-8">
                <div>
                    <h3 className="!text-4xl md:!text-5xl max-w-[300px] text-center">Clean Girl Esthetics</h3>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 md:row-span-2 ">
                    <Primary text="BOOK NOW" link="https://book.heygoldie.com/Cleangirlesthetics/checkout" />
                    <Primary text="LEAVE US A REVIEW" link="https://g.page/r/CbGIueiR_x7JEAI/review" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 font-outfit">
                {navItems.map((item) => (
                    <Link
                    key={item.name}
                    href={item.href}
                    className="text-2xl lg:text-3xl capitalize hover:text-brown"
                    >
                    {item.name}
                    </Link>
                ))}
                <a
                    href="http://www.glymedplus.com/store/8790767440206"
                    target="_blank"
                    className="text-2xl lg:text-3xl hover:scale-105 transition-transform duration-200"
                    >
                    Shop
                </a>
                </div>
            </div>
            <div className="bg-gray -mt-1 flex items-center justify-between w-full p-1">
                <p className="!text-xs">Copyright Clean Girl Esthetics 2025</p>
                <a className="text-xs font-outfit" href="https://craigsampson.com">Website by CS</a>

            </div>
        </>
    )
}