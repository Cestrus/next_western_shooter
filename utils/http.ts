export const sendDataToDb = (data: any): void => {
  fetch('/api/sendData', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
