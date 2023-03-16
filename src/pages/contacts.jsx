import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/contacts-operations';
import { Container } from 'components/App/App.styled';

import ContactList from 'components/PhoneBook/ContactList';
import ContactForm from 'components/PhoneBook/ContactForm';
import Filter from 'components/PhoneBook/Filter';
import styles from '../components/PhoneBook/phonebook.module.css'

export default function Contacts() {
    const isLoading = useSelector(state => state.contacts.isLoading);
    const error = useSelector(state => state.contacts.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllContacts());
    }, [dispatch]);

    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <title>Your tasks</title>
                </Helmet>
                <h1 className={styles.title}>Phonebook</h1>
                <ContactForm />
                <h2 className={styles.title}>Contacts</h2>
                <Filter />
                {isLoading && !error && <b>Request in progress...</b>}
                <ContactList />
            </Container>
        </HelmetProvider>
    );
}