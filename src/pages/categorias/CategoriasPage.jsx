import { Typography } from "@mui/material";
import Header from "../../components/header/Header"
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import "./categoriasPage.css";
import CategoriaItem from "../../components/categoriaItem/CategoriaItem";

import placasPCB from "../../assets/placas-PCB.png";
const categorias = [
  { image: placasPCB, label: "Placas PCB"},
  { image: placasPCB, label: "Placas PCB"},
  { image: placasPCB, label: "Placas PCB"},
  { image: placasPCB, label: "Placas PCB"},
  { image: placasPCB, label: "Placas PCB"},
  { image: placasPCB, label: "Placas PCB"},
  { image: placasPCB, label: "Placas PCB"},
  { image: placasPCB, label: "Placas PCB"}
]

const CategoriasPage = () => {
  return (
    <div className="Page">
      <Header />
      <div className="Categoria">
        <div className="Categoria-Titulo">
          <CategoryOutlinedIcon />
          <Typography className="Categoria-Titulo-Texto">Categorias</Typography>
        </div>
        <div className="Categorias-List">
          {categorias.map((categoria, index) => (
            <CategoriaItem key={index} image={categoria.image} label={categoria.label} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default CategoriasPage;