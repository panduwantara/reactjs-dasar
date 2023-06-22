//mengimport modul axios untuk manipulasi API
import axios from "axios";

//BIKIN FUNCTION GET OR FETCH YANG BISA DIEXPORT/PANGGIL 
export const getProduct =(callback) => {
axios
    .get("https://fakestoreapi.com/products/")//pake method get buat mengambil data di API
    .then((res) => {//mengirimkan respons data jika sukses
        console.log(res)
        callback(res.data)
    })
    .catch((err) => {//menampilkan eror kalau tidak benar
        console.log(err)
    })
}