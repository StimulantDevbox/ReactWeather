var React = require('react');

var About = React.createClass({
  render: function () {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a simple app for getting the temperature of a specified city.</p>
            <p>It was built using React.js and the temperature information is
                supplied by <a href="http://OpenWeathermap.org">OpenWeathermap.org</a>.</p>
            <p>You can find out more about React <a href="https://facebook.github.io/react/">here</a>.</p>
        </div>
    )
  }
});

module.exports = About;
