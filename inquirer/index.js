/**
 * Modules prompt
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const inquirer = require('inquirer');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const execa = require('execa');

// eslint-disable-next-line @typescript-eslint/no-var-requires
inquirer.registerPrompt('table', require('inquirer-table-prompt'));

const table = [
    {
        type: 'table',
        name: 'startApp',
        message: 'Choose modules for start the app',
        columns: [
            {
                name: 'Run',
                value: true,
            },
            {
                name: 'None',
                value: false,
            },
        ],
        rows: [
            {
                name: 'host',
                value: 'host',
            },
            {
                name: 'app1',
                value: 'app1',
            },
            {
                name: 'app2',
                value: 'app2',
            },
        ],
        pageSize: 10,
    },
];

inquirer.prompt(table).then((answers) => {
    const arr = [];
    answers.startApp.forEach((item, i) => {
        if (item) {
            arr.push(`yarn --cwd ./packages/${table[0].rows[i].value}/ start`);
        }
    });
    execa('yarn', ['concurrently', ...arr], { windowsHide: false }).stdout.pipe(
        process.stdout
    );
});
