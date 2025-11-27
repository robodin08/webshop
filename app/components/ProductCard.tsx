import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { IoCartOutline, IoCheckmarkOutline } from "react-icons/io5";
import type { Product } from "~/constants/products";
import { formatCurrency } from "~/utils";
import { useCart } from "~/hooks/useCart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation(["search", "product"]);
  const { cart, incrementItemQuantity } = useCart();

  const isInCart = !!cart[product.id];

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <Link to={`/p/${product.id}`} className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={`/assets/products/${product.id}/0_big.png`}
          alt={product.name}
          className="h-full w-full object-contain p-4 transition-transform group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link to={`/p/${product.id}`} className="mb-2 hover:text-blue-600">
          <h3 className="line-clamp-2 text-base font-semibold text-gray-900">{product.name}</h3>
        </Link>

        <p className="mb-3 line-clamp-2 flex-1 text-sm text-gray-600">{product.description}</p>

        <div className="mt-auto">
          <p className="mb-3 text-xl font-bold text-red-600">{formatCurrency(product.price)}</p>

          {isInCart ? (
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-700">
              <IoCheckmarkOutline size={20} />
              {t("inShoppingCart", { ns: "product" })}
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                incrementItemQuantity(product);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              <IoCartOutline size={20} />
              {t("inShoppingCart", { ns: "product" })}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
