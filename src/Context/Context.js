import React, { useState, useEffect } from "react";

const ContactContext = React.createContext();

export function ContactProvider(props) {
  const [data, setData] = useState([]);
  const [detData, setDetData] = useState({});

  const fetching = async () => {
    const data = [
      {
        id: 1,
        name: "Ali",
        surname: "GreenHeart",
        createdDate: new Date(),
        modifiedDate: new Date(),
        homeNum: "0123456789",
        workNum: "0809776564",
        mobileNum: "0702567891",
      },
      {
        id: 2,
        name: "AliReza",
        surname: "RedHeart",
        createdDate: new Date(),
        modifiedDate: new Date(),
        homeNum: "0987654321",
        workNum: "0708230749",
        mobileNum: "0702346579",
      },
      {
        id: 3,
        name: "Foo",
        surname: "SweetieHeart",
        createdDate: new Date(),
        modifiedDate: new Date(),
        homeNum: "098712345",
        workNum: "7890654321",
        mobileNum: "0864124680",
      },
      {
        id: 4,
        name: "Poo",
        surname: "PandaHeart",
        createdDate: new Date(),
        modifiedDate: new Date(),
        homeNum: "098712345",
        workNum: "7890654321",
        mobileNum: "0864124680",
      },
      {
        id: 5,
        name: "Scooby",
        surname: "Doo",
        createdDate: new Date(),
        modifiedDate: new Date(),
        homeNum: "098712345",
        workNum: "7890654321",
        mobileNum: "0864124680",
      },
      {
        id: 6,
        name: "Mr.",
        surname: "Jonathan",
        createdDate: new Date(),
        modifiedDate: new Date(),
        homeNum: "0123456789",
        workNum: "0704930781",
        mobileNum: "0702567891",
      },
      {
        id: 7,
        name: "Crazy",
        surname: "Boy",
        createdDate: new Date(),
        modifiedDate: new Date(),
        homeNum: "0987654321",
        workNum: "0708230749",
        mobileNum: "0702346579",
      },
      {
        id: 8,
        name: "what",
        surname: "youWant",
        createdDate: new Date(),
        modifiedDate: new Date(),
        homeNum: "098712345",
        workNum: "7890654321",
        mobileNum: "0864124680",
      },
      {
        id: 9,
        name: "your",
        surname: "name",
        createdDate: new Date(),
        modifiedDate: new Date(),
        homeNum: "098712345",
        workNum: "7890654321",
        mobileNum: "0864124680",
      },
      {
        id: 10,
        name: "last",
        surname: "contact",
        createdDate: new Date(),
        modifiedDate: new Date(),
        homeNum: "098712345",
        workNum: "7890654321",
        mobileNum: "0864124680",
      },
    ];
    setData([...data], data);
  };

  useEffect(() => {
    fetching();
  }, []);

  const getItem = (id) => {
    const contact = data.find((item) => item.id === id);
    console.log(contact);
    return contact;
  };
  return (
    <ContactContext.Provider
      value={{
        data,
        detData,
        setDetData,
        setData,
        getItem,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
}
const ContactConsumer = ContactContext.Consumer;

export default ContactConsumer;
