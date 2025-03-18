import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// ✅ 1️⃣ Uso básico de useParams
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

// ✅ 2️⃣ Parámetro numérico en la URL
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

// ✅ 3️⃣ Múltiples parámetros en la URL
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

// ✅ 4️⃣ Parámetros opcionales en la URL
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

// ✅ 5️⃣ Parámetros en rutas anidadas
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

// ✅ 6️⃣ useParams con datos de una API simulada
const products = {
  1: { name: "Laptop", price: "$1200" },
  2: { name: "Teléfono", price: "$600" },
  3: { name: "Tablet", price: "$400" },
};

const ProductInfo = () => {
  const { productId } = useParams();
  const product = products[productId];

  return product ? (
    <h2>
      🏷️ {product.name} - Precio: {product.price}
    </h2>
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

// ✅ Componente principal con todos los ejemplos
const EjemplosUseParams = () => (
  <Router>
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>📘 6 Ejemplos del Hook useParams en React Router</h2>
      <BasicUseParamsExample />
      <NumericParamsExample />
      <MultipleParamsExample />
      <OptionalParamsExample />
      <NestedParamsExample />
      <ApiSimulatedParamsExample />
    </div>
  </Router>
);

export default EjemplosUseParams;
