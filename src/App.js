import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phoneNumber: "",
    income: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // สำหรับตรวจสอบข้อมูลที่ถูกส่งไป
    // ใส่โค้ดเพื่อบันทึกข้อมูลได้ที่นี่
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">ข้อมูลบุคคล</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            ชื่อ:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            อีเมลล์:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            อายุ:
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            เบอร์โทรศัพท์:
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="income" className="form-label">
            รายได้ต่อเดือน:
          </label>
          <input
            type="number"
            className="form-control"
            id="income"
            name="income"
            value={formData.income}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          บันทึก
        </button>
      </form>
      {/* แสดงผลข้อมูลที่ถูกป้อน */}
      <div className="mt-5">
        <h2>ข้อมูลที่ถูกบันทึก</h2>
        <p>ชื่อ: {formData.name}</p>
        <p>อีเมลล์: {formData.email}</p>
        <p>อายุ: {formData.age}</p>
        <p>เบอร์โทรศัพท์: {formData.phoneNumber}</p>
        <p>รายได้ต่อเดือน: {formData.income}</p>
      </div>
    </div>
  );
}

export default App;
