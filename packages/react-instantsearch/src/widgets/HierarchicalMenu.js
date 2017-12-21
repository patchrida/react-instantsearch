import PropTypes from 'prop-types';
import React from 'react';
import BaseWidget from './BaseWidget';
import connectHierarchicalMenu from '../connectors/connectHierarchicalMenu.js';
import HierarchicalMenuComponent from '../components/HierarchicalMenu.js';
import classNames from '../components/classNames';

const cx = classNames('HierarchicalMenu');

/**
 * The hierarchical menu lets the user browse attributes using a tree-like structure.
 *
 * This is commonly used for multi-level categorization of products on e-commerce
 * websites. From a UX point of view, we suggest not displaying more than two levels deep.
 *
 * @name HierarchicalMenu
 * @kind widget
 * @requirements To use this widget, your attributes must be formatted in a specific way.
 * If you want for example to have a hiearchical menu of categories, objects in your index
 * should be formatted this way:
 *
 * ```json
 * [{
 *   "objectID": "321432",
 *   "name": "lemon",
 *   "categories.lvl0": "products",
 *   "categories.lvl1": "products > fruits",
 * },
 * {
 *   "objectID": "8976987",
 *   "name": "orange",
 *   "categories.lvl0": "products",
 *   "categories.lvl1": "products > fruits",
 * }]
 * ```
 *
 * It's also possible to provide more than one path for each level:
 *
 * ```json
 * {
 *   "objectID": "321432",
 *   "name": "lemon",
 *   "categories.lvl0": ["products", "goods"],
 *   "categories.lvl1": ["products > fruits", "goods > to eat"]
 * }
 * ```
 *
 * All attributes passed to the `attributes` prop must be present in "attributes for faceting"
 * on the Algolia dashboard or configured as `attributesForFaceting` via a set settings call to the Algolia API.
 *
 * @propType {string} attributes - List of attributes to use to generate the hierarchy of the menu. See the example for the convention to follow.
 * @propType {boolean} [showMore=false] - Flag to activate the show more button, for toggling the number of items between limitMin and limitMax.
 * @propType {number} [limitMin=10] -  The maximum number of items displayed.
 * @propType {number} [limitMax=20] -  The maximum number of items displayed when the user triggers the show more. Not considered if `showMore` is false.
 * @propType {string} [separator='>'] -  Specifies the level separator used in the data.
 * @propType {string[]} [rootPath=null] - The already selected and hidden path.
 * @propType {boolean} [showParentLevel=true] - Flag to set if the parent level should be displayed.
 * @propType {string} [defaultRefinement] - the item value selected by default
 * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
 * @propType {node} [header] - Adds a header to the widget.
 * @propType {node} [footer] - Adds a footer to the widget.
 * @themeKey ais-HierarchicalMenu - the root div of the widget
 * @themeKey ais-HierarchicalMenu-header - the header of the widget (optional)
 * @themeKey ais-HierarchicalMenu-body - the body of the widget
 * @themeKey ais-HierarchicalMenu-searchBox - the search box of the widget. See [the SearchBox documentation](widgets/SearchBox.html#classnames) for the classnames and translation keys of the SearchBox.
 * @themeKey ais-HierarchicalMenu-list - the list of menu items
 * @themeKey ais-HierarchicalMenu-list--lvl0 - the level 0 list of menu items
 * @themeKey ais-HierarchicalMenu-list--lvl1 - the level 1 list of menu items (and so on)
 * @themeKey ais-HierarchicalMenu-item - the menu list item
 * @themeKey ais-HierarchicalMenu-item--selected - the selected menu list item
 * @themeKey ais-HierarchicalMenu-item--parent - the menu list item containing children
 * @themeKey ais-HierarchicalMenu-link - the clickable menu element
 * @themeKey ais-HierarchicalMenu-label - the label of each item
 * @themeKey ais-HierarchicalMenu-count - the count of values for each item
 * @themeKey ais-HierarchicalMenu-footer - the footer of the widget (optional)
 * @translationKey showMore - The label of the show more button. Accepts one parameter, a boolean that is true if the values are expanded
 * @example
 * import React from 'react';

 * import { HierarchicalMenu, InstantSearch } from 'react-instantsearch/dom';
 *
 * export default function App() {
 *   return (
 *     <InstantSearch
 *       appId="latency"
 *       apiKey="6be0576ff61c053d5f9a3225e2a90f76"
 *       indexName="ikea"
 *     >
 *       <HierarchicalMenu
 *         id="categories"
 *         key="categories"
 *         attributes={[
 *           'category',
 *           'sub_category',
 *           'sub_sub_category',
 *         ]}
 *       />
 *     </InstantSearch>
 *   );
 * }
 */

const Widget = props => (
  <BaseWidget cx={cx} header={props.header} footer={props.footer}>
    <HierarchicalMenuComponent cx={cx} {...props} />
  </BaseWidget>
);

Widget.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
};

export default connectHierarchicalMenu(Widget);
