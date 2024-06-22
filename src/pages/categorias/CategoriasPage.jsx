import "./categoriasPage.css";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Titulo from "../../components/titulo/Titulo";
import categoriasList from "../../assets/categoriasList";
import Categoria from "./categoria/Categoria";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategorias } from "./categoriasSlice";

const CategoriasPage = () => {
  const dispatch = useDispatch();

  const categorias = useSelector((state) => state.categorias.categorias);

  useEffect(() => {
    dispatch(getCategorias({}));
  }, [dispatch]);

  return (
    <div className="Page Categoria">
      <Titulo icon={<CategoryOutlinedIcon />}>Categoria</Titulo>
      <div className="Categorias-List">
        {categorias.length > 0 &&
          categorias.map((categoria) => (
            <Categoria key={categoria.id} categoria={categoria} />
          ))}
      </div>
    </div>
  );
};

export default CategoriasPage;
