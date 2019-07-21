import React from "react";
import { Spring } from "react-spring"; //react spring animation library

export default function Component1() {
  return (
    // you want to add Spring component after the return, and whatever we want to animate, we have to put inside of the spring
    // you also want to return props with a arrow function and add a div container with style={props}
    <Spring
      from={{ opacity: 0, marginTop: -500 }} //animation starts from 0 and transitions to 1, marginTop -500 brings animation from the top to 0 default location
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h2>Component1</h2>
            <p>
              Nulla vitae elit libero, a pharetra augue. Integer posuere erat a
              ante venenatis dapibus posuere velit aliquet. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus
              ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
              massa justo sit amet risus. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec sed odio dui. Cras mattis consectetur
              purus sit amet fermentum. Donec id elit non mi porta gravida at
              eget metus. Cras mattis consectetur purus sit amet fermentum.
              Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent
              commodo cursus magna, vel scelerisque nisl consectetur et. Etiam
              porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
              ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed
              consectetur. Vestibulum id ligula porta felis euismod semper.
              Vestibulum id ligula porta felis euismod semper. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Maecenas sed diam eget risus
              varius blandit sit amet non magna. Fusce dapibus, tellus ac cursus
              commodo, tortor mauris condimentum nibh, ut fermentum massa justo
              sit amet risus. Etiam porta sem malesuada magna mollis euismod.
            </p>
          </div>
        </div>
      )}
      </Spring>
  );
}

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};
