// import { h, Component } from 'preact';
// import { fetch, format } from '../helpers/utils';
// import Icon from './icon';

// export default class ListItem extends Component<
//   { data: any; dir_path: string; blob_path: string },
//   { children: any[]; fileContent: string }
// > {
//   constructor(props) {
//     super(props);
//     this.state = {
//       children: [],
//       fileContent: ''
//     };
//   }

//   async fetchDir(path) {
//     let items = await fetch(format(this.props.dir_path, path));
//     this.setState({ children: JSON.parse(items) });
//     return items;
//   }

//   async fetchFile(sha: string) {
//     let response = await fetch(format(this.props.blob_path, sha));

//     let fileContent = window.atob(JSON.parse(response).content);
//     this.setState({ fileContent });
//   }

//   isDir(item): boolean {
//     return item.type === 'dir';
//   }

//   render() {
//     return (
//       <ul>
//         <Icon type={this.props.data.type} />
//         <button
//           onClick={() =>
//             this.isDir(this.props.data)
//               ? this.fetchDir(this.props.data.path)
//               : this.fetchFile(this.props.data.sha)
//           }
//         >
//           {this.props.data.name}
//         </button>
//         {this.state.children.map(child => (
//           <li>
//             <ListItem
//               data={child}
//               dir_path={this.props.dir_path}
//               blob_path={this.props.blob_path}
//             />
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
