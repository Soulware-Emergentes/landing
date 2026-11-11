# Landing SGT

Página estática de DEPRO que presenta el Sistema de Gestión Territorial (SGT): qué es, procedimiento, qué cambia, usuarios y seguimiento POI/PEI.

## Levantar en local

```bash
python3 -m http.server 8000
```

Abrir http://localhost:8000.

## Link "Ingresar a SGT"

Se define con la variable de repositorio `SGT_URL` (Settings → Secrets and variables → Actions → Variables). El workflow `.github/workflows/pages.yml` la inyecta en `config.js` al desplegar en GitHub Pages. Sin la variable, el link queda en `#`.
