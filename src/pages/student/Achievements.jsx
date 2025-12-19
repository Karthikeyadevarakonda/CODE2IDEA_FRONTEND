import { FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Achievements({ achievements, name }) {
  if (!achievements?.length) return null;

  const generateCertificate = async (achievement) => {
    const cert = document.createElement("div");

    cert.style.width = "1200px";
    cert.style.height = "800px";
    cert.style.padding = "60px";
    cert.style.background = "#F8F6F1";
    cert.style.border = "12px double #C9A227";
    cert.style.borderRadius = "18px";
    cert.style.fontFamily = "Georgia, serif";
    cert.style.color = "#2d2d2d";
    cert.style.textAlign = "center";
    cert.style.position = "relative";

    cert.innerHTML = `
      <div style="font-size:70px; margin-bottom:10px;">🏅</div>

      <h1 style="font-size:56px; color:#C9A227; margin-bottom:10px;">
        Certificate of Achievement
      </h1>

      <p style="font-size:22px; margin-top:10px;">
        This certificate is proudly presented to
      </p>

      <h2 style="font-size:46px; margin:25px 0; text-decoration: underline;">
        ${name}
      </h2>

      <p style="font-size:24px;">
        For securing
      </p>

      <h3 style="font-size:34px; color:#444; margin:15px 0;">
        🏆 Rank ${achievement.rank}
      </h3>

      <p style="font-size:26px; margin-top:10px;">
        in the
      </p>

      <h3 style="font-size:32px; font-weight:bold; margin-top:10px;">
        ${achievement.contest}
      </h3>

      <div style="position:absolute; bottom:60px; left:80px; font-size:20px;">
        🎗️ Authorized Signature
      </div>

      <div style="position:absolute; bottom:60px; right:80px; font-size:20px;">
        📅 ${new Date().getFullYear()}
      </div>
    `;

    document.body.appendChild(cert);

    const canvas = await html2canvas(cert, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    document.body.removeChild(cert);

    const pdf = new jsPDF("landscape", "px", [canvas.width, canvas.height]);
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`${achievement.contest}-Certificate.pdf`);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
        🏆 Achievements
      </h2>

      <div className="flex flex-col gap-4">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="border border-gray-300 rounded-xl p-4 flex justify-between items-center hover:shadow-lg transition"
          >
            <div>
              <p className="font-semibold text-gray-800">🎖 {a.contest}</p>
              <p className="text-sm text-gray-500">🏅 Rank {a.rank}</p>
            </div>

            {/* Download Button */}
            <button
              onClick={() => generateCertificate(a)}
              className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
              title="Download Certificate"
            >
              <FaDownload className="text-lg md:text-base" />
              <span className="hidden md:inline">Download</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
