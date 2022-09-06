module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const name = req.query.name;
  const age = req.query.age;
  const responseMessage = `${name}.......${age}`;
  console.log(req.body);

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};
