import React from "react";

function Contact() {
  return (
    <div>
    <h1 class="ContactDescription">You can reach me at&nbsp;
    <button class="email" onClick={() => window.location.href = 'mailto:atosad@chalmers.com'}>atosad@chalmers.com</button>
    .
    </h1>
  </div>
  )
}

export default Contact;