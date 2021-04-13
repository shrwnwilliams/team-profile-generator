// generate manager card
// generate engineer card
// generate intern card

const generateTeam = (team) => {
  const generateManager = (manager) => {
    return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <p class="card-text">${manager.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.getID()}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
  </ul>
</div>
        `;
  };

  const generateEngineer = (engineer) => {
    return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${engineer.getName()}</h5>
        <p class="card-text">${engineer.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
      </ul>
    </div>
            `;
  };

  const generateIntern = (intern) => {
    return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${intern.getName()}</h5>
        <p class="card-text">${intern.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School:${intern.getSchool()}</li>
      </ul>
    </div>
            `;
  };
  const htmlCards = [];

  htmlCards.push(team.filter(employee => employee.getRole() === "Manager")
  .map(manager => generateManager(manager)));

  htmlCards.push(team.filter(employee => employee.getRole() === "Engineer")
  .map(engineer => generateEngineer(engineer)).join(""));

  htmlCards.push(team.filter(employee => employee.getRole() === "Intern")
  .map(intern => generateIntern(intern)).join(""));

  return htmlCards.join("");
};

module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
        <title>Document</title>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>`
}