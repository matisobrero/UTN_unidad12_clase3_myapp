import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import imagen from './components/Main/lenovo.jpg'

const producto={
  imagen: imagen,
  nombre: "Lenovo ZenBook Ultra",
  descripcion: "La Lenovo ZenBook Ultra es la joya de la tecnología portátil. Con un diseño ultradelgado y elegante, esta notebook combina potencia y estilo.u procesador de última generación y memoria RAM avanzada garantizan un rendimiento excepcional, perfecto para tareas intensivas y multitarea fluida. La pantalla Full HD de 14 pulgadas ofrece colores vibrantes y detalles nítidos. Además, cuenta con un sistema de audio envolvente para una experiencia multimedia inigualable.",
  sku: 2500472,
  disponible: true,
  precio: 750000
}



function App() {
  return (
    <div >

      <Header />
      <Main producto={producto}/>
      <Footer />
    </div>
  );
}

export default App;
