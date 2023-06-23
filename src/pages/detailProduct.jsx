import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.services";
import { useEffect, useState } from "react";

const DetailProductPage = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        getDetailProduct(id, (data) => {
            setProduct(data)
        })
    },[id])
    console.log(product)
    return(
        <div>
            <div>Detail product : {id}{product.title}{product.image}</div>
        </div>
    )
}

export default DetailProductPage