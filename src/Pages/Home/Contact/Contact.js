import React, { useRef } from "react";
import { IoMdMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { IoMdSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0i5kzgk",
        "template_hdatjgj",
        form.current,
        "zaDkgqaW77bTY4aEn"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Successfully send email !");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="my-6">
      <h1 className="lg:text-5xl text-3xl font-bold text-center lg:my-12 my-6 ">
        Get In Touch
      </h1>
      <div className="lg:flex items-start">
        <div className=" lg:w-2/5 p-6">
          <h1 className="text-3xl font-bold mb-6 text-primary">
            DON'T BE SHY !
          </h1>
          <p className="">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="flex justify-start items-center mt-6">
            <IoMdMail size="40px" fill="#ec42f5" />
            <div className="p-2">
              <p>MAIL ME</p>
              <p>sumiakter6335@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-start items-center">
            <BsFillTelephoneForwardFill size="40px" fill="#ec42f5" />
            <div className="p-2">
              <p>CALL ME</p>
              <p>+88017187*****</p>
            </div>
          </div>
          <div className="flex justify-start items-center">
            <ImLocation size="40px" fill="#ec42f5" />
            <div className="p-2">
              <p>LOCATION </p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className=" lg:w-3/5 p-6">
          <form ref={form} onSubmit={sendEmail} className="mt-12">
            <div className=" mx-auto flex">
              <input
                type="text"
                required
                name="user_name"
                className="text-sm  input bg-black w-full mt-6"
                placeholder="Name"
              />

              <input
                className="input bg-black mt-6 ml-2 w-full"
                name="user_email"
                placeholder="Email"
                required="required"
                type="email"
              />
            </div>

            <div className=" mx-auto">
              <textarea
                name="message"
                className="message mt-6 textarea bg-black w-full"
                placeholder="Message"
                required="required"
              />
            </div>

            <div className="mt-12">
              <button
                type="submit"
                className=" flex justify-center items-center btn btn-primary hover:border-white bg-black w-56 h-14 rounded-full "
              >
                <p className=" flex justify-center items-center">
                  <IoMdSend size="25px" className="mr-4" /> Send
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
