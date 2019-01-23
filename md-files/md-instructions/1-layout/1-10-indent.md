Formato de código
=================

Aunque inicialmente se añadió eslint y stylelint, al finalizar la maquetación me he dado cuenta que la indentación del html y el css no son las adecuadas.

Voy a usar el "Format document" de Vetur para que todos los ficheros tengan la misma indentación. Para cada fichero, seleccionar todo y con botón derecho "Format document". Algunas líneas he tenido que arreglarlas después del cambio, pero así todos los documentos tendrán la misma identación.

Nota: Si se tienen las configuraciones en VSCode que voy a poner a continuación, al dar a guardar después de hacer "Format document" se corrigen los posibles errores que pueda haber:

```
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    { "language": "vue", "autoFix": true }
  ]
}
```

Además al ejecutar `npm run lint:js` dio un error en `nuxt.config.js` que se ha corregido. Stylelint no me está funcionando como quiero, así que tengo un `TODO` que hacer del proyecto.