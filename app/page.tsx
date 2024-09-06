import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  const products = [
    {
      id: 0,
      name: "Mushroom Orange Lamp",
      description: "Mushroom Orange Lamp descripitions",
      price: 40,
      imageUrl:
        "https://cdn.pixabay.com/photo/2024/02/15/14/31/donkey-8575524_1280.jpg",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen px-12">
        <div className="px-12 pt-12 pb-20">
          <div className="flex flex-col xl:flex-row gap-2 xl:gap-40">
            <div className="pt-12">
              <h2 className="text-4xl mb-16">OUR TOP PRODUCTS</h2>
              <p className="text-xl">
                You can pay to boost your products here.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-12">
              {products.map((product) => {
                return (
                  <Card key={`${product.name}-${product.id}`} {...product} />
                );
              })}
            </div>
          </div>

          <h2 className="text-4xl mt-20 mb-16">ALL PRODUCTS</h2>
          {products && products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => {
                return (
                  <Card key={`${product.name}-${product.id}`} {...product} />
                );
              })}
            </div>
          ) : (
            <p className="text-xl text-gray-800">
              All our products are gone...
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
