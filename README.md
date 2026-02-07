# Playwright Visual Regression Demo

Mini proyecto de exploración de **Visual Regression Testing** utilizando **Playwright con TypeScript**.

---

## Objetivo

Implementar pruebas automatizadas que detecten cambios visuales inesperados en una aplicación web mediante el uso de snapshots.

---

## Alcance del proyecto

- Screenshot completo de página con `toHaveScreenshot`
- Screenshot de componente específico
- Gestión de imágenes baseline
- Comparación pixel a pixel en ejecuciones posteriores
- Simulación de cambio visual para validar la detección de diferencias (diff)

---

## Stack utilizado

- Playwright
- TypeScript
- Node.js

---

## Cómo ejecutar el proyecto

### Instalar dependencias

```bash
npm install
```

### Ejecutar los tests

```bash
npx playwright test
```

### Actualizar snapshots (cuando el cambio visual es intencional)

```bash
npx playwright test --update-snapshots
```

---

## Nota

El Visual Regression Testing no reemplaza los tests funcionales, pero complementa la estrategia de automatización al proteger la estabilidad visual de la interfaz frente a cambios o refactors.

---

## Autor

**Emiliano Maure**  
QA Automation
