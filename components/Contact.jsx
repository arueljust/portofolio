import images from "../src/assets";

// components/Contact.jsx
const Contact = () => {
  return (
    <div
      id="contact"
      name="contact"
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center p-4"
      style={{ backgroundImage: `url(${images.Phone})` }}
    >
      <form
        method="POST"
        action="#"
        className="bg-[#112240] p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <div className="mb-6 text-center">
          <p className="text-4xl font-bold text-pink-600 mb-2">Get in Touch</p>
          <p className="text-gray-400">
            I'd love to hear from you. Drop your email below 👇
          </p>
        </div>
        <input
          className="w-full p-3 rounded bg-[#ccd6f6] text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-600"
          type="email"
          placeholder="Your email address"
          name="email"
          required
        />
        <button
          type="submit"
          className="w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
