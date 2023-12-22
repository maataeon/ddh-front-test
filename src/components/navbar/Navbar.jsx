import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Icono a la izquierda */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        {/* Input de búsqueda en el centro */}
        <div style={{ flexGrow: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Buscar..."
              inputProps={{ 'aria-label': 'buscar' }}
              style={{ flexGrow: 1 }}
            />
          </div>
        </div>

        {/* Lista de menús a la derecha (puedes agregar más IconButton según tus necesidades) */}
        <IconButton color="inherit">Menú 1</IconButton>
        <IconButton color="inherit">Menú 2</IconButton>
        <IconButton color="inherit">Menú 3</IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;