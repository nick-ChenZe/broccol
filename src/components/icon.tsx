import { h, Component } from 'preact';
export default class Icon extends Component<{ type: string }, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg
        aria-hidden="true"
        height="16"
        version="1.1"
        viewBox="0 0 14 16"
        width="14"
        style="fill: #8397b0"
      >
        {this.props.type === 'dir' ? (
          <path
            fill-rule="evenodd"
            d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"
          />
        ) : (
          <path
            fill-rule="evenodd"
            d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"
          />
        )}
      </svg>
    );
  }
}
