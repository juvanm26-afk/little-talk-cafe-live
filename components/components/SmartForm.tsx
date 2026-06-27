"use client";

import { FormEvent, useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/mnjyevqy";

type SmartFormProps = {
  children: React.ReactNode;
  className?: string;
  subject: string;
  formType: string;
  successMessage?: string;
};

export function SmartForm({
  children,
  className,
  subject,
  formType,
  successMessage = "Thanks — your enquiry has been sent. The café team will get back to you as soon as possible."
}: SmartFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", subject);
    formData.append("Form type", formType);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}

      {status === "sending" && (
        <p className="formStatus" role="status">
          Sending...
        </p>
      )}

      {status === "success" && (
        <p className="formStatus success" role="status">
          {successMessage}
        </p>
      )}

      {status === "error" && (
        <p className="formStatus error" role="alert">
          Sorry, something went wrong. Please call 01702 883027 or email littletalkltd@gmail.com.
        </p>
      )}
    </form>
  );
}
