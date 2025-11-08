export function useTesting(componentName: string) {
  
  const pruebas = {
    // PRUEBA DE PROPS
    props: (props: any) => {
      console.log(`[${componentName}] Props recibidas:`, props);
    },

    // PRUEBA DE ESTADO
    estado: (nombreEstado: string, valor: any) => {
      console.log(`[${componentName}] Estado "${nombreEstado}":`, valor);
    },

    // PRUEBA DE EVENTOS
    evento: (nombreEvento: string, datos: any) => {
      console.log(`[${componentName}] Evento "${nombreEvento}":`, {
        ...datos,
        timestamp: new Date().toISOString()
      });
    },

    // PRUEBA DE RENDERIZADO
    render: (datos: any) => {
      console.log(`[${componentName}] Renderizado:`, datos);
    },

    // PRUEBA DE RENDERIZADO CONDICIONAL
    renderCondicional: (condicion: string, datos: any) => {
      console.log(`[${componentName}] Render Condicional "${condicion}":`, datos);
    },

    // EJECUTAR TODAS LAS PRUEBAS
    ejecutarTodas: (datos: any) => {
      console.log(`[${componentName}] === EJECUTANDO TODAS LAS PRUEBAS ===`);
      console.log(` Datos actuales:`, datos);
    }
  };

  return pruebas;
}