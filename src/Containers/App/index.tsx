import * as React from 'react';
import * as PropTypes from 'prop-types';
import { SketchPicker, ColorResult } from 'react-color';
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

interface AppProps {
  title: string
}

interface SquareConfig {
  color?: string;
  width?: number;
}

interface Point {
  readonly x: number;
  readonly y: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

export default class App extends React.Component<AppProps, any> {

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  handleChange = (color: ColorResult) => {
    console.log(color);
  }

  render () {
    let x: Array<string | number> = ["hello", 10];
    x[2] = '322';
    let a: number[] = [1, 2, 3, 4];
    return (
      <div>
        <h1>Hello React 123</h1>
        <SketchPicker onChangeComplete={this.handleChange} />
        {
          x.map((i) => <p key={i}>{i}</p>)
        }
        { this.props.title }
      </div>
    )
  }
}
