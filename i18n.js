// i18n: en-US (default) and es-419.
// Elements use data-i18n="key" (text) and data-i18n-attr="attr:key;attr:key" (attributes).
(() => {
  'use strict';

  const DEFAULT_LANG = 'en-US';
  const STORAGE_KEY = 'sgt-lang';

  const MESSAGES = {
    'en-US': {
      'meta.title': 'SGT · Territorial Management System · DEPRO',
      'meta.description': "DEPRO's Territorial Management System (SGT): registration and approval of plots, beneficiaries and field sheets for monitoring the POI and PEI.",
      'a11y.skip': 'Skip to content',
      'lang.group': 'Language',

      'nav.label': 'Main navigation',
      'nav.home': 'SGT, go to home',
      'nav.org': 'DEPRO · Strategic Production Directorate',
      'nav.sections': 'Sections',
      'nav.what': 'What is SGT',
      'nav.procedure': 'Procedure',
      'nav.changes': 'What changes',
      'nav.users': 'Users',
      'nav.signIn': 'Sign in to SGT',
      'nav.menuOpen': 'Open menu',
      'nav.menuClose': 'Close menu',

      'hero.eyebrow': 'DEPRO · TERRITORIAL MANAGEMENT SYSTEM',
      'hero.title': 'DEPRO implements the Territorial Management System (SGT)',
      'hero.lead': 'SGT records plots, beneficiaries and field sheets in a single system. Approved information is used to monitor the Institutional Operating Plan (POI) and the Institutional Strategic Plan (PEI).',
      'hero.cta': 'View procedure',

      'flow.title': 'Information flow',
      'flow.aria': 'Information flow: Plot, Field sheet, POI and PEI',
      'flow.plot': 'Plot',
      'flow.sheet': 'Field sheet',
      'flow.plans': 'POI and PEI',

      'how.eyebrow': 'PROCEDURE',
      'how.title': 'Registration and approval of information',
      'how.intro': 'The field agent registers the plot and the field sheet at different times. SGT links both records for review by General Management.',

      'map.aria': 'Territorial view with a measured plot and its draft record',
      'map.title': 'Territorial view',
      'map.tag': 'SGT · Plots',
      'map.legend': 'Measured plot',
      'map.cardTitle': 'Plot record',
      'map.cardTitleShort': 'Plot',
      'map.cardLabel': 'Measurement file',
      'map.status': 'DRAFT',
      'map.cardDesc': 'The agent accepts the plot on the web after returning to the office.',

      'step1.title': 'Plot registration',
      'step1.body': 'From the mobile app, the agent sends the total station measurement. After returning to the office, the agent accepts the plot in the web version.',
      'step2.title': 'Field sheet upload',
      'step2.body': 'After the field evaluation, the agent scans the field sheet and uploads it as a PDF, linked to the beneficiary and the plot. The field sheet remains pending review.',
      'step3.title': 'Field sheet approval',
      'step3.body': 'The General Management assistant compares the AI-extracted data with the PDF and approves the field sheet. The approved information is added to the POI and PEI activities.',

      'changes.eyebrow': 'WHAT CHANGES',
      'changes.title': 'Linked and verifiable information',
      'changes.intro': 'Each field sheet is linked to its plot and beneficiary, and its review is recorded.',
      'f1.label': '01 · LINK',
      'f1.title': 'Linked records',
      'f1.body': 'The evaluation PDF is linked to the corresponding beneficiary and plot.',
      'f2.label': '02 · REVIEW',
      'f2.title': 'Review against the original document',
      'f2.body': 'General Management compares the AI-extracted data with the digital copy of the field sheet.',
      'f3.label': '03 · INTEGRITY',
      'f3.title': 'Integrity and approval record',
      'f3.body': 'SGT verifies that the PDF has not been modified and records who approved the field sheet and when.',

      'users.eyebrow': 'USERS',
      'users.title': 'SGT users',
      'users.intro': 'SGT is used by field agents and the General Management assistant.',
      'role1.eyebrow': '01 · FIELD AGENT',
      'role1.title': 'Plot and field sheet registration',
      'role1.body': 'Sends the measurement from the mobile app and accepts the plot in the web version after returning to the office. Also scans and uploads the field sheet as a PDF, linked to the beneficiary and the plot.',
      'role1.alt': 'SGT mobile app: the agent attaches the total station file',
      'role2.eyebrow': '02 · GENERAL MANAGEMENT ASSISTANT',
      'role2.title': 'Field sheet approval',
      'role2.body': 'Compares the AI-extracted data with the scanned PDF and approves the field sheet. The approved information is added to the POI and PEI activities.',
      'role2.alt': 'SGT web: General Management approves a field sheet by comparing the detected data with the original document',

      'tracking.eyebrow': 'INSTITUTIONAL MONITORING',
      'tracking.title': 'Use of information in the POI and PEI',
      'tracking.intro': 'After the field sheet is approved, DEPRO adds the evaluation information to the activities that monitor the POI and PEI.',
      'poi.title': 'POI · Institutional Operating Plan',
      'poi.body': 'Approved evaluations are added to the monitoring of operational activities.',
      'pei.title': 'PEI · Institutional Strategic Plan',
      'pei.body': 'Consolidated information contributes to monitoring strategic objectives.',

      'footer.desc': 'Territorial Management System of the Strategic Production Directorate (DEPRO).',
      'footer.explore': 'Explore',
      'footer.internal': 'INTERNAL USE',
      'footer.bottomLeft': 'DEPRO · SGT · Territorial Management System',
      'footer.bottomRight': 'Strategic Production Directorate'
    },

    'es-419': {
      'meta.title': 'SGT · Sistema de Gestión Territorial · DEPRO',
      'meta.description': 'Sistema de Gestión Territorial (SGT) de la Dirección Estratégica de Producción (DEPRO): registro y validación de terrenos, beneficiarios y fichas de evaluación para el seguimiento del POI y del PEI.',
      'a11y.skip': 'Saltar al contenido',
      'lang.group': 'Idioma',

      'nav.label': 'Navegación principal',
      'nav.home': 'SGT, ir al inicio',
      'nav.org': 'DEPRO · Dirección Estratégica de Producción',
      'nav.sections': 'Secciones',
      'nav.what': 'Qué es SGT',
      'nav.procedure': 'Procedimiento',
      'nav.changes': 'Qué cambia',
      'nav.users': 'Usuarios',
      'nav.signIn': 'Ingresar a SGT',
      'nav.menuOpen': 'Abrir menú',
      'nav.menuClose': 'Cerrar menú',

      'hero.eyebrow': 'DEPRO · SISTEMA DE GESTIÓN TERRITORIAL',
      'hero.title': 'DEPRO implementa el Sistema de Gestión Territorial (SGT)',
      'hero.lead': 'El SGT registra en un solo sistema los terrenos, los beneficiarios y las fichas de evaluación. La información validada se usa en el seguimiento del Plan Operativo Institucional (POI) y del Plan Estratégico Institucional (PEI).',
      'hero.cta': 'Ver procedimiento',

      'flow.title': 'Flujo de la información',
      'flow.aria': 'Flujo de la información: Terreno, Ficha, POI y PEI',
      'flow.plot': 'Terreno',
      'flow.sheet': 'Ficha',
      'flow.plans': 'POI y PEI',

      'how.eyebrow': 'PROCEDIMIENTO',
      'how.title': 'Registro y validación de la información',
      'how.intro': 'El agente de campo registra el terreno y la ficha de evaluación en momentos distintos. El SGT vincula ambos registros para su revisión por Gerencia General.',

      'map.aria': 'Vista territorial con un terreno medido y su registro en borrador',
      'map.title': 'Vista territorial',
      'map.tag': 'SGT · Terrenos',
      'map.legend': 'Terreno medido',
      'map.cardTitle': 'Registro de terreno',
      'map.cardTitleShort': 'Terreno',
      'map.cardLabel': 'Archivo de medición',
      'map.status': 'BORRADOR',
      'map.cardDesc': 'El agente acepta el terreno en la web al volver a la oficina.',

      'step1.title': 'Registro del terreno',
      'step1.body': 'El agente envía desde la aplicación móvil la medición de la estación total. Al regresar a la oficina, acepta el terreno en la versión web.',
      'step2.title': 'Carga de la ficha de evaluación',
      'step2.body': 'Tras la evaluación en campo, el agente escanea la ficha y la carga en PDF, vinculada al beneficiario y al terreno. La ficha queda pendiente de revisión.',
      'step3.title': 'Validación de la ficha',
      'step3.body': 'El asistente de Gerencia General contrasta los datos extraídos por IA con el PDF y valida la ficha. La información validada se incorpora a las actividades del POI y del PEI.',

      'changes.eyebrow': 'QUÉ CAMBIA',
      'changes.title': 'Información vinculada y verificable',
      'changes.intro': 'Cada ficha de evaluación queda asociada a su terreno y a su beneficiario, y su revisión queda registrada.',
      'f1.label': '01 · VÍNCULO',
      'f1.title': 'Registros vinculados',
      'f1.body': 'El PDF de la evaluación queda asociado al beneficiario y al terreno correspondientes.',
      'f2.label': '02 · REVISIÓN',
      'f2.title': 'Revisión contra el documento original',
      'f2.body': 'Gerencia General compara los datos extraídos por IA con la copia digital de la ficha.',
      'f3.label': '03 · INTEGRIDAD',
      'f3.title': 'Integridad y registro de la validación',
      'f3.body': 'El SGT verifica que el PDF no haya sido modificado y registra quién validó la ficha y en qué fecha.',

      'users.eyebrow': 'USUARIOS',
      'users.title': 'Usuarios del SGT',
      'users.intro': 'El SGT lo utilizan los agentes de campo y el asistente de Gerencia General.',
      'role1.eyebrow': '01 · AGENTE DE CAMPO',
      'role1.title': 'Registro de terrenos y fichas',
      'role1.body': 'Envía la medición desde la aplicación móvil y acepta el terreno en la versión web al regresar a la oficina. También escanea y carga la ficha de evaluación en PDF, vinculada al beneficiario y al terreno.',
      'role1.alt': 'Aplicación móvil SGT: el agente adjunta el archivo de la estación total',
      'role2.eyebrow': '02 · ASISTENTE DE GERENCIA GENERAL',
      'role2.title': 'Validación de fichas',
      'role2.body': 'Contrasta los datos extraídos por IA con el PDF escaneado y valida la ficha. La información validada se incorpora a las actividades del POI y del PEI.',
      'role2.alt': 'SGT web: gerencia valida una ficha comparando los datos detectados con el documento original',

      'tracking.eyebrow': 'SEGUIMIENTO INSTITUCIONAL',
      'tracking.title': 'Uso de la información en el POI y el PEI',
      'tracking.intro': 'Tras validar la ficha, DEPRO incorpora la información de la evaluación a las actividades que dan seguimiento al POI y al PEI.',
      'poi.title': 'POI · Plan Operativo Institucional',
      'poi.body': 'Las evaluaciones validadas se incorporan al seguimiento de las actividades operativas.',
      'pei.title': 'PEI · Plan Estratégico Institucional',
      'pei.body': 'La información consolidada contribuye al seguimiento de los objetivos estratégicos.',

      'footer.desc': 'Sistema de Gestión Territorial de la Dirección Estratégica de Producción (DEPRO).',
      'footer.explore': 'Explorar',
      'footer.internal': 'USO INTERNO',
      'footer.bottomLeft': 'DEPRO · SGT · Sistema de Gestión Territorial',
      'footer.bottomRight': 'Dirección Estratégica de Producción'
    }
  };

  const readStored = () => {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  };
  const store = (lang) => {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
  };

  let current = MESSAGES[readStored()] ? readStored() : DEFAULT_LANG;

  const t = (key) => {
    const value = MESSAGES[current][key];
    return value != null ? value : MESSAGES[DEFAULT_LANG][key];
  };

  const apply = () => {
    document.documentElement.lang = current;
    document.title = t('meta.title');
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.description'));

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const value = t(el.dataset.i18n);
      if (value != null) el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        const value = t(key);
        if (attr && value != null) el.setAttribute(attr, value);
      });
    });
    document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.langSwitch === current));
    });
    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: current } }));
  };

  const setLang = (lang) => {
    if (!MESSAGES[lang] || lang === current) return;
    current = lang;
    store(lang);
    apply();
  };

  document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.langSwitch));
  });

  window.I18N = { t, setLang, get lang() { return current; } };
  apply();
})();
