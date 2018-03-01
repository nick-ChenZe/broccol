import { Component, h } from 'preact';
import { inject, observer } from 'mobx-react';
import { autorun } from 'mobx';
import { REPOSITORY, IRepository } from '../store/index';
import { Folder } from '../types';

interface ITriggerBtnProp {
  [REPOSITORY]?: IRepository;
}

@inject(REPOSITORY)
@observer
export default class TriggerButton extends Component<ITriggerBtnProp, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const { REPOSITORY: store } = this.props;
    const { fetchPath, fetchRoot } = store;
    return (
      <div>
        <button onClick={fetchRoot}>Click</button>
        <pre>
          {store.fileTree.all().length}
          {store.fileTree.all().map(item => {
            return <p>{item.key}</p>;
          })}
        </pre>
      </div>
    );
  }
}
