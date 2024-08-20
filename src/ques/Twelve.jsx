import React, { useState } from "react";

const Twelve = () => {
  const [file, setFile] = useState(null);
  const handleFileChnage = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChnage} />
      {file && <img src={URL.createObjectURL(file)} alt="Uploaded" />}
    </div>
  );
};

export default Twelve;
