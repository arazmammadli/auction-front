import { Tabs } from 'antd';
import { ProductDescription } from "@/components/page-modules/product-detail/components/tabs/product.description";
import { ProductReview } from "@/components/page-modules/product-detail/components/tabs/product.review";


export function ProductInformation() {
    const items = [
        {
            key: "1",
            label: "Description",
            children: <ProductDescription info='' />
        },
        {
            key: "2",
            label: "Additional information",
            children: <></>
        },
        {
            key: "3",
            label: "Specification",
            children: <></>
        },
        {
            key: "4",
            label: "Review",
            children: <ProductReview />
        }
    ]
    return (
        <div className="w-full py-[72px]">
            <Tabs
                tabBarStyle={{ marginBottom: "0px" }}
                className='border border-solid border-[#E4E7E9]'
                defaultActiveKey="1"
                centered
                items={items}
            />
        </div>
    )
}