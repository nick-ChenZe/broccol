import { h, Component } from "preact";
import { Provider } from "mobx-react";
/**
 * A component that hoists its 'props' into context that can be injected into child components
 * via the MobX 'inject' decorator or function.
 * 
 * This component is an adapter for the MobX 'Provider' component and is a workaround because of the typing
 * issue reported in https://github.com/mobxjs/mobx-react/issues/342.
 */
export default class InjectionProvider extends Component<any, any> {
  /**
   * Renders the [[InjectionProvider]] into the component tree.
   * 
   * [[InjectionProvider#render]] simply creates a MobX 'Provider' component and supplies it with the
   * current props.
   */
  public render() {
      const stores = { ...this.props };

      // Remove the 'children' because we don't want that passed around via React's Context mechanism
      delete stores.children;

      return h(Provider as any, stores, this.props.children);
  }
}