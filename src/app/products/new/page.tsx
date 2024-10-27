import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductForm } from "./product-form"
import { getProduct } from "../products.api"

interface Props {
    params: {
        id: string
    }
}

const ProductsNewPage = async ({ params }: Props) => {

    const { id } = await params;
    const product = await getProduct(id);

    return (
        <div className="h-screen flex justify-center items-center">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {
                            id ? 'Edit Product' : 'Create Product'
                        }
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ProductForm product={product} />
                </CardContent>
            </Card>
        </div>
    )
}

export default ProductsNewPage