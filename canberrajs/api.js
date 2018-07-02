const processContact = contact => ({
  name: `${contact.name.first} ${contact.name.last}`,
  phone: contact.phone
});

export const fetchUsers = async () => {
  const response = await fetch("https://randomuser.me/api/?results=20&nat=us");
  const { results } = await response.json();
  return results.map(processContact);
};

export const login = async (username, password) => {
  const response = await fetch("http://127.0.0.1:5000/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  if (response.ok) {
    return true;
  }

  const errMessage = await response.text();
  throw new Error(errMessage);
};
