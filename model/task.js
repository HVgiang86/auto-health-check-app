const axios = require("axios").default;
var md5 = require('md5');

class Task {
    constructor(task_name, url, desired_result, time) {
        this.task_name = task_name;
        this.task_id = md5(task_name)
        this.url = url;
        this.desired_result = desired_result;
        this.time = time;
    }

    set_task_name(task_name) {
        this.task_name = task_name;
    }
    get_task_name() {
        return this.task_name;
    }
    get_task_id() {
        return this.task_id;
    }

    get_desired_result() {
        return this.desired_result
    }

    get_time() {
        return this.time
    }

    get_url() {
        return this.url;
    }

    set_url(url) {
        this.url = url;
    }
    set_desired_result(desired_result) {
        this.desired_result = desired_result;
    }
    set_time_stamp(time_stamp) {
        this.time_stamp = time_stamp;
    }
    get_time_stamp() {
        return this.time_stamp;
    }

    get_action(success_callback, error_callback) {
        return async function () {
            console.log('action called')
            await axios.get(url).then(res => {
                console.log(`url: ${url} response: ${res.status}  ${res.data}`);
                success_callback(res)
            }).catch(err => {
                error_callback(err);
                console.log(`error: ${err.message}`);
            })
        }
    }

}

module.exports = { Task }