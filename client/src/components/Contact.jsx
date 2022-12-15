import React from "react";
import AppWrapper from "../wrapper/AppWrapper";
import { motion } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { PhoneIcon } from "../constants";
import { useState } from "react";
import { client } from "../client";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const { name, email, message } = data;
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !message) {
      return alert("Please fill all the fields");
    }
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    try {
      await client.create(contact);
      setLoading(false);
      setIsFormSubmitted(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pt-20 md:pt-20 px-5 lg:px-20 md:h-screen bg-cover bg-center dark:bg-[rgba(0,0,0,0.85)] bg-bgLight dark:bg-bgDark dark:saturate-50 dark:bg-blend-overlay dark:backdrop-saturate-150 dark:backdrop-brightness-75">
      <motion.h2
        whileInView={{ opacity: [0, 1], scale: [0, 1.2, 1] }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-4xl font-bold uppercase border-b-2 border-slate-300 w-fit mx-auto pb-3 tracking-widest mt-10 drop-shadow-lg text-center"
      >
        <span className="dark:text-white"> Wanna know </span>
        <span className="text-red-600"> more </span>
        <span className="dark:text-white"> about </span>
        <span className="text-indigo-800"> me</span>
      </motion.h2>
      <div className="mt-8">
        <div>
          <motion.form
            whileInView={{ opacity: [0, 1], scale: [0, 1.1, 1] }}
            method="post"
            className="pb-10 lg:py-0"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col-reverse md:flex-col gap-5 mt-10 px-5 md:px-20 lg:px-36 relative">
              {isFormSubmitted ? (
                <div className="text-center font-bold my-10 text-xl">
                  Thank you for connecting
                </div>
              ) : (
                <div className="flex flex-col gap-5 drop-shadow-md">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={data.name}
                    className="w-full py-3 px-5 rounded-lg outline-none dark:bg-slate-200"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={data.email}
                    className="w-full py-3 px-5 rounded-lg outline-none dark:bg-slate-200"
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    placeholder="Your Message"
                    name="message"
                    value={data.message}
                    className="w-full py-3 px-5 rounded-lg outline-none resize-none dark:bg-slate-200"
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-700 text-white px-5 rounded-lg py-3 lg:my-2 font-semibold drop-shadow-lg md:hidden hover:bg-blue-800 hover:scale-95 duration-300"
                  >
                    Send Now
                  </button>
                </div>
              )}
              <div className="flex flex-col md:flex-row gap-5 justify-evenly">
                <motion.a
                  whileInView={{ x: [-100, 0] }}
                  href="mailto:rajat.karnal@gmail.com"
                  className="flex items-center gap-3 bg-white dark:bg-slate-200 py-3 px-5 rounded-lg text-sm drop-shadow-md"
                >
                  <HiMail className="w-7 h-7 text-indigo-700" />
                  Rajat.karnal@gmail.com
                </motion.a>

                <motion.a
                  whileInView={{ x: [100, 0] }}
                  href="tel:9034101507"
                  className="flex items-center gap-3 bg-white dark:bg-slate-200 py-3 px-5 rounded-lg text-sm drop-shadow-md"
                >
                  <img
                    src={PhoneIcon}
                    alt="phone"
                    className="w-7 h-7 object-contain"
                  />
                  +91 9034101507
                </motion.a>
                {!isFormSubmitted && (
                  <button
                    type="submit"
                    className="bg-blue-700 text-white px-5 rounded-lg py-2 font-semibold drop-shadow-lg hidden md:block hover:bg-blue-800 disabled:bg-blue-600 hover:scale-95 duration-300"
                    disabled={loading}
                  >
                    Send Now
                  </button>
                )}
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default AppWrapper(Contact, "contact");
