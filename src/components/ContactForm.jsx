import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import styles from "./ContactForm.module.css";
import * as Yup from "yup";
import { addContact } from "../redux/contactsSlice";
import { useDispatch } from "react-redux";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name is too short")
    .max(50, "Name is too long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Number is too short")
    .max(50, "Number is too long")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values.name, values.number));
    console.log("name: ", values.name, "number :", values.number);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      {() => (
        <Form>
          <div className={styles.form}>
            <div className={styles.personData}>
              <label htmlFor={nameFieldId}>Name</label>
              <Field type="text" name="name" id={nameFieldId}></Field>
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
              <label htmlFor={numberFieldId}>Number</label>
              <Field type="number" name="number" id={numberFieldId}></Field>
              <ErrorMessage
                name="number"
                component="div"
                className={styles.error}
              />
            </div>
            <button type="submit">Add contact</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
