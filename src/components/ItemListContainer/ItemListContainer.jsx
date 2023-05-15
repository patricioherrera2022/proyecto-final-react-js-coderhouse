import React, { useEffect, useState } from "react";
import "./itenlistcontainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemList } from "../ItemList/ItemList";
import { ImSpinner3 } from "react-icons/im";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/config";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();
  
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const productos = db.collection("productos");

    if (categoryId) {
      const filtrado = productos.where("category", "==", categoryId);

      filtrado.get()
        .then((res) => {
          const newItem = res.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          console.table(newItem);
          setItems(newItem);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    } else {
      productos.get()
        .then((res) => {
          const newItem = res.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          console.table(newItem);
          setItems(newItem);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryId, setLoading]);



  return (
    <section className="container">
      {loading ? <ImSpinner3 /> : <ItemList productos={items} />}
      
    </section>
  );
};
