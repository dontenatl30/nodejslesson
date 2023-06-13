let log = {
    info: function(info) {
        console.log('Info: ' + info);
    },
    warning: (warning) => {
        console.log('warning: ' + warning);
    },
    error: function (error) {
        console.log('Error: ' + error);
    },
};

module.exports = log;


