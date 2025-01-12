import { useState, ChangeEvent, FormEvent } from "react";
import { FormData } from "@/types/contact";

const initialFormData: FormData = {
  name: "",
  company: "",
  message: "",
  email: "",
  privacy: false,
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 font-sometimesTimes"
    >
      {/* Name Field */}
      <div className="text-6xl">
        <span className="whitespace-nowrap">Hello Daniel, my name</span>
        <div className="flex mt-2">
          <span className="whitespace-nowrap mr-4">is</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 border-b border-gray-300 pb-2 text-lg focus:outline-none focus:border-gray-600 bg-transparent"
            placeholder="Your name*"
            required
          />
        </div>
      </div>

      {/* Company Field */}
      <div className="flex">
        <span className="text-6xl whitespace-nowrap mr-4">I work at</span>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full mt-2 border-b border-gray-300 pb-2 text-lg focus:outline-none focus:border-gray-600 bg-transparent"
          placeholder="Your company"
        />
      </div>

      {/* Message Field */}
      <div className="flex flex-col">
        <span className="text-6xl whitespace-nowrap">I would like to</span>
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-2 border-b border-gray-300 pb-2 text-lg focus:outline-none focus:border-gray-600 bg-transparent"
          placeholder="Your message*"
          required
        />
      </div>

      {/* Email Field */}
      <div className="flex">
        <span className="text-6xl whitespace-nowrap mr-4">
          You can reach me at
        </span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-2 border-b border-gray-300 pb-2 text-lg focus:outline-none focus:border-gray-600 bg-transparent"
          placeholder="Your email*"
          required
        />
      </div>

      {/* Privacy Policy */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="privacy"
          checked={formData.privacy}
          onChange={handleChange}
          className="w-4 h-4 rounded  non-checked:bg-[#eee9cc] "
          required
        />
        <span className="text-sm">
          I agree to the{" "}
          <a href="/privacy" className="underline ">
            privacy policy
          </a>
        </span>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!formData.privacy}
        className=" text-left text-4xl"
      >
        ( send )
      </button>
    </form>
  );
};

export default ContactForm;
