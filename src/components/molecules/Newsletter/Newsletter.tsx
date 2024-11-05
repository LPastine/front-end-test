import { useState } from "react";
import styles from "./Newsletter.module.css";
import { useForm } from "./useForm";

interface User {
  name: string;
  email: string;
}

const submitNewsletterRequest = async (name: string, email: string) => {
  const body = {
    email,
    name,
  };
  try {
    await fetch("https://corebiz-test-server.onrender.com/api/v1/newsletter", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/vnd.vtex.ds.v10+json",
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const Newsletter = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [submitSucceded, setSubmitSucceded] = useState<boolean>(false);

  const {
    handleSubmit,
    handleChange,
    data: user,
    errors,
  } = useForm<User>({
    validations: {
      name: {
        pattern: {
          value: `^[A-Za-zÀ-ÖØ-öø-ÿ]+( [A-Za-zÀ-ÖØ-öø-ÿ]+)+$`,
          message: "Preencha com seu nome completo",
        },
      },
      email: {
        pattern: {
          value: `^[a-zA-Z0-9!#$%&'*+/=?^_'{|}~-]+(?:.[a-zA-Z0-9!#$%&'*+/=?^_'{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$`,
          message: "Preencha com um e-mail válido",
        },
      },
    },
    onSubmit: async () => {
      setLoading(true);
      await submitNewsletterRequest(user.name, user.email);
      setLoading(false);
      setSubmitSucceded(true);
    },
  });

  const handleRetryButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(false);
    setSubmitSucceded(false);
  };

  return (
    <section id="newsletter" className={styles.Newsletter}>
      {!submitSucceded && (
        <>
          <h2 className={styles.Newsletter__title}>
            Participe de nossas news com promoções e novidades!
          </h2>
          <form
            className={`${styles.Newsletter__form}`}
            onSubmit={handleSubmit}
          >
            <div className={`${styles.Newsletter__emailWrapper}`}>
              <input
                required
                maxLength={50}
                value={user.name || ""}
                onChange={handleChange("name")}
                type="text"
                placeholder="Digite seu nome"
                className={`${styles.Newsletter__emailInput}`}
              />
              {errors.name && (
                <div
                  id="Newsletter__nameAlert"
                  className={`${styles.Newsletter__emailAlert}`}
                >
                  {errors.name}
                </div>
              )}
            </div>
            <div className={`${styles.Newsletter__emailWrapper}`}>
              <input
                required
                maxLength={50}
                value={user.email || ""}
                onChange={handleChange("email")}
                type="text"
                placeholder="Digite seu email"
                className={`${styles.Newsletter__emailInput}`}
              />
              {errors.email && (
                <div
                  id="Newsletter__emailAlert"
                  className={`${styles.Newsletter__emailAlert}`}
                >
                  {errors.email}
                </div>
              )}
            </div>
            <button type="submit" className={`${styles.Newsletter__button}`}>
              {loading ? "Carregando..." : "Eu quero!"}
            </button>
          </form>
        </>
      )}

      {!loading && submitSucceded && (
        <div className={`${styles.Newsletter__success}`}>
          <p className={`${styles.Newsletter__success__title}`}>
            Seu e-mail foi cadastrado com sucesso!
          </p>
          <p className={`${styles.Newsletter__success__subTitle}`}>
            A partir de agora você receberá as novidades e ofertas exclusivas.
          </p>
          <button
            onClick={(e) => handleRetryButton(e)}
            className={`${styles.Newsletter__retryButton}`}
          >
            Cadastrar novo e-mail
          </button>
        </div>
      )}
    </section>
  );
};

export default Newsletter;
