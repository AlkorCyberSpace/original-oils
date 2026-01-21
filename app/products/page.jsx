import ProductList from "@/components/ProductList";

export const metadata = {
    title: "Products | Original Oils",
    description: "Shop our range of pure, traditionally crafted oils.",
};

export default function ProductsPage() {
    return (
        <main>
            <ProductList />
        </main>
    );
}
