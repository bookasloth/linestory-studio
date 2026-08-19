/** Template banner — reminds the reader this is a starter, not vetted legal text. */
export default function LegalNote() {
  return (
    <p className="mb-10 rounded-md border border-gold/40 bg-gold/5 px-5 py-4 text-sm text-ink-soft">
      <strong className="text-ink">Template notice:</strong> this is a generic
      starter. Replace the bracketed placeholders and have it reviewed by a
      qualified legal professional before publishing.
    </p>
  );
}
