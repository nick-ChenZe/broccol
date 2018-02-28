import { Component, h } from 'preact';
import { fetch, format } from '../helpers/utils';
import { inject, observer } from 'mobx-react';
import ListItem from '../components/list-item';
interface IItem {
  type: string;
  sha?: string;
  path: string;
  name: string;
}

interface IState {
  items: IItem[];
  fileContent: string;
}

interface IProp {
  dir_path: string;
  blob_path: string;
  repo_path: string;
  store?: any;
}

@inject('store')
@observer
export default class TriggerButton extends Component<IProp, IState> {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      fileContent: ''
    };
    this.fetchRepo = this.fetchRepo.bind(this);
  }

  async fetchRepo(url): Promise<IItem[]> {
    let items = await fetch(this.props.repo_path);
    this.setState({ items: JSON.parse(items) });
    return items;
  }

  render() {
    const { store } = this.props;
    const { count, increase } = store;
    return (
      <div>
        <button onClick={increase}>{count}</button>
        {this.state.items.map(item => (
          <ListItem
            data={item}
            dir_path={this.props.dir_path}
            blob_path={this.props.blob_path}
          />
        ))}
        <pre>{this.state.fileContent}</pre>
      </div>
    );
  }
}
