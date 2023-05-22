fetch(
  // Explain each parameter in comments below.
  // 10 issues, open, created date, descending direction
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// returns 10 issues, that are open, sorted by created date - descending direction
