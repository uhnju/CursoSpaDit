import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

/********************************************
 * ESCENARIO 1: Uso básico de useParams
 *******************************************/
// Este primer escenario muestra cómo capturar un parámetro simple de la URL.
// En este caso, `:username` representa un valor dinámico que podemos extraer
// con el hook `useParams`.

const UserProfile = () => {
  const { username } = useParams();
  return <h2>👤 Perfil de usuario: {username}</h2>;
};

const BasicUseParamsExample = () => (
  <div>
    <h3>1️⃣ Uso básico de useParams</h3>
    <nav>
      <Link to="/user/Juan">Perfil de Juan</Link> | <Link to="/user/Ana">Perfil de Ana</Link>
    </nav>
    <Routes>
      <Route path="/user/:username" element={<UserProfile />} />
    </Routes>
  </div>
);

/********************************************
 * ESCENARIO 2: Parámetro numérico
 *******************************************/
// Este ejemplo muestra cómo capturar un ID numérico desde la URL.
// Aunque useParams devuelve siempre strings, el nombre del parámetro
// nos puede dar pistas semánticas como `productId`.

const ProductPage = () => {
  const { productId } = useParams();
  return <h2>🛍️ Producto ID: {productId}</h2>;
};

const NumericParamsExample = () => (
  <div>
    <h3>2️⃣ Parámetros numéricos</h3>
    <nav>
      <Link to="/product/101">Producto 101</Link> | <Link to="/product/202">Producto 202</Link>
    </nav>
    <Routes>
      <Route path="/product/:productId" element={<ProductPage />} />
    </Routes>
  </div>
);

/********************************************
 * ESCENARIO 3: Múltiples parámetros
 *******************************************/
// En este caso, la ruta contiene dos valores dinámicos: `orderId` y `userId`.
// Se pueden capturar de forma simultánea usando `useParams`.

const OrderDetails = () => {
  const { orderId, userId } = useParams();
  return <h2>📦 Orden: {orderId}, Usuario: {userId}</h2>;
};

const MultipleParamsExample = () => (
  <div>
    <h3>3️⃣ Múltiples parámetros en useParams</h3>
    <nav>
      <Link to="/order/500/user/45">Orden 500 - Usuario 45</Link> |
      <Link to="/order/600/user/99">Orden 600 - Usuario 99</Link>
    </nav>
    <Routes>
      <Route path="/order/:orderId/user/:userId" element={<OrderDetails />} />
    </Routes>
  </div>
);

/********************************************
 * ESCENARIO 4: Parámetros opcionales
 *******************************************/
// Gracias a la sintaxis `:category?` podemos indicar que ese parámetro es opcional.
// Si no viene en la URL, `useParams()` lo devolverá como `undefined`.

const BlogPost = () => {
  const { postId, category } = useParams();
  return (
    <h2>
      📝 Post ID: {postId} {category ? ` - Categoría: ${category}` : ""}
    </h2>
  );
};

const OptionalParamsExample = () => (
  <div>
    <h3>4️⃣ Parámetros opcionales</h3>
    <nav>
      <Link to="/blog/123">Post 123</Link> | <Link to="/blog/123/react">Post 123 - React</Link>
    </nav>
    <Routes>
      <Route path="/blog/:postId/:category?" element={<BlogPost />} />
    </Routes>
  </div>
);

/********************************************
 * ESCENARIO 5: Rutas anidadas con parámetros
 *******************************************/
// Este patrón permite tener rutas con un layout o sección base (por ejemplo, `/courses`)
// y debajo rutas hijas que reciben un parámetro (`:courseId`).

const CourseLayout = () => <h2>📘 Sección de Cursos</h2>;

const CourseDetails = () => {
  const { courseId } = useParams();
  return <h2>📖 Curso ID: {courseId}</h2>;
};

const NestedParamsExample = () => (
  <div>
    <h3>5️⃣ Parámetros en rutas anidadas</h3>
    <nav>
      <Link to="/courses/react">Curso React</Link> | <Link to="/courses/vue">Curso Vue</Link>
    </nav>
    <Routes>
      <Route path="/courses" element={<CourseLayout />} />
      <Route path="/courses/:courseId" element={<CourseDetails />} />
    </Routes>
  </div>
);

/********************************************
 * ESCENARIO 6: useParams + API simulada
 *******************************************/
// Este ejemplo simula el uso de `useParams` junto con una API.
// Se recibe un `productId` desde la URL, y se usa para buscar
// en un objeto simulado como si fuera una respuesta del servidor.

const products = {
  1: { name: "Laptop", price: "$1200" },
  2: { name: "Teléfono", price: "$600" },
  3: { name: "Tablet", price: "$400" },
};

const ProductInfo = () => {
  const { productId } = useParams();
  const product = products[productId];

  return product ? (
    <h2>🏷️ {product.name} - Precio: {product.price}</h2>
  ) : (
    <h2>❌ Producto no encontrado</h2>
  );
};

const ApiSimulatedParamsExample = () => (
  <div>
    <h3>6️⃣ useParams con datos de una API simulada</h3>
    <nav>
      <Link to="/store/1">Laptop</Link> | <Link to="/store/2">Teléfono</Link> | <Link to="/store/3">Tablet</Link>
    </nav>
    <Routes>
      <Route path="/store/:productId" element={<ProductInfo />} />
    </Routes>
  </div>
);

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los ejemplos
 *******************************************/
// Este componente agrupa todos los escenarios para mostrar cómo `useParams`
// puede utilizarse con rutas simples, múltiples, opcionales o anidadas.

const EjemplosUseParams = () => (
  <Router>
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de useParams en React Router</h1>

      <BasicUseParamsExample />        {/* ESCENARIO 1: Parámetro simple */}
      <NumericParamsExample />         {/* ESCENARIO 2: Parámetro numérico */}
      <MultipleParamsExample />        {/* ESCENARIO 3: Múltiples parámetros */}
      <OptionalParamsExample />        {/* ESCENARIO 4: Parámetro opcional */}
      <NestedParamsExample />          {/* ESCENARIO 5: Ruta anidada con parámetro */}
      <ApiSimulatedParamsExample />    {/* ESCENARIO 6: API simulada */}
    </div>
  </Router>
);

export default EjemplosUseParams;
