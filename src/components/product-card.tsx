"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button'
import { deleteProduct } from "@/app/products/products.api";
import { useRouter } from "next/navigation";

export function ProductCard({ product }: any) {

    const router = useRouter();

    async function handleRemoveProduct(id: any) {
        console.log(id);
        await deleteProduct(id);
        // Refrescar la memoria de next para que tome los cambios
        router.refresh();
    }

    return (
        <Card
            onClick={() => { router.push(`/products/${product.id}`) }}
        >
            <CardHeader>
                <CardTitle className="flex justify-between">
                    {product.name}
                    <span className="text-sm font-bold text-gray-500">
                        $ {product.price}
                    </span>
                </CardTitle>
            </CardHeader>
            <img src={product.image} alt="" />
            <CardContent>
                <p>
                    {product.description}
                </p>
                <CardFooter className="flex justify-between">
                    <Button
                        onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/products/${product.id}/edit`)
                        }}
                        className="mt-5">
                        Editar
                    </Button>
                    <Button className="mt-5" variant={'destructive'}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveProduct(product.id);
                        }}
                    >
                        Eliminar
                    </Button>
                </CardFooter>
            </CardContent>
        </Card>
    )
}
