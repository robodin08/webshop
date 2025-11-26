export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatPrice(price: number) {
  return `€${(price / 100).toFixed(2)}`;
}
