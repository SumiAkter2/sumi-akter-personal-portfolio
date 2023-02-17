import React, { useRef } from "react";
import { IoMdMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import emailjs from "@emailjs/browser";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import PrimaryButton from "../../Button/PrimaryButton";

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
          alert("Successfully send email !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <h1 className="lg:text-5xl text-3xl font-bold text-center lg:my-12 my-6 text-primary">
        Get In Touch
      </h1>
      <div className="lg:flex items-start">
        <div className=" lg:w-2/5 p-6">
          <h1 className="text-3xl font-bold mb-4">DON'T BE SHY !</h1>
          <p className="">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="flex justify-start items-center">
            <IoMdMail size="40px" fill="pink" />
            <div className="p-2">
              <p>MAIL ME</p>
              <p>sumiakter6335@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-start items-center">
            <BsFillTelephoneForwardFill size="40px" fill="pink" />
            <div className="p-2">
              <p>CALL ME</p>
              <p>+8801718723057</p>
            </div>
          </div>
          <div className="flex justify-start items-center">
            <ImLocation size="40px" fill="pink" />
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
              <PrimaryButton
                type="submit"
                className="mt-12 flex justify-center items-center"
              >
                <p className=" flex justify-center items-center">Send</p>
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
