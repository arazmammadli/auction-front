import { Card } from "@/components/common/card"

type Props = {
    type?: "all" | "featured" | "sale";
    products: any[]
};

export function ProductContainer(props: Props) {
    const { type, products } = props;

    return <>
        {
            products.map((d) => (
                <Card key={d.id} {...d} />
            ))
        }
    </>

}