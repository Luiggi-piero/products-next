import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProduct } from "../products.api";
import Link from "next/link";
import { buttonVariants } from '@/components/ui/button'

interface Props {
    params: { id: string }
}

async function ProductDetailPage({ params }: Props) {

    const { id } = await params;
    const product = await getProduct(id);

    return (
        <div className="flex justify-center items-center h-screen">
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        Product Detail: {product.id}
                        <Link className={buttonVariants()} href="/">
                            Go Back
                        </Link>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <img src={product.image} alt=""
                        className="w-full h-64 object-cover"
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default ProductDetailPage