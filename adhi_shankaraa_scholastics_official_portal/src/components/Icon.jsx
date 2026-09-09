/**
 * Material Symbols (Outlined) glyph. Mirrors the source markup:
 *   <span class="material-symbols-outlined ...">name</span>
 */
export default function Icon({ name, className = '' }) {
  return (
    <span className={`material-symbols-outlined ${className}`.trim()} aria-hidden="true">
      {name}
    </span>
  );
}
