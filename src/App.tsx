import { HeartIcon, ShoppingBagIcon, UserIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/accordion";
import { Badge } from "./components/badge";
import { Button } from "./components/button";
import { Card, CardContent } from "./components/card";
import type { JSX } from "react";

// Navigation items data

  const navItems = [
  { name: "All Products", href: "#" },
  { name: "Serum", href: "#" },
  { name: "Sunscreen", href: "#" },
  { name: "Bundle", href: "#" },
  ];

// Feature items data
  const featureItems = [
  {
    id: "01",
    title: "Bio Ingredients",
    description:
      "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
  },
  {
    id: "02",
    title: "Everything Natural",
    description:
      "Pure ingredients for pure skin. The Perfect solution for your skin care needs.",
  },
  {
    id: "03",
    title: "All Handmade",
    description:
      "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
    },
  ];

// Product data
  const products = [
  {
    id: 1,
    name: "ALYA SKIN CLEANER.",
    price: "FROM $29.99",
    image: "/mask-group.png",
  },
  {
    id: 2,
    name: "RITUAL OF SAKURA.",
    price: "FROM $27.99",
    image: "/mask-group-2.png",
  },
  {
    id: 3,
    name: "THE BODY LOTION.",
    price: "FROM $19.99",
    image: "/mask-group-4.png",
  },
];

// New arrivals data (reusing the same products with different images)
const newArrivals = [
  {
    id: 1,
    name: "ALYA SKIN CLEANSER.",
    price: "FROM $29.99",
    image: "/mask-group-1.png",
  },
  {
    id: 2,
    name: "RITUAL OF SAKURA.",
    price: "FROM $27.99",
    image: "/mask-group-3.png",
    darkButton: true,
  },
  {
    id: 3,
    name: "THE BODY LOTION.",
    price: "FROM $19.99",
    image: "/mask-group-5.png",
  },
];

// FAQ data
const faqItems = [
  {
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
    isOpen: true,
  },
  {
    question: "Are your products safe for sensitive skin?",
    answer: "",
  },
  {
    question: "What's your return policy?",
    answer: "",
  },
  {
    question: "Do you ship internationally?",
    answer: "",
  },
  {
    question: "How do i choose the right product?",
    answer: "",
  },
];

// Category filters
const categoryFilters = [
  { name: "NEW ARRIVAL", active: true },
  { name: "CLEANSING", active: false },
  { name: "ACNE FIGHTER", active: false },
  { name: "ANTI BAGGING", active: false },
];

// Social links
const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Youtube", href: "#" },
];

