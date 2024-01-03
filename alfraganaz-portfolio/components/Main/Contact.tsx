"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface InputForm {
  name: string;
  phoneNumber: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<InputForm>({
    name: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Validate that all fields are filled
    if (!formData.name || !formData.phoneNumber || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    // Handle the form submission logic, for example, send data to a server
    console.log("Form Data:", formData);
  };

  return (
    <div className="w-full flex  justify-between h-[800px] px-[300px] py-[225px] 2xl:px-[230px] xl:px-[155px] lg:px-[140px] xl:h-[720px] lg:h-[700px] xl:py-[175px] md:py-[100px] md:h-[650px] md:px-[70px]  md:gap-6 sm:px-[40px] sm:flex-col sm:justify-center sm:py-[50px] xs:px-[25px] xs:flex-col  xs:py-[35px] xs:h-[500px] ">
      <div className="w-[530px] h-full lg:w-[450px] md:w-[270px] sm:h-[240px] xs:h-[200px] xs:w-[90%]">
        <span className="w-[180px] h-[20px] text-black font-montserrat text-base md:text-sm md:h-[16px] xs:text-sm xs:h-[14px]">
          Yangi go'yalar bormi?
        </span>
        <h3 className="w-[405px] h-[333px] text-black text-[60px]  font-extrabold leading-[108.333%] uppercase xl:text-[52px]  lg:text-[48px] lg:w-[350px] md:text-[40px] md:w-[270px] sm:w-[380px] sm:text-[36px] xs:w-full xs:text-[32px]">
          BIZGA BOG'LANING <span className="text-[#7C7C7C]">G'OYALARNI</span>{" "}
          AMALGA OSHIRING!
        </h3>
      </div>
      <div className="w-[660px] h-[90%] flex flex-col justify-between px-[15px] xl:w-[600px] lg:w-[550px] lg:h-[100%] md:w-[400px] md:h-[250px] md:px-[0px] sm:w-full sm:h-[250px] xs:w-full xs:h-[250px] xs:px-[0px]">
        <div className="w-full flex justify-between space-x-4 md:space-x-2">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="nameAndPhoneInput xl:w-[250px] lg:w-[220px] md:w-[175px] sm:w-[250px] xs:w-[100%]"
              placeholder="Ismingiz"
              required
            />
          </div>

          <div>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="nameAndPhoneInput xl:w-[250px] lg:w-[220px] md:w-[175px] sm:w-[250px] xs:w-[100%]"
              placeholder="+998 _ _  _ _ _  _ _  _ _"
              required
            />
          </div>
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="massageInput md:h-[70px] sm:h-[100px]"
            required
          ></textarea>
        </div>

        <div className="w-full flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-[180px] h-[48px]  pt-[14px] pr-[45px] pb-[14px] pl-[45px] bg-black  shrink-0 rounded-[8px]"
          >
            <p className="font-montserrat normal text-base text-light-grey uppercase">
              Yuborish
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
