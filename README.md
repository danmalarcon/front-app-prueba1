# 📱 Gestor de Suscripciones PixelHub

Una aplicación web moderna para gestionar suscripciones digitales, desarrollada con React.js y Bootstrap. Permite a los usuarios autenticarse y administrar sus servicios de suscripción de forma intuitiva y eficiente.

## 🚀 Características

- **Autenticación de usuarios**: Sistema de login seguro
- **Gestión completa de suscripciones**: Crear, leer, actualizar y eliminar
- **Búsqueda y filtrado**: Encuentra rápidamente tus suscripciones
- **Diseño responsive**: Adaptado para dispositivos móviles y desktop
- **Interfaz moderna**: Diseño limpio con Bootstrap 5
- **Validaciones visuales**: Confirmaciones con SweetAlert2

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React.js 18+, Vite
- **Estilos**: Bootstrap 5
- **Routing**: React Router DOM
- **Alertas**: SweetAlert2
- **Backend**: JSON Server (API REST simulada)
- **Deployment**: Vercel

## 📋 Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js (versión 16 o superior)
- npm o yarn
- Git

## 🔧 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/gestor-suscripciones-pixelhub.git
   cd gestor-suscripciones-pixelhub
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── assets/          # Imágenes y recursos estáticos
├── auth/           # Componentes de autenticación
├── components/     # Componentes reutilizables
├── pages/          # Páginas principales
│   ├── LoginPage.jsx
│   └── DashboardPage.jsx
├── services/       # Servicios para API calls
├── App.jsx         # Componente principal
├── main.jsx        # Punto de entrada
└── index.css       # Estilos globales
```

## 🌐 API Endpoints

El proyecto utiliza una API REST desplegada en Render para el backend:

**Base URL**: `https://api-prueba1-eog3.onrender.com`

### Usuarios
- `GET /users` - Obtener todos los usuarios
- `POST /users` - Crear nuevo usuario
- `GET /users/:id` - Obtener usuario por ID

### Suscripciones
- `GET /suscripciones` - Obtener todas las suscripciones
- `POST /suscripciones` - Crear nueva suscripción
- `GET /suscripciones/:id` - Obtener suscripción por ID
- `PUT /suscripciones/:id` - Actualizar suscripción
- `DELETE /suscripciones/:id` - Eliminar suscripción

## 🌍 URLs de Despliegue

- **Frontend (Vercel)**: `https://front-app-prueba1.vercel.app`
- **Backend API (Render)**: `https://api-prueba1-eog3.onrender.com`
- **Repositorio API**: `https://github.com/danmalarcon/API-Prueba1.git`

## 📱 Funcionalidades

### Autenticación
- Login con email y contraseña
- Validación de credenciales contra la API
- Protección de rutas privadas
- Logout seguro

### Gestión de Suscripciones
- **Crear**: Agregar nuevas suscripciones con nombre, costo, categoría y fecha
- **Leer**: Visualizar todas las suscripciones en formato de tarjetas
- **Actualizar**: Editar información de suscripciones existentes
- **Eliminar**: Borrar suscripciones con confirmación
- **Buscar**: Filtrar suscripciones por nombre o categoría

## 🎯 Cómo Usar

1. **Inicio de Sesión**
   - Accede a la aplicación
   - Ingresa tu email y contraseña
   - Haz clic en "Ingresar"

2. **Gestionar Suscripciones**
   - Una vez autenticado, serás redirigido al dashboard
   - Usa el botón "Agregar Suscripción" para crear nuevas
   - Haz clic en "Editar" para modificar existentes
   - Usa "Eliminar" para borrar (con confirmación)
   - Utiliza la barra de búsqueda para filtrar

## 🚀 Despliegue

### Despliegue en Vercel

1. **Preparar para producción**
   ```bash
   npm run build
   ```

2. **Conectar con Vercel**
   - Sube tu código a GitHub
   - Conecta tu repositorio con Vercel
   - Configura las variables de entorno si es necesario
   - Despliega automáticamente

3. **Acceder a la aplicación**
   - URL de producción: `https://front-app-prueba1.vercel.app`

**Nota**: El frontend en Vercel se comunica con la API desplegada en Render (`https://api-prueba1-eog3.onrender.com`). El código fuente de la API está disponible en: `https://github.com/danmalarcon/API-Prueba1.git`

## 🔐 Datos de Prueba

Para probar la aplicación, puedes usar estos datos de ejemplo:

**Usuario de prueba:**
- Email: `admin@pixelhub.com`
- Contraseña: `123456`

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes problemas o preguntas:

1. Revisa la documentación
2. Busca en los issues existentes
3. Crea un nuevo issue con detalles del problema

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado como parte de una prueba técnica para PixelHub S.A.S

---

⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!

## 📚 Recursos Adicionales

- [Documentación de React](https://reactjs.org/docs)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0)
- [React Router](https://reactrouter.com)
- [SweetAlert2](https://sweetalert2.github.io)
- [Vite Documentation](https://vitejs.dev)

## 🔄 Próximas Mejoras

- [ ] Implementar autenticación JWT
- [ ] Agregar categorías personalizadas
- [ ] Notificaciones de renovación
- [ ] Gráficos de gastos mensuales
- [ ] Exportar datos a CSV
- [ ] Modo oscuro
- [ ] PWA (Progressive Web App)