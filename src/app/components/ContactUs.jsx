"use client";

import React, { useState } from "react";
import { SiInstagram } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import emailjs from "@emailjs/browser";
import { Spinner, Toast, ToastContainer, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success");
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setIsLoading(true);

    emailjs
      .send(
        "service_os666qi",
        "template_ckq76sl",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "vd_pA3QA5hh_Pp_xH"
      )
      .then(
        () => {
          setToastMessage("✅ تم إرسال الرسالة بنجاح!");
          setToastVariant("success");
          setShowToast(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setIsLoading(false);
          setValidated(false);
        },
        (error) => {
          setToastMessage("❌ حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
          setToastVariant("danger");
          setShowToast(true);
          setIsLoading(false);
          console.error(error.text);
        }
      );
  };

  return (
    <div className="bg-[#F8F8F8] p-[8px] md:p-[24px] mx-auto shadow-md mt-[32px] w-full md:w-[926px] rounded-[8px]">
      <ToastContainer position="top-end" className="p-3">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          bg={toastVariant}
          delay={4000}
          autohide
        >
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

      <Form
        noValidate
        validated={validated}
        onSubmit={handleSend}
        className="w-full md:w-[878px] flex flex-col gap-[32px]"
      >
        <Form.Group controlId="formName" className="flex flex-col gap-[8px]">
          <Form.Control
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="الاسم"
            className="w-full px-[8px] py-[12px] rounded-[8px] border border-[#B7B7B7] focus:outline-none focus:ring-2"
          />
          <Form.Control.Feedback type="invalid" className="text-[14px]">
            الرجاء إدخال الاسم.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail" className="flex flex-col gap-[8px]">
          <Form.Control
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="البريد الإلكتروني"
            className="w-full px-[8px] py-[12px] rounded-[8px] border border-[#B7B7B7] focus:outline-none focus:ring-2"
          />
          <Form.Control.Feedback type="invalid" className="text-[14px]">
            الرجاء إدخال بريد إلكتروني صالح.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPhone" className="flex flex-col gap-[8px]">
          <Form.Control
            required
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="رقم الجوال"
            className="w-full px-[8px] py-[12px] rounded-[8px] border border-[#B7B7B7] focus:outline-none focus:ring-2"
          />
          <Form.Control.Feedback type="invalid" className="text-[14px]">
            الرجاء إدخال رقم جوال صحيح.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formSubject" className="flex flex-col gap-[8px]">
          <Form.Control
            required
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="عنوان الرسالة"
            className="w-full px-[8px] py-[12px] rounded-[8px] border border-[#B7B7B7] focus:outline-none focus:ring-2"
          />
          <Form.Control.Feedback type="invalid" className="text-[14px]">
            الرجاء إدخال عنوان الرسالة.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formMessage" className="flex flex-col gap-[8px]">
          <Form.Control
            required
            as="textarea"
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="موضوع الرسالة"
            className="w-full px-[8px] py-[12px] rounded-[8px] border border-[#B7B7B7] focus:outline-none focus:ring-2"
          />
          <Form.Control.Feedback type="invalid" className="text-[14px]">
            الرجاء كتابة محتوى الرسالة.
          </Form.Control.Feedback>
        </Form.Group>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full font-bold text-[18px] rounded-[8px] bg-[#DD3B4A] text-white py-[10px]"
        >
          {isLoading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />{" "}
              جاري الإرسال...
            </>
          ) : (
            "أرسل"
          )}
        </button>

        <div className="flex flex-col gap-[8px] md:flex items-center md:justify-between">
          <div className="flex items-center gap-[4px]">
            <p className="font-medium text-[16px] text-[#1B2532] m-0">
              راسلنا و تابعنا عبر:
            </p>
            <div className="flex items-center gap-[16px]">
              <SiInstagram className="text-[#DD3B4A] text-[20px]" />
              <SlSocialTwitter className="text-[#DD3B4A] text-[20px]" />
              <CiFacebook className="text-[#DD3B4A] text-[20px]" />
            </div>
          </div>

          <p className="text-[#1B2532] font-medium text-[16px] text-center">
            للاستفسارات العامة أو الدعم الفني:
            <span className="text-[#DD3B4A] font-medium text-[16px]">
              Info@carsvid.com
            </span>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default ContactUs;
