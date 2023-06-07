import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/3ff9603c-bdcb-4f49-9da2-5dda3238c7af"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 hover:border-cyan-400 text-cyan-700">
            Contact
          </p>
          <p className="text-cyan-700 py-4">
            //Submit the form below or shoot me an email
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="p-2 bg-[#ccd6f6]"
        />
        <input
          type="emal"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message..."
        ></textarea>
        <button className="text-cyan-700 border-2 hover:bg-slate-600 hover:border-cyan-400 duration-150 hover:text-cyan-400 px-4 py-3 my-8 mx-auto flex items-center">
          Contact Me
        </button>
      </form>
    </div>
  );
};

export default Contact;
