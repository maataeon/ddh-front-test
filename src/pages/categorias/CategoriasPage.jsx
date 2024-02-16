import "./categoriasPage.css";
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import Categoria from "../../components/categoria/Categoria";
import Titulo from "../../components/titulo/Titulo";
import categoriasList from "../../assets/categoriasList";

const CategoriasPage = () => {
  return (
      <div className="Page Categoria">
        <Titulo icon={<CategoryOutlinedIcon />}>Categoria</Titulo>
        <div className="Categorias-List">
          {categoriasList.map((categoria) => (
            <Categoria key={categoria.id} categoria={categoria} />
          ))}

        </div>
      </div>
  )
}

export default CategoriasPage;