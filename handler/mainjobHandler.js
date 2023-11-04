var cron = require('node-cron')
const axios = require("axios").default;
const { taskList, TaskActions } = require('../model/taskList')

const task = cron.schedule(' */10 * * * *', () => {
    console.log('running main task every 1 second')
    taskList.forEach((t, k) => {
        console.log(t.url)
        axios.get(t.url).then(res => {
            console.log(`url: ${t.url} response: ${res.status}  ${res.data}`);

        }).catch(err => {
            console.log(`error: ${err}`);
        })
    })
});
module.exports = task;