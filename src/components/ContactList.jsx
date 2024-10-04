import styles from "./ContactList.module.css";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getFilter);
  return (
    <>
      <h2>ContactList:</h2>
      <div className={styles.phoneList}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </div>
    </>
  );
};

export default ContactList;
