const defaultBaseURL = "https://api.rockwood.test/api/";
// console.log(document.querySelector("[name='csrf-token']"))
const token = document.querySelector("[name='csrf-token']");
async function Http(
  _url,
  { method = "GET", headers, baseURL, ...params } = {}
) {
//   const url = new URL(_url, baseURL || defaultBaseURL);
  const url = new URL( _url, defaultBaseURL).toString();
  console.log(url);
  const options = {
    cache: "no-cache",
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Accept": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      'X-CSRF-TOKEN': token,
      ...headers
    },
    ...params
  };
  const response = await fetch(url, options);
  if (!response.ok)
    throw new Error(
      `HTTP ${method}: ${response.status}: ${response.statusText}`
    );

  response.data = await response.json();
  return response;
}
export default Http;
