import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import { CustomErrorMessage, FormFooter, FormHeader } from '@/components'
import styles from "./styles.module.scss";

const validationForm = yup.object().shape({
  nomeAluno: yup.string().required("Informe seu nome"),
  emailAluno: yup.string().email("Email inválido").required("Informe seu email"),
  telefoneAluno: yup.string().required("Informe seu telefone"),
  nomeOrientador: yup.string().required("Informe o nome do seu orientador"),
  emailOrientador: yup.string().email("Email inválido").required("Informe o email do seu orientador"),
  telefoneOrientador: yup.string().required("Informe o telefone"),
  departamento: yup.string().required("Informe o departamento"),
  naturezaProjeto: yup.string().required("Informe a natureza do projeto"),
  descricao: yup.string().required("Informe a descrição"),
  limites: yup.string().required("Informe os limites"),
  elementos: yup.string().required("Informe os elementos"),
  concentracao: yup.string().required("Informe a concentração"),
  observacoes: yup.string().required("Informe uma observação")
});

async function handleClickForm(values: {
  nomeAluno: string;
  emailAluno: string;
  telefoneAluno: string;
  nomeOrientador: string;
  emailOrientador: string;
  telefoneOrientador: string;
  departamento: string;
  naturezaProjeto: string;
  descricao: string;
  limites: string;
  condicoes: string;
  elementos: string;
  concentracao: string;
  observacoes: string;
}) {
  try {

  } catch (error) {
    console.error("error", error);
  }
}

export const FormAbsorcaoAtomica: React.FC = () => (
  <>
    <div className={styles.container}>
      <h1 className={styles.title}>Absorção Atômica</h1>
      <div>
        <Formik
          initialValues={{
            nomeAluno: "",
            emailAluno: "",
            telefoneAluno: "",
            nomeOrientador: "",
            emailOrientador: "",
            telefoneOrientador: "",
            departamento: "",
            naturezaProjeto: "",
            descricao: "",
            limites: "",
            condicoes: "",
            elementos: "", 
            concentracao: "",
            observacoes: ""
          }}
          onSubmit={handleClickForm}
          validationSchema={validationForm}
        >
          <Form className={styles.inputs_container}>
            <div className={styles.inputs_box}>
              <FormHeader />
              <div className={styles.row_box}>
                <div className={styles.field_box}>
                  <p>Limites</p>
                  <div className={styles.input_box}>
                    <ErrorMessage
                      component={CustomErrorMessage}
                      name="limites"
                      className={styles.form_error}
                    />
                    <Field
                      component="textarea"
                      name="limites"
                      type="textarea"
                      placeholder='LIMITES MÍNIMO E MÁXIMO DA CONCENTRAÇÃO DAS AMOSTRAS:'
                      className={styles.input_form_text_area}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.radio_box}>
              <h3 className={styles.sub_title}>METODOLOGIA ANALÍTICA: CONDIÇÕES A SEREM UTILIZADAS </h3>
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="condicoes" value="chama" />
                  Chama
                </label>
                <label>
                  <Field type="radio" name="condicoes" value="geradorHidretos" />
                  Gerador de Hidretos
                </label>
                <label>
                  <Field type="radio" name="condicoes" value="fornoGrafite" />
                  Forno de Grafite
                </label>
              </div>
            </div>
            <div className={styles.row_box}>
              <div className={styles.field_box}>
                <p>Elementos</p>
                <div className={styles.input_box}>
                  <ErrorMessage
                    component={CustomErrorMessage}
                    name="elementos"
                    className={styles.form_error}
                  />
                  <Field
                    component="textarea"
                    name="elementos"
                    type="textarea"
                    placeholder='Elementos a serem analisados'
                    className={styles.input_form_text_area}
                  />
                </div>
              </div>
            </div>
            <div className={styles.row_box}>
              <div className={styles.field_box}>
                <p>Concetração</p>
                <div className={styles.input_box}>
                  <ErrorMessage
                    component={CustomErrorMessage}
                    name="concentracao"
                    className={styles.form_error}
                  />
                  <Field
                    component="textarea"
                    name="concentracao"
                    type="textarea"
                    placeholder='Concentrações da curva de calibração'
                    className={styles.input_form_text_area}
                  />
                </div>
              </div>
            </div>
            <div className={styles.row_box}>
              <div className={styles.field_box}>
                <p>Observações</p>
                <div className={styles.input_box}>
                  <ErrorMessage
                    component={CustomErrorMessage}
                    name="observacoes"
                    className={styles.form_error}
                  />
                  <Field
                    component="textarea"
                    name="observacoes"
                    type="textarea"
                    placeholder=''
                    className={styles.input_form_text_area}
                  />
                </div>
              </div>
            </div>
            <FormFooter />
          </Form>
        </Formik>
      </div>
    </div>
  </>
)