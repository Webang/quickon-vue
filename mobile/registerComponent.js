import widgetMenu from './widget-menu';

export function registerComponent(Vue) {
  Object.keys(widgetMenu.widgetLabel).forEach(key => {
    const component = require(`./hsb-components/${key}`).default;
    Vue.component(component.name, component);
  });
}
