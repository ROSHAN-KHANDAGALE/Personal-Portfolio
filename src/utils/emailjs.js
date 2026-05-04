export const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
export const EMAILJS_SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
export const EMAILJS_CONFIGURED  = process.env.REACT_APP_EMAILJS_SDK_URL;

export const isConfigured =
  EMAILJS_PUBLIC_KEY &&
  EMAILJS_SERVICE_ID &&
  EMAILJS_TEMPLATE_ID &&
  EMAILJS_CONFIGURED;

let initialized = false;

export async function loadEmailJS() {
  if (window.emailjs && initialized) return;

  await new Promise((resolve, reject) => {
    if (window.emailjs) { resolve(); return; }
    const script = document.createElement("script");
    script.src = EMAILJS_CONFIGURED;
    script.onload  = resolve;
    script.onerror = () => reject(new Error("Failed to load EmailJS SDK"));
    document.head.appendChild(script);
  });

  window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  initialized = true;
}

export async function sendEmail({ name, email, subject, message }) {
  await loadEmailJS();
  return window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    from_name:  name,
    from_email: email,
    reply_to:   email,
    subject,
    message,
  });
}
