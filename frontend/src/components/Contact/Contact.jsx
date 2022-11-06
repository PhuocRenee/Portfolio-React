import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, "Please, enter a valid name")
      .max(15)
      .required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const port = process.env.PORT || 4000;

  const [mailerState, setMailerState] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    // e.preventDefault();
    console.log({ mailerState });
    const response = await fetch(`http://localhost:${port}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          firstName: "",
          message: "",
        });
      });
  };

  return (
    <section id="Contact" className="App">
      <form
        style={{
          display: "flex",
          height: "50vh",
          justifyContent: "center",
          aligntItems: "center",
        }}
        onSubmit={handleSubmit(submitEmail)}
      >
        <fieldset
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <legend>CONTACT US</legend>
          <input
            {...register("firstName")}
            type="text"
            placeholder="Name"
            onChange={handleStateChange}
            name="firstName"
            value={mailerState.firstName}
          />
          <p>{errors.firstName?.message}</p>

          <input
            {...register("email")}
            type="text"
            placeholder="Email"
            onChange={handleStateChange}
            name="email"
            value={mailerState.email}
          />
          <p>{errors.email?.message}</p>
          <textarea
            {...register("message")}
            type="text"
            style={{ minHeight: "200px" }}
            placeholder="Message"
            onChange={handleStateChange}
            name="message"
            value={mailerState.message}
          />
          <p>{errors.message?.message}</p>
          <button>SendMessage</button>
        </fieldset>
      </form>
    </section>
  );
}
