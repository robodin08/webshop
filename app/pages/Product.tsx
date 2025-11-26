import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoCartOutline, IoCheckmarkOutline } from "react-icons/io5";

import type { Product as ProductType } from "~/data/products";

import { useCart } from "~/hooks/useCart";

function Product() {
  const { pid } = useParams<{ pid: string }>();
  const { t } = useTranslation("product");
  const { loaded: cartLoaded, cart, getProductById, incrementItemQuantity } = useCart();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [image, setImage] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      if (!pid) {
        setLoaded(true);
        return;
      }

      const p = cart[pid] || (await getProductById(pid));

      if (p) {
        setProduct(p);
        document.title = `${p.name} | Webshoppy`;
      }

      setLoaded(true);
    }

    fetchProduct();
  }, [cartLoaded]);

  if (!loaded) return null;
  if (!product) throw new Error(`Product not found`);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl lg:text-4xl">{product.name}</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div className="flex flex-col">
          {/* Main Image */}
          <div className="flex aspect-square cursor-zoom-in items-center justify-center overflow-hidden rounded-2xl bg-gray-200">
            <div className="h-full w-full p-5" id="image-container">
              <img src={`/assets/products/${product.id}/${image}_big.png`} className="h-full w-full object-contain" />
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="mt-4 flex gap-2">
            {Array.from({ length: product.images }).map((_, index) => (
              <button
                key={index}
                onClick={() => setImage(index)}
                className={`flex aspect-square flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg border p-1 transition-colors ${
                  image === index ? "border-2 border-blue-500" : "border border-gray-300 hover:border-gray-400"
                }`}
              >
                <img
                  src={`/assets/products/${product.id}/${index}_small.png`}
                  className="h-full w-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col">
          <div className="mb-4 font-bold text-red-600">
            <span className="text-5xl leading-none sm:text-6xl">
              {Math.floor(product.price / 100)}
              {product.price % 100 !== 0 && (
                <sup className="text-3xl sm:text-4xl">{String(product.price % 100).padStart(2, "0")}</sup>
              )}
            </span>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-lg font-semibold text-gray-900">{t("description")}</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>

          {pid && cart[pid] ? (
            <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-medium text-white shadow-sm hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:outline-none sm:w-auto">
              <IoCheckmarkOutline size={20} />
              {t("inShoppingCart")}
            </button>
          ) : (
            <button
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none sm:w-auto"
              onClick={() => incrementItemQuantity(product)}
            >
              <IoCartOutline size={20} />
              {t("inShoppingCart")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
