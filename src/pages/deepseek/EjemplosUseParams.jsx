import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

/********************************************
 * ESCENARIO 1: Uso básico de useParams
 *******************************************/
// Este ejemplo muestra cómo usar `useParams` para obtener parámetros de la URL.
// Es útil cuando necesitas acceder a valores dinámicos en la ruta.

interface UserProfileParams {
  userId: string;
}

const UserProfile = () => {
  const { userId } = useParams<UserProfileParams>();

  return <p>Perfil del usuario: {userId}</p>;
};

const BasicUseParamsExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/user/1">Usuario 1</Link> | <Link to="/user/2">Usuario 2</Link>
      </nav>
      <Routes>
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 2: Uso de useParams con múltiples parámetros
 *******************************************/
// Este ejemplo muestra cómo usar `useParams` para obtener múltiples parámetros de la URL.
// Es útil cuando necesitas acceder a varios valores dinámicos en la ruta.

interface ProductDetailsParams {
  productId: string;
  category: string;
}

const ProductDetails = () => {
  const { productId, category } = useParams<ProductDetailsParams>();

  return (
    <p>
      Detalles del producto {productId} en la categoría {category}.
    </p>
  );
};

const MultipleParamsExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/product/1/electronics">Electrónica</Link> |{" "}
        <Link to="/product/2/clothing">Ropa</Link>
      </nav>
      <Routes>
        <Route path="/product/:productId/:category" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 3: Uso de useParams con tipos personalizados
 *******************************************/
// Este ejemplo muestra cómo usar `useParams` con tipos personalizados.
// Es útil cuando necesitas asegurarte de que los parámetros sean de un tipo específico.

interface PostParams {
  postId: number; // Aunque useParams devuelve strings, puedes convertirlos a números.
}

const PostDetails = () => {
  const { postId } = useParams<PostParams>();
  const postIdNumber = parseInt(postId || "0", 10);

  return <p>Detalles del post: {postIdNumber}</p>;
};

const CustomTypesExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/post/1">Post 1</Link> | <Link to="/post/2">Post 2</Link>
      </nav>
      <Routes>
        <Route path="/post/:postId" element={<PostDetails />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 4: Uso de useParams con valores por defecto
 *******************************************/
// Este ejemplo muestra cómo manejar valores por defecto cuando los parámetros pueden ser undefined.
// Es útil cuando necesitas evitar errores si un parámetro no está presente.

interface BlogPostParams {
  postSlug?: string;
}

const BlogPost = () => {
  const { postSlug = "default-slug" } = useParams<BlogPostParams>();

  return <p>Slug del post: {postSlug}</p>;
};

const DefaultValuesExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/blog/my-post">Mi Post</Link> | <Link to="/blog">Post por defecto</Link>
      </nav>
      <Routes>
        <Route path="/blog/:postSlug?" element={<BlogPost />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 5: Uso de useParams con rutas anidadas
 *******************************************/
// Este ejemplo muestra cómo usar `useParams` en rutas anidadas.
// Es útil cuando tienes una jerarquía de rutas y necesitas acceder a parámetros en niveles más profundos.

interface TeamParams {
  teamId: string;
  memberId: string;
}

const TeamMember = () => {
  const { teamId, memberId } = useParams<TeamParams>();

  return (
    <p>
      Miembro {memberId} del equipo {teamId}.
    </p>
  );
};

const NestedRoutesExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/team/1/member/101">Equipo 1, Miembro 101</Link> |{" "}
        <Link to="/team/2/member/202">Equipo 2, Miembro 202</Link>
      </nav>
      <Routes>
        <Route path="/team/:teamId/member/:memberId" element={<TeamMember />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 6: Uso de useParams con validación de parámetros
 *******************************************/
// Este ejemplo muestra cómo validar los parámetros obtenidos con `useParams`.
// Es útil cuando necesitas asegurarte de que los parámetros cumplan ciertas condiciones.

interface ValidatedParams {
  userId: string;
}

const ValidatedUserProfile = () => {
  const { userId } = useParams<ValidatedParams>();

  if (!userId || isNaN(Number(userId))) {
    return <p>ID de usuario no válido.</p>;
  }

  return <p>Perfil del usuario: {userId}</p>;
};

const ValidationExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/user/1">Usuario 1</Link> | <Link to="/user/invalid">Usuario inválido</Link>
      </nav>
      <Routes>
        <Route path="/user/:userId" element={<ValidatedUserProfile />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 7: Uso de useParams con enums
 *******************************************/
// Este ejemplo muestra cómo usar `useParams` con enums para asegurar que los parámetros sean valores específicos.
// Es útil cuando necesitas restringir los valores posibles de un parámetro.

enum Category {
  Electronics = "electronics",
  Clothing = "clothing",
}

interface CategoryParams {
  category: Category;
}

const CategoryPage = () => {
  const { category } = useParams<CategoryParams>();

  return <p>Categoría seleccionada: {category}</p>;
};

const EnumParamsExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/category/electronics">Electrónica</Link> |{" "}
        <Link to="/category/clothing">Ropa</Link>
      </nav>
      <Routes>
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 8: Uso de useParams con objetos complejos
 *******************************************/
// Este ejemplo muestra cómo usar `useParams` con objetos complejos.
// Es útil cuando necesitas pasar múltiples valores en un solo parámetro (aunque no es común).

interface ComplexParams {
  data: string;
}

const ComplexParamsExample = () => {
  const { data } = useParams<ComplexParams>();
  const parsedData = data ? JSON.parse(data) : null;

  return <p>Datos complejos: {JSON.stringify(parsedData)}</p>;
};

const ComplexParamsUsage = () => {
  const complexData = JSON.stringify({ id: 1, name: "Ejemplo" });

  return (
    <Router>
      <nav>
        <Link to={`/complex/${encodeURIComponent(complexData)}`}>Ver datos complejos</Link>
      </nav>
      <Routes>
        <Route path="/complex/:data" element={<ComplexParamsExample />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 9: Uso de useParams con rutas dinámicas
 *******************************************/
// Este ejemplo muestra cómo usar `useParams` con rutas dinámicas.
// Es útil cuando necesitas crear rutas que cambian dinámicamente.

interface DynamicRouteParams {
  dynamicId: string;
}

const DynamicRoute = () => {
  const { dynamicId } = useParams<DynamicRouteParams>();

  return <p>Ruta dinámica: {dynamicId}</p>;
};

const DynamicRouteExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/dynamic/123">Ruta 123</Link> | <Link to="/dynamic/abc">Ruta ABC</Link>
      </nav>
      <Routes>
        <Route path="/dynamic/:dynamicId" element={<DynamicRoute />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 10: Uso de useParams con redirección
 *******************************************/
// Este ejemplo muestra cómo usar `useParams` junto con redirección.
// Es útil cuando necesitas redirigir al usuario basado en los parámetros de la URL.

import { useNavigate } from "react-router-dom";

interface RedirectParams {
  userId: string;
}

const RedirectExample = () => {
  const { userId } = useParams<RedirectParams>();
  const navigate = useNavigate();

  if (userId === "0") {
    navigate("/invalid-user");
  }

  return <p>Perfil del usuario: {userId}</p>;
};

const RedirectUsage = () => {
  return (
    <Router>
      <nav>
        <Link to="/user/1">Usuario 1</Link> | <Link to="/user/0">Usuario inválido</Link>
      </nav>
      <Routes>
        <Route path="/user/:userId" element={<RedirectExample />} />
        <Route path="/invalid-user" element={<p>Usuario inválido</p>} />
      </Routes>
    </Router>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosUseParams = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de useParams en React Router</h1>

      <BasicUseParamsExample />          {/* ESCENARIO 1: Uso básico de useParams */}
      <MultipleParamsExample />          {/* ESCENARIO 2: Uso de useParams con múltiples parámetros */}
      <CustomTypesExample />             {/* ESCENARIO 3: Uso de useParams con tipos personalizados */}
      <DefaultValuesExample />           {/* ESCENARIO 4: Uso de useParams con valores por defecto */}
      <NestedRoutesExample />            {/* ESCENARIO 5: Uso de useParams con rutas anidadas */}
      <ValidationExample />              {/* ESCENARIO 6: Uso de useParams con validación de parámetros */}
      <EnumParamsExample />              {/* ESCENARIO 7: Uso de useParams con enums */}
      <ComplexParamsUsage />             {/* ESCENARIO 8: Uso de useParams con objetos complejos */}
      <DynamicRouteExample />            {/* ESCENARIO 9: Uso de useParams con rutas dinámicas */}
      <RedirectUsage />                  {/* ESCENARIO 10: Uso de useParams con redirección */}
    </div>
  );
};

export default EjemplosUseParams;