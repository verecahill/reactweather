var React = require('react');

var About = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is a weather application build on React. I have built this for the Complete React Web App Developer Course</p>
        <p>Here are some of the tools I used:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> -

          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a>
          </li>
        </ul>
      </div>
    )
  }
});

module.exports = About;
