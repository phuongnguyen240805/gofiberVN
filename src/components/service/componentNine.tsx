import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Search from '../home/Search';
import { useState } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '../ui/card';
const ComponentNine = () => {
  const supplier = [
    {
      name: 'GoDaddy',
      logo: '/assets/godaddy-logo-white.png',
      price: [
        {
          domain: '.com',
          price: 12.99,
          sale: 9.99,
        },
        {
          domain: '.net',
          price: 14.99,
          sale: 11.99,
        },
        {
          domain: '.org',
          price: 19.99,
          sale: 15.99,
        },
        {
          domain: '.io',
          price: 39.99,
          sale: 29.99,
        },
        {
          domain: '.co',
          price: 29.99,
          sale: 24.99,
        },
      ],
    },
    {
      name: 'Name.com',
      logo: '/assets/namecom-logo-white.png',
      price: [
        {
          domain: '.com',
          price: 12.99,
          sale: 9.99,
        },
        {
          domain: '.net',
          price: 14.99,
          sale: 11.99,
        },
        {
          domain: '.org',
          price: 19.99,
          sale: 15.99,
        },
        {
          domain: '.io',
          price: 39.99,
          sale: 29.99,
        },
        {
          domain: '.co',
          price: 29.99,
          sale: 24.99,
        },
      ],
    },
  ];
  const [supplierActive, setSupplierActive] = useState(supplier[0].name);

  return (
    <div className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-6 text-center text-white shadow-lg">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-xl font-bold uppercase text-white">
          Domain Service
        </h1>
        <div className="flex items-stretch gap-4">
          {supplier.map((sup, index) => (
            <div
              key={index}
              onClick={() => setSupplierActive(sup.name)}
              className={`
                    my-4 flex w-full cursor-pointer items-center
                    justify-center rounded-2xl border
                    bg-gradient-to-br p-4 shadow-sm backdrop-blur-md
    
                    transition-all
                    ${
                      supplierActive === sup.name
                        ? 'border-white/80 from-white/30 to-white/70 shadow-lg'
                        : 'border-white/40 from-white/10 to-white/40'
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
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="mx-auto w-full max-w-4xl"
        >
          <CarouselContent>
            {supplier
              .find(sup => sup.name === supplierActive)
              ?.price.map((_, index) => (
                <CarouselItem
                  key={index}
                  className="gap-1 md:basis-1/2 lg:basis-1/4"
                >
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
                      <CardContent className="aspect-square flex items-center gap-2 p-3">
                        <span className="text-3xl font-semibold text-white">
                          {
                            supplier.find(sup => sup.name === supplierActive)
                              ?.price[index].domain
                          }
                        </span>
                        <div className="flex flex-col">
                          <span className="text-white line-through opacity-70">
                            $
                            {
                              supplier.find(sup => sup.name === supplierActive)
                                ?.price[index].price
                            }
                          </span>
                          <span className="text-md font-bold text-white">
                            $
                            {
                              supplier.find(sup => sup.name === supplierActive)
                                ?.price[index].sale
                            }
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="flex items-center justify-center p-5 text-black" />
          <CarouselNext className="flex items-center justify-center p-5 text-black" />
        </Carousel>
      </div>
    </div>
  );
};
export default ComponentNine;
