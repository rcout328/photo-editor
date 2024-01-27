import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';
import 'instagram.css'; // Assuming Instagram.css is installed via npm

const filters = [
  { name: "1977", class: "filter-1977" },
  { name: "Aden", class: "filter-aden" },
  { name: "Amaro", class: "filter-amaro" },
  { name: "Ashby", class: "filter-ashby" },
  { name: "Brannan", class: "filter-brannan" },
  { name: "Brooklyn", class: "filter-brooklyn" },
  { name: "Charmes", class: "filter-charmes" },
  { name: "Clarendon", class: "filter-clarendon" },
  { name: "Crema", class: "filter-crema" },
  { name: "Dogpatch", class: "filter-dogpatch" },
  { name: "Earlybird", class: "filter-earlybird" },
  { name: "Gingham", class: "filter-gingham" },
  { name: "Ginza", class: "filter-ginza" },
  { name: "Hefe", class: "filter-hefe" },
  { name: "Helena", class: "filter-helena" },
  { name: "Hudson", class: "filter-hudson" },
  { name: "Inkwell", class: "filter-inkwell" },
  { name: "Kelvin", class: "filter-kelvin" },
  { name: "Juno", class: "filter-juno" }, // Corrected from Kuno to Juno
  { name: "Lark", class: "filter-lark" },
  { name: "Lo-Fi", class: "filter-lofi" },
  { name: "Ludwig", class: "filter-ludwig" },
  { name: "Maven", class: "filter-maven" },
  { name: "Mayfair", class: "filter-mayfair" },
  { name: "Moon", class: "filter-moon" },
  { name: "Nashville", class: "filter-nashville" },
  { name: "Perpetua", class: "filter-perpetua" },
  { name: "Poprocket", class: "filter-poprocket" },
  { name: "Reyes", class: "filter-reyes" },
  { name: "Rise", class: "filter-rise" },
  { name: "Sierra", class: "filter-sierra" },
  { name: "Skyline", class: "filter-skyline" },
  { name: "Slumber", class: "filter-slumber" },
  { name: "Stinson", class: "filter-stinson" },
  { name: "Sutro", class: "filter-sutro" },
  { name: "Toaster", class: "filter-toaster" },
  { name: "Valencia", class: "filter-valencia" },
  { name: "Vesper", class: "filter-vesper" },
  { name: "Walden", class: "filter-walden" },
  { name: "Willow", class: "filter-willow" },
  { name: "X-Pro II", class: "filter-xpro-ii" }
];

const File = () => {
  const [image, setImage] = useState(null);
  const [filter, setFilter] = useState('');

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  const download = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        saveAs(blob, 'image.jpg');
      });
    };
    img.src = image;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-600 flex flex-col items-center justify-center p-4">
      <div className="mb-4 max-w-lg w-full bg-white rounded-lg p-6 shadow-lg">
        <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">Back</Link>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Upload Image</h1>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            className="file-input mb-4 border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 transition duration-300"
            onChange={handleImage}
          />
          {image && (
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-800">Image Preview</h2>
              <figure className={`${filter} max-w-xs md:max-w-lg`}>
                <img src={image} alt="Uploaded" className="rounded-lg shadow-lg" />
              </figure>
              <select
                className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="">Select a Filter</option>
                {filters.map((f) => (
                  <option key={f.name} value={f.class}>{f.name}</option>
                ))}
              </select>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={download}
              >
                Download
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default File;
