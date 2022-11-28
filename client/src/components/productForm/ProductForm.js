import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../card/Card";

import "./ProductForm.scss";

const CompanyForm = ({
  Company,
  
  description,
  setDescription,
  handleInputChange,
  
  saveProduct,
}) => {
  return (
    <div className="add-company-name">
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
          
          <label>Company Name:</label>
          <input
            type="text"
            placeholder="Company name"
            name="name"
            value={Company?.name}
            onChange={handleInputChange}
          />

          <label>Operating Country:</label>
          <input
            type="text"
            placeholder="Product Category"
            name="category"
            value={Company?.category}
            onChange={handleInputChange}
          />

          <label>Number of employees:</label>
          <input
            type="text"
            placeholder="Product Price"
            name="price"
            value={Company?.price}
            onChange={handleInputChange}
          />

          <label>:</label>
          <input
            type="text"
            placeholder="Product Quantity"
            name="quantity"
            value={Company?.quantity}
            onChange={handleInputChange}
          />

          <label>Product Description:</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={CompanyForm.modules}
            formats={CompanyForm.formats}
          />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Save Details
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

CompanyForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
CompanyForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default CompanyForm;
