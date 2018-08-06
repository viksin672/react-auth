



export function authcall(method, path, data) {
  console.log(data);
  return new Promise((resolve, reject) => {
     if ((data.email === "mudit@gmail.com") && (data.password === "mypass")){
        return resolve(data);
     }
      else
      return reject;
  });
}