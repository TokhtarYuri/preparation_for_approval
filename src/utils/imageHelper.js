/**
 * Утилита для получения правильного пути к изображению в Next.js
 * @param {string|object} imageSrc - Импортированное изображение
 * @returns {string} - Путь к изображению
 */
export function getImageSrc(imageSrc) {
  if (!imageSrc) return '';
  
  // Если это строка (уже путь)
  if (typeof imageSrc === 'string') {
    return imageSrc;
  }
  
  // Если это объект
  if (typeof imageSrc === 'object') {
    // Next.js обработанное изображение (PNG/JPG)
    if (imageSrc.src) {
      return imageSrc.src;
    }
    
    // ES модуль с default
    if (imageSrc.default) {
      return typeof imageSrc.default === 'string' 
        ? imageSrc.default 
        : getImageSrc(imageSrc.default);
    }
    
    // SVG как React компонент - получаем путь из __esModule или других свойств
    if (imageSrc.__esModule) {
      // Попробуем найти путь в различных свойствах
      for (const key in imageSrc) {
        if (key !== '__esModule' && typeof imageSrc[key] === 'string') {
          return imageSrc[key];
        }
      }
    }
    
    // Если объект имеет только одно строковое свойство
    const keys = Object.keys(imageSrc);
    if (keys.length === 1 && typeof imageSrc[keys[0]] === 'string') {
      return imageSrc[keys[0]];
    }
  }
  
  // Fallback - попробуем преобразовать в строку
  return String(imageSrc);
}

