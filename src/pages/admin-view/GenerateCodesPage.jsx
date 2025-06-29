import { useState } from "react";
import axios from "axios";
import { url } from "@/store/api";

function GenerateCodesPage() {
  const [quantity, setQuantity] = useState(1);
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleGenerateCodes = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setCodes([]);

    try {
      const response = await axios.post(
        `${url}admin/code/generate-codes`,
        {
          quantity,
          length: 8, // hardcoded length
        },
        {
          withCredentials: true,
        }
      );

      setCodes(response.data.codes);
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message || "Error generating registration codes"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">
        Generate Registration Codes
      </h2>

      <form onSubmit={handleGenerateCodes} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">
            Quantity (1 - 1000)
          </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min={1}
            max={1000}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Generating..." : "Generate Codes"}
        </button>
      </form>

      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}

      {codes.length > 0 && (
        <div className="mt-4">
          <h4 className="font-medium mb-2">Generated Codes:</h4>
          <ul className="space-y-1 text-sm text-green-700">
            {codes.map((code, index) => (
              <li key={index}>{code}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GenerateCodesPage;