// Policy links
const policyLinks = [
  { name: "Terms of Service", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Cookies Policy", href: "#" },
];

export const App = (): JSX.Element => {
  return (
    <div className="bg-amber-50 flex flex-row justify-center w-full">
      <div className="bg-gray-40 overflow-hidden w-full max-w-1920px relative">
        {/* Header/Navigation */}
        <header className="flex items-center justify-between px-100px py-49px">
          <div className="font-extrabold text-3xl leading-normal whitespace-nowrap color: #2d3b36; font-family: 'Inter', Helvetica; letter-spacing: 0">
            SKINCARE
          </div>

          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-normal text-navText text-xl tracking-tightCustom leading-normal whitespace-nowrap font-inter"
                >
                {item.name}
                </a>
              ))}
    </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-#f8fee5 rounded-[20px] flex items-center justify-center">
                <ShoppingBagIcon className="w-5 h-5" />
              </div>
              <span className="ml-2 [font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-xl tracking-[-1.00px] leading-[normal] whitespace-nowrap">
                cart (1)
              </span>
            </div>

            <div className="w-10 h-10 bg-#f8fee5 rounded-[20px] flex items-center justify-center">
              <HeartIcon className="w-5 h-5" />
            </div>

            <div className="w-10 h-10 bg-#f8fee5 rounded-[20px] flex items-center justify-center">
              <UserIcon className="w-5 h-5" />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-[100px] mt-[50px] flex justify-between">
          <div className="max-w-[335px]">
            <div className="[font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-xl tracking-[0] leading-[normal]">
              Transform your skincare routine with premium products that
              restore, protect, and enhance your nautural glow every day.
            </div>
            <Button className="mt-[50px] w-[180px] h-[60px] bg-#2d3b36 rounded-[100px] text-xl">
              Shop Now
            </Button>
          </div>

          <div className="[font-family:'Inter',Helvetica] font-bold text-#2d3b36 text-[100px] tracking-[-3.00px] leading-[90px]">
            GLOW
            <br />
            NATUR-ALLY
          </div>

          <img
            className="w-[223px] h-[220px] object-cover"
            alt="Skin care beauty"
            src="/skin-care-beauty-cosmetic-packaging-design-agency-mumbai-delhi-b-1.png"
          />
        </section>

        {/* Large SKINCARE Background with Image */}
        <div className="relative w-full h-[685px] mt-[100px]">
          <div className="absolute top-[410px] left-0 font-extrabold text-#2d3b36 text-[378px] [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
            SKINCARE
          </div>

          <img
            className="absolute w-[610px] h-[676px] top-0 left-[673px] object-cover"
            alt="Skincare product"
            src="/chatgpt-image-jun-15--2025--10-24-47-pm-2.png"
          />

          <div className="absolute w-[476px] h-[100px] top-[546px] left-[740px] bg-#eff5e1 rounded-[200px] flex items-center">
            <div className="absolute w-[90px] h-[90px] top-[5px] left-[5px] bg-#eff5e1 rounded-[50px] border border-dashed border-#2d3b36 flex items-center justify-center">
              <img
                className="w-20 h-20 object-cover"
                alt="Skin care beauty"
                src="/skin-care-beauty-cosmetic-packaging-design-agency-mumbai-delhi-b-1.png"
              />
            </div>
            <div className="absolute left-[132px] [font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-xl tracking-[0] leading-[normal]">
              While giving you an invigorating cleansing experience.
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <main className="w-full bg-#fefff4 pt-[99px] px-[100px]">
          {/* Introduction */}
          <section className="mb-[100px]">
            <h2 className="[font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-6xl tracking-[-1.20px] leading-[normal] mb-8">
              YOUR SKIN DESERVES <br />
              THE BEST CARE.
            </h2>
            <p className="[font-family:'Inter',Helvetica] font-normal text-#525349 text-lg tracking-[-0.36px] leading-6 mb-12">
              Discover a curated collection of skincare products designed to
              rejuvenate,
              <br />
              protect, and pamper your skin. Explore our rage crafted with love
              backed
              <br />
              by science, and inspired by nature.
            </p>

            <div className="text-[53px] [font-family:'Inter',Helvetica] font-normal tracking-[-1.86px] leading-[78px] mb-16">
              <p className="text-#2d3b36 tracking-[-0.98px]">
                Experience the ultimate in skincare with our expertly formulated
                products,
                <br />
                crafted to nourish, protect, and rejuvenate your skin. Combining
                the finest
                <br />
                natural ingredients with{" "}
              </p>

              <p className="text-#2d3b36c] tracking-[-0.98px]">
                advanced science, our collection ensures every
                <br />
                skin type can achieve a radiant, healthy glow. Embrace your
                beauty with
                <br />
                confidence every day. Experience the ultimate in skincare with
                our <br />
                expertly formulated products, crafted to nourish, protect, and
                rejuvenate
                <br />
                your skin.
              </p>
            </div>

            <Badge className="w-[260px] h-[60px] bg-#fefff4 rounded-[100px] border border-solid border-#2d3b36 flex items-center px-0">
              <div className="w-5 h-5 ml-[18px] rounded-[10px] bg-#2d3b36"></div>
              <span className="ml-[20px] [font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Why Our Products
              </span>
            </Badge>
          </section>

          {/* Features Section */}
          <section className="flex flex-col space-y-[50px] mb-[100px]">
            {featureItems.map((item) => (
              <div key={item.id} className="flex items-start">
                <div className="bg-[linear-gradient(180deg,rgba(41,51,48,1)_0%,rgba(254,255,244,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-normal text-6xl tracking-[-1.20px] leading-[normal] whitespace-nowrap mr-[50px]">
                  {item.id}
                </div>
                <div>
                  <h3 className="[font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-6xl tracking-[-1.20px] leading-[normal] whitespace-nowrap mb-4">
                    {item.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-#525349 text-lg tracking-[-0.36px] leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* Award Section */}
          <section className="relative h-[1081px] mb-[100px]">
            <div className="absolute w-[849px] h-[1081px] right-0 bg-[url(/chatgpt-image-jun-15--2025--11-52-20-pm-1.png)] bg-cover bg-[50%_50%]">
              <div className="absolute w-[400px] h-[100px] bottom-[81px] left-[224px] bg-#eff5e1 rounded-[200px] flex items-center">
                <div className="absolute w-[90px] h-[90px] left-[5px] top-[5px] rounded-[50px] border border-dashed border-#2d3b36 flex items-center justify-center">
                  <div className="w-20 h-20 bg-#2d3b36 rounded-[200px] flex items-center justify-center">
                    <img
                      className="w-[50px] h-[50px]"
                      alt="Award"
                      src="/award-svgrepo-com-1.svg"
                    />
                  </div>
                </div>
                <div className="absolute left-[126px] [font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-xl tracking-[0] leading-[normal]">
                  Best Skin Care Product
                  <br />
                  Award Wining
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 flex justify-between w-full">
              <span className="[font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-xl tracking-[-0.40px] leading-[normal] whitespace-nowrap">
                SINCE 2001
              </span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-xl tracking-[-0.40px] leading-[normal] whitespace-nowrap">
                LEARN MORE
              </span>
            </div>
          </section>

          {/* Best Selling Products */}
          <section className="mb-[100px]">
            <div className="flex justify-center mb-[50px]">
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-6xl text-center tracking-[-1.20px] leading-[normal]">
                Skincare That Brings Out
                <br />
                Your Natural Radiance
              </h2>
            </div>

            <div className="flex justify-between mb-[30px]">
              <Badge className="w-[290px] h-[60px] bg-#fefff4 rounded-[100px] border border-solid border-#2d3b36 flex items-center px-0">
                <div className="w-5 h-5 ml-[19px] rounded-[10px] bg-#2d3b36"></div>
                <span className="ml-[20px] [font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  Best Selling Products
                </span>
              </Badge>

              <div className="flex space-x-4">
                <Button variant="outline" className="w-20 h-20 rounded-[40px] border border-solid border-#2d3b36 p-0 flex items-center justify-center"
                >
                  <img
                    className="w-[41px] h-[15px]"
                    alt="Arrow"
                    src="/arrow-2.svg"
                  />
                </Button>
                <Button className="w-20 h-20 rounded-[40px] bg-#2d3b36 p-0 flex items-center justify-center">
                  <img
                    className="w-[42px] h-[15px]"
                    alt="Arrow"
                    src="/arrow-1.svg"
                  />
                </Button>
              </div>
            </div>

            <div className="flex justify-between gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="w-[560px] h-[770px] bg-[url(${product.image})] bg-[100%_100%] border-none rounded-none"
                >
                  <CardContent className="p-0 relative h-full">
                    <div className="absolute w-[520px] h-[100px] bottom-[20px] left-5 bg-#fefff4 rounded-[10px] flex items-center">
                      <div className="ml-5">
                        <h3 className="[font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-xl tracking-[-1.00px] leading-[normal] whitespace-nowrap">
                          {product.name}
                        </h3>
                        <p className="[font-family:'Inter',Helvetica] font-normal text-#2d3b360] text-base tracking-[-0.80px] leading-[normal] whitespace-nowrap mt-2">
                          {product.price}
                        </p>
                      </div>
                      <div className="absolute w-20 h-20 top-[10px] right-[20px] bg-#2d3b36a] rounded-[10px] flex items-center justify-center">
                        <img
                          className="w-[30px] h-[30px]"
                          alt="Cart"
                          src="/cart-large-2-svgrepo-com-2.svg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Full Width Banner */}
          <section className="w-full h-[1146px] relative mb-[100px]">
            <img
              className="w-full h-full object-cover"
              alt="Model"
              src="/model.png"
            />
            <div className="absolute w-full h-[400px] bottom-0 rounded-[30px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(41,51,48,1)_100%)] flex flex-col items-center justify-end pb-[50px]">
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-#fefff4 text-[80px] text-center tracking-[-1.60px] leading-[normal] mb-[40px]">
                Feel Beautiful Inside and Out
                <br />
                with Every Product.
              </h2>
              <Button className="w-[180px] h-[60px] bg-#fefff4 text-#2d3b36 rounded-[100px] text-xl">
                Shop Now
              </Button>
            </div>
          </section>

          {/* New Arrivals */}
          <section className="mb-[100px]">
            <div className="flex justify-center mb-[50px]">
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-6xl text-center tracking-[-1.20px] leading-[normal]">
                Feel Beautiful Inside and Out
                <br />
                with Every Product.
              </h2>
            </div>

            <div className="flex justify-center space-x-4 mb-[50px]">
              {categoryFilters.map((category, index) => (
                <Button
                  key={index}
                  variant={category.active ? "default" : "outline"}
                  className={`${
                    category.active
                      ? "bg-#2d3b36 text-#fefff4"
                      : "bg-#fefff4 text-#2d3b36 border-#2d3b36"
                  } rounded-[100px] h-[60px] px-8 text-xl`}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            <div className="flex justify-between gap-6">
              {newArrivals.map((product) => (
                <Card
                  key={product.id}
                  className="w-[560px] h-[770px] bg-[url(${product.image})] bg-[100%_100%] border-none rounded-none"
                >
                  <CardContent className="p-0 relative h-full">
                    <div className="absolute w-[520px] h-[100px] bottom-[20px] left-5 bg-#fefff4 rounded-[10px] flex items-center">
                      <div className="ml-5">
                        <h3 className="[font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-xl tracking-[-1.00px] leading-[normal] whitespace-nowrap">
                          {product.name}
                        </h3>
                        <p className="[font-family:'Inter',Helvetica] font-normal text-#2d3b360] text-sm tracking-[-0.70px] leading-[normal] whitespace-nowrap mt-2">
                          {product.price}
                        </p>
                      </div>
                      <div
                        className={`absolute w-20 h-20 top-[10px] right-[20px] ${product.darkButton ? "bg-#2d3b36" : "bg-#2d3b36a]"} rounded-[10px] flex items-center justify-center`}
                      >
                        <img
                          className="w-[30px] h-[30px]"
                          alt="Cart"
                          src="/cart-large-2-svgrepo-com-2.svg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="flex gap-[150px] mb-[100px]">
            <div className="w-[850px] h-[900px] bg-[url(/mask-group-6.png)] bg-[100%_100%] relative">
              <div className="absolute w-[306px] h-[100px] bottom-[39px] left-[225px] bg-#eff5e1 rounded-[200px] flex items-center">
                <div className="absolute w-[90px] h-[90px] left-[5px] top-[5px] rounded-[50px] border border-dashed border-#2d3b36 flex items-center justify-center">
                  <div className="w-20 h-20 bg-#2d3b36 rounded-[200px] flex items-center justify-center">
                    <div className="w-10 h-10 bg-[url(/headphone-fill.png)] bg-[100%_100%]"></div>
                  </div>
                </div>
                <div className="absolute left-[115px] [font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-xl tracking-[0] leading-[normal]">
                  24/7 We're Here
                  <br />
                  to Help You
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-6xl tracking-[-1.20px] leading-[normal] mb-[50px]">
                Answers to Your
                <br />
                Skincare Questions, All
                <br />
                in One Place.
              </h2>

              <Badge className="w-[341px] h-[60px] bg-#fefff4 rounded-[100px] border border-solid border-#2d3b36 flex items-center px-0 mb-[50px]">
                <div className="w-5 h-5 ml-[18px] rounded-[10px] bg-#2d3b36"></div>
                <span className="ml-[20px] [font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  Frequently Asked Question
                </span>
              </Badge>

              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="w-[600px] border border-solid border-#2d3b36 rounded-[5px] mb-[10px] overflow-hidden"
                  >
                    <AccordionTrigger className="px-[29px] py-[25px] [font-family:'Inter',Helvetica] font-normal text-#2d3b36 text-xl tracking-[0] leading-[normal]">
                      {item.question}
                    </AccordionTrigger>
                    {item.answer && (
                      <AccordionContent className="px-[29px] pb-[25px] [font-family:'Inter',Helvetica] font-normal text-#525349 text-sm tracking-[-0.70px] leading-[normal]">
                        {item.answer}
                      </AccordionContent>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-#2d3b36 text-#e7e8e0 py-[199px] px-[100px] relative overflow-hidden">
          <div className="flex justify-between mb-[100px]">
            <div>
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-6xl tracking-[-1.20px] leading-[normal] mb-[50px]">
                Join The Skincare
                <br />
                Community Now.
              </h2>

              <div className="flex space-x-8 mt-[200px]">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="[font-family:'Inter',Helvetica] font-normal text-#eff5e1 text-xl tracking-[-1.00px] leading-[normal] whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="[font-family:'Inter',Helvetica] font-normal text-3xl tracking-[-0.60px] leading-[normal] whitespace-nowrap mb-2">
                Get in Touch
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-6xl tracking-[-1.20px] leading-[normal] whitespace-nowrap mb-[200px]">
                contact.skincare.com
              </p>

              <div className="flex space-x-8 justify-end">
                {policyLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="[font-family:'Inter',Helvetica] font-normal text-#eff5e1 text-xl text-right tracking-[-1.00px] leading-[normal] whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 font-bold text-#3d4b460] text-[420px] [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
            SKINCARE
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;