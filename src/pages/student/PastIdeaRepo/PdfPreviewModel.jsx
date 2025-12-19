export default function PdfPreviewModal({ url, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl h-[80vh] relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✖
        </button>

        <iframe
          src={url}
          title="PDF Preview"
          className="w-full h-full rounded-b-xl"
        />
      </div>
    </div>
  );
}
