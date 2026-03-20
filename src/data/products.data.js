const productsData = [
  // Categoría: Ordenadores
  { id: 1, name: "Laptop Pro 15", price: 1200, category_id: 1, description: "Laptop profesional de 15 pulgadas con alto rendimiento." },
  { id: 21, name: "Laptop Gaming RTX", price: 1800, category_id: 1, description: "Laptop gaming con GPU RTX y pantalla 144Hz." },
  { id: 22, name: "Desktop i7 Tower", price: 950, category_id: 1, description: "PC de torre con procesador Intel i7 potente." },

  // Categoría: Periféricos
  { id: 2, name: "Mouse Inalámbrico", price: 25, category_id: 2, description: "Mouse ergonómico inalámbrico de alta precisión." },
  { id: 3, name: "Teclado Mecánico RGB", price: 85, category_id: 2, description: "Teclado mecánico con iluminación RGB personalizable." },
  { id: 15, name: "Tableta Gráfica", price: 130, category_id: 2, description: "Tableta gráfica sensible a presión para diseño digital." },
  { id: 23, name: "Trackpad Multi-touch", price: 55, category_id: 2, description: "Trackpad multitáctil preciso para laptops." },
  { id: 24, name: "Scanner de Documentos", price: 120, category_id: 2, description: "Escáner portátil para documentos y fotos." },
  { id: 25, name: "Lápiz Óptico", price: 70, category_id: 2, description: "Lápiz digital sensible a presión para dibujo." },

  // Categoría: Componentes
  { id: 9, name: "Memoria RAM 16GB DDR4", price: 75, category_id: 3, description: "Módulo RAM DDR4 de 16GB para multitarea fluida." },
  { id: 10, name: "Tarjeta de Video RTX 3060", price: 420, category_id: 3, description: "GPU NVIDIA RTX 3060 ideal para gaming y edición." },
  { id: 26, name: "SSD NVMe 1TB", price: 110, category_id: 3, description: "Unidad SSD NVMe de 1TB de alta velocidad." },
  { id: 27, name: "Procesador Ryzen 7", price: 320, category_id: 3, description: "CPU AMD Ryzen 7 para rendimiento extremo." },

  // Categoría: Monitores
  { id: 4, name: "Monitor 27' 4K", price: 350, category_id: 4, description: "Monitor de 27 pulgadas con resolución 4K Ultra HD." },
  { id: 28, name: "Monitor Ultrawide 34", price: 450, category_id: 4, description: "Monitor ultrawide de 34 pulgadas curvo." },

  // Categoría: Accesorios
  { id: 5, name: "Audífonos Noise Cancelling", price: 150, category_id: 5, description: "Audífonos con cancelación de ruido activa para concentración total." },
  { id: 6, name: "Webcam Full HD", price: 60, category_id: 5, description: "Webcam de alta definición 1080p con enfoque automático." },
  { id: 7, name: "Impresora Multifuncional", price: 180, category_id: 5, description: "Impresora multifunción: imprime, escanea y copia." },
  { id: 8, name: "Disco Duro Externo 2TB", price: 90, category_id: 5, description: "Almacenamiento externo portátil de 2TB con alta velocidad." },
  { id: 11, name: "Microscopio Digital USB", price: 45, category_id: 5, description: "Microscopio digital USB con pantalla integrada." },
  { id: 12, name: "Silla Ergonómica Gamer", price: 210, category_id: 5, description: "Silla gaming ergonómica con soporte lumbar ajustable." },
  { id: 13, name: "Escritorio Elevable", price: 300, category_id: 5, description: "Escritorio ajustable en altura para comodidad." },
  { id: 14, name: "Router Wi-Fi 6", price: 110, category_id: 5, description: "Router Wi-Fi 6 de alta velocidad para hogares grandes." },
  { id: 16, name: "Smartphone de Pruebas", price: 250, category_id: 5, description: "Smartphone de desarrollo con especificaciones premium." },
  { id: 17, name: "Smartwatch Deportivo", price: 95, category_id: 5, description: "Reloj inteligente con GPS y monitoreo cardíaco." },
  { id: 18, name: "Cargador USB-C 65W", price: 35, category_id: 5, description: "Cargador rápido USB-C de 65W compatible con múltiples dispositivos." },
  { id: 19, name: "Hub USB-C 7 en 1", price: 50, category_id: 5, description: "Hub multifunción USB-C con puertos HDMI, USB y Ethernet." },
  { id: 20, name: "Parlante Bluetooth Portátil", price: 40, category_id: 5, description: "Altavoz Bluetooth compacto con batería de larga duración." },
  { id: 29, name: "Lámpara LED Escritorio", price: 45, category_id: 5, description: "Lámpara de escritorio LED ajustable y sin parpadeo." },
  { id: 30, name: "Cámara IP Seguridad", price: 80, category_id: 5, description: "Cámara de seguridad Wi-Fi con visión nocturna." },

  // Categoría: Impresoras
  { id: 31, name: "Impresora Láser Color", price: 280, category_id: 6, description: "Impresora láser a color de alta velocidad." },

  // Categoría: Muebles
  { id: 32, name: "Gabinete para PC", price: 140, category_id: 7, description: "Caja ATX con excelente flujo de aire." },

  // Categoría: Redes
  { id: 33, name: "Switch Gigabit 8P", price: 65, category_id: 8, description: "Switch de red Gigabit con 8 puertos." },
  { id: 34, name: "Módem Fibra Óptica", price: 160, category_id: 8, description: "Módem para conexiones de fibra óptica rápida." },

  // Categoría: Móviles
  { id: 35, name: "Smartphone Premium", price: 800, category_id: 9, description: "Teléfono inteligente flagship con cámara avanzada." },
  { id: 36, name: "Auriculares True Wireless", price: 120, category_id: 9, description: "Auriculares inalámbricos con cancelación de ruido." },

  // Categoría: Audio
  { id: 37, name: "Soundbar 2.1", price: 220, category_id: 10, description: "Barra de sonido 2.1 con subwoofer inalámbrico." },
  { id: 38, name: "Subwoofer Activo", price: 190, category_id: 10, description: "Subwoofer activo con graves profundos." },
  { id: 39, name: "Micrófono USB Condensador", price: 105, category_id: 10, description: "Micrófono de condensador USB para streaming." },
  { id: 40, name: "Auriculares Over-Ear Pro", price: 200, category_id: 10, description: "Auriculares profesionales over-ear con sonido Hi-Fi." }
];

export default productsData;

