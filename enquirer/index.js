const execa = require('execa');
const { MultiSelect } = require('enquirer');

const prompt = new MultiSelect({
  name: 'startApp',
  message: 'Choose modules for start the app',
  limit: 10,
  choices: [
    {
      name: 'app1',
      value: 'app1',
    },
    {
      name: 'app2',
      value: 'app2',
    },
    {
      name: 'app3',
      value: 'app3',
    },
    {
      name: 'host',
      value: 'host',
    },
  ],
});

prompt
  .run()
  .then(async (answer) => {
    const scopes = [];

    answer.forEach((app) => {
      scopes.push(`--scope`);
      scopes.push(`@microfrontends/${app}`);
    });

    execa('turbo', ['run', 'start', '--parallel', ...scopes], {
      windowsHide: false,
    }).stdout.pipe(process.stdout);
  })
  .catch(console.error);
