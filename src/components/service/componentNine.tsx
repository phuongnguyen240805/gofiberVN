import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Search from "../home/Search";
import { useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../ui/card";
const ComponentNine = () => {
    const supplier = [
        {
            name: "GoDaddy",
            logo: '/assets/godaddy-logo-white.png',
            price: [
                {
                    domain: ".com",
                    price: 12.99,
                    sale: 9.99
                },
                {
                    domain: ".net",
                    price: 14.99,
                    sale: 11.99
                },
                {
                    domain: ".org",
                    price: 19.99,
                    sale: 15.99
                },
                {
                    domain: ".io",
                    price: 39.99,
                    sale: 29.99
                },
                {
                    domain: ".co",
                    price: 29.99,
                    sale: 24.99
                }
            ],
        },
        {
            name: "Name.com",
            logo: '/assets/namecom-logo-white.png',
            price: [
                {
                    domain: ".com",
                    price: 12.99,
                    sale: 9.99
                },
                {
                    domain: ".net",
                    price: 14.99,
                    sale: 11.99
                },
                {
                    domain: ".org",
                    price: 19.99,
                    sale: 15.99
                },
                {
                    domain: ".io",
                    price: 39.99,
                    sale: 29.99
                },
                {
                    domain: ".co",
                    price: 29.99,
                    sale: 24.99
                }
            ],
        },
    ]
    const [supplierActive, setSupplierActive] = useState(supplier[0].name);

    return (
        <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 shadow-lg text-center text-white">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-xl font-bold uppercase text-white">Domain Service</h1>
                <div className="flex items-stretch gap-4">
                    {supplier.map((sup, index) => (
                        <div
                            key={index}
                            onClick={() => setSupplierActive(sup.name)}
                            className={`
                    rounded-2xl p-4 my-4 w-full cursor-pointer
                    flex items-center justify-center
                    bg-gradient-to-br shadow-sm backdrop-blur-md transition-all
    
                    border
                    ${supplierActive === sup.name
                                    ? "border-white/80 from-white/30 to-white/70 shadow-lg"
                                    : "border-white/40 from-white/10 to-white/40"
                                }
                `}
                        >
                            <Image src={sup.logo} alt={sup.name} width={128} height={64} />
                        </div>
                    ))}
                </div>
                <span>Nhà cung cấp domain: {supplierActive}</span>
                <Search />
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                        }),
                    ]}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent>
                        {supplier.find(sup => sup.name === supplierActive)?.price.map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 gap-1">
                                <div className="p-1">
                                    <Card
                                        className="
        rounded-2xl
        border border-white/40
        bg-transparent
        bg-gradient-to-br from-white/10 to-white/60
        shadow-sm
        backdrop-blur-md
        transition-all
      "
                                    >

                                        <CardContent className="flex aspect-square items-center p-3 gap-2">
                                            <span className="text-3xl font-semibold text-white">
                                                {supplier.find(sup => sup.name === supplierActive)?.price[index].domain}
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-white line-through opacity-70">$
                                                    {supplier.find(sup => sup.name === supplierActive)?.price[index].price}
                                                </span>
                                                <span className="text-md font-bold text-white">$
                                                    {supplier.find(sup => sup.name === supplierActive)?.price[index].sale}
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>

                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="text-black p-5 flex justify-center items-center" />
                    <CarouselNext className="text-black p-5 flex justify-center items-center" />
                </Carousel>
            </div>

        </div>
    );
}
export default ComponentNine;