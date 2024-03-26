import ReCAPTCHA from "react-google-recaptcha";

function Tick() {
  const handleRecaptchaVerify = () => {
    // Handle verification response
  };

  return (
    <div>
      {/* Your form components */}
      <ReCAPTCHA
        sitekey="6Ld823YpAAAAACx86ac-U8sVELYhRKE73Qij8Z2C"
        onChange={handleRecaptchaVerify}
      />
    </div>
  );
}

export default Tick;
