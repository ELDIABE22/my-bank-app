const baseURL = 'https://bank.jedidiazfagundez.site/api';

async function login(account, password) {
  try {
    const response = await fetch(`${baseURL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ account, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching login:', error);
    throw new Error('Login request failed');
  }
}

async function getMovementsById(userId) {
  try {
    const response = await fetch(`${baseURL}/movements/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movements by ID:', error);
    throw new Error('Failed to get movements by ID');
  }
}

async function createMovement(amount, token, account_receive, userId) {
  try {
    const requestBody = {
      amount,
      token,
      account_receive,
      id: userId,
    };
    const response = await fetch(`${baseURL}/movements`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating movement:', error);
    throw new Error('Failed to create movement');
  }
}

export { login, getMovementsById, createMovement };
