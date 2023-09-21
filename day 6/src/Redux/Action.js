export const setUsername = (username) => {
    try {
      localStorage.setItem('username', username);
    } catch (error) {
    }
  
    return {
      type: 'SET_USERNAME',
      payload: username,
    };
  };
  